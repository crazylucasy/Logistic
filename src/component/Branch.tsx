"use client";

import React, {
  useEffect,
  useState,
  useLayoutEffect,
  ChangeEvent,
  KeyboardEvent,
  useRef,
} from "react";
import {
  Space,
  Table,
  Input,
  Button,
  Select,
  Drawer,
  Pagination,
  Form,
} from "antd";
import type { ColumnsType } from "antd/es/table";
import type { RadioChangeEvent, PaginationProps } from "antd";

import IconClose from "@/assets/closed.svg";
import IconFilter from "@/assets/filter.svg";
import IconArrowLeft from "@/assets/arrowleft.svg";
import IconArrowRight from "@/assets/arrowright.svg";
import { SearchOutlined } from "@ant-design/icons";
import {
  BranchDataType,
  BranchResponse,
  BranchSearchType,
} from "@/types/branch";
import {
  useGetBranchDataMutation,
  useUpdateBranchStateMutation,
} from "@/features/projects";
import { useSelector } from "@/features/store";
import { redirect } from "next/navigation";

const itemRender: PaginationProps["itemRender"] = (
  _,
  type,
  originalElement
) => {
  if (type === "prev") {
    return (
      <Button className="!flex items-center justify-center gap-2 !w-[115px]">
        <IconArrowLeft />
        <p className="text-black font-semibold">Previous</p>
      </Button>
    );
  }
  if (type === "next") {
    return (
      <Button className="!flex items-center justify-center gap-2 !w-[115px]">
        <p className="text-black font-semibold">Next</p>
        <IconArrowRight />
      </Button>
    );
  }
  return originalElement;
};

const columns: ColumnsType<BranchDataType> = [
  {
    title: "Merchant Name",
    dataIndex: "merchantName",
    key: "merchantName",
  },
  {
    title: "Branch Name",
    dataIndex: "branchName",
    key: "branchName",
  },
  {
    title: "QR Code",
    dataIndex: "qrUrl",
    key: "qrUrl",
    render: (record) => (
      <div className="flex items-center gap-2">
        <img src={record} className="mt-0.5" alt={"QR Code"} />
      </div>
    ),
  },
  {
    title: "Count of Visits to Page",
    dataIndex: "visitCnt",
    key: "visitCnt",
    align: "center",
  },
  {
    title: "Count of Feedback Submitted",
    dataIndex: "feedbackCnt",
    key: "feedbackCnt",
    align: "center",
  },
  {
    title: "Action",
    key: "status",
    fixed: "right",
    width: 200,
    render: (record) => (
      <Space size="middle">
        <div className="flex gap-2">
          <SelectButton branchId={record.id} status={record.status} />
        </div>
      </Space>
    ),
  },
];
const options = [
  { value: 1, label: "Active" },
  { value: 2, label: "Inactive" },
];
function SelectButton({
  branchId,
  status,
}: {
  branchId: number;
  status: string;
}) {
  const [updateBranchState] = useUpdateBranchStateMutation();
  const [getBranchData] = useGetBranchDataMutation();

  const handleChange = async (e: any) => {
    console.log(e, branchId);
    await updateBranchState({ id: branchId, status: e as number });
    await getBranchData({ pageNumber: 1, pageSize: 10 });
  };

  return (
    <Select
      defaultValue={{ label: "Active" }}
      style={{ width: 120 }}
      options={options}
      className="!h-9"
      onChange={handleChange}
    />
  );
}
export default function Branch() {
  const dataFetchRef = useRef(false);
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(1);
  const [getBranchData, { isLoading }] = useGetBranchDataMutation();
  const [sword, setSword] = useState("");
  const branch: BranchResponse | null = useSelector(
    (state) => state.branch.branch
  );
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState(1);

  useEffect(() => {
    if (dataFetchRef.current) return;
    dataFetchRef.current = true;
    (async () => {
      setLoading(true);
      await getBranchData({ pageNumber: 1, pageSize: 10 });
      setLoading(false);
    })();
  }, [getBranchData]);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };

  const handlePageChange = (pageNumber: number, pageSize: number) => {
    (async () => {
      setLoading(true);
      setCurrent(pageNumber);
      await getBranchData({ pageNumber, pageSize });
      setLoading(false);
    })();
  };
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const onSubmit = async (data: BranchSearchType) => {
    await getBranchData({
      pageNumber: current,
      pageSize: 10,
      ...data,
    });
    setOpen(false);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      (async () => {
        getBranchData({
          pageNumber: current,
          pageSize: 10,
          sword,
        });
      })();
    }
  };

  const handleSwordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSword(e.target.value);
  };

  return (
    <div className="min-w-[600px]">
      <div className="flex justify-between px-8 py-4 bg-white">
        <div className="py-2.5">
          <p className="text-2xl font-medium">List of Branches</p>
          <p className="text-sm">{branch?.totalCnt} Total branches</p>
        </div>
        <div className="flex items-center gap-2">
          <Input
            size="large"
            placeholder="Search..."
            prefix={<SearchOutlined />}
            className="h-10 !w-[340px]"
            value={sword}
            onChange={handleSwordChange}
            onKeyDown={handleKeyDown}
          />
          <Button onClick={showDrawer} className="!p-2 !h-10">
            <IconFilter />
          </Button>
          <Drawer
            placement="right"
            onClose={onClose}
            closeIcon={false}
            open={open}
            width={600}
          >
            <Form form={form} onFinish={onSubmit} className="h-full">
              <div className="flex flex-col h-full justify-between">
                <div>
                  <div className="border-b flex justify-between p-6 mb-2">
                    <p className="text-2xl font-medium">Filters</p>
                    <Button className="!p-2" onClick={onClose}>
                      <IconClose />
                    </Button>
                  </div>
                  <div className="p-6">
                    <p className="text-base font-medium">Merchant Name</p>
                    <Form.Item name="merchantName" className="!mb-2">
                      <Input
                        type="text"
                        size="large"
                        placeholder="Search name"
                        className="w-full !mt-2"
                      />
                    </Form.Item>
                    <p className="text-base font-medium">Branch Name</p>
                    <Form.Item name="branchName" className="!mb-2">
                      <Input
                        type="text"
                        size="large"
                        placeholder="Search branch name"
                        className="w-full !mt-2"
                      />
                    </Form.Item>
                    <p className="text-base font-medium my-2">Status</p>
                    <Form.Item name="status" className="!mb-2">
                      <Select
                        placeholder="Select merchants status"
                        options={[
                          { value: "active", label: "Active" },
                          { value: "inactive", label: "Inactive" },
                        ]}
                        className="!h-10 w-full"
                      />
                    </Form.Item>
                  </div>
                </div>
                <div className="grid gap-2 grid-cols-2 px-6 mb-8">
                  <Button
                    htmlType="reset"
                    className="!w-full !bg-white !text-black !my-4 !h-11 !text-base !rounded-lg !font-medium"
                  >
                    Clear
                  </Button>
                  <Button
                    htmlType="submit"
                    loading={isLoading}
                    className="!w-full !bg-[#171F30] !text-white !my-4 !h-11 !text-base !rounded-lg !font-medium "
                  >
                    Apply Filter
                  </Button>
                </div>
              </div>
            </Form>
          </Drawer>
        </div>
      </div>
      <div className="bg-[#F7F7F7] px-8 pt-10 pb-16 checkbox-round">
        <Table
          loading={loading}
          columns={columns}
          dataSource={branch?.list.map((item, index) => {
            return {
              ...item,
              key: index,
            };
          })}
          size="small"
          rowSelection={rowSelection}
          pagination={false}
          className="border border-gray-300 rounded-md border-b-0 rounded-b-none"
        />
        <div className="justify-between text-center py-4 border border-gray-300 rounded-b-md">
          <Pagination
            total={branch?.totalCnt}
            itemRender={itemRender}
            showSizeChanger={false}
            onChange={handlePageChange}
            current={current}
          />
        </div>
      </div>
    </div>
  );
}
