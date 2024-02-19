"use client";

import React, {
  useState,
  useEffect,
  KeyboardEvent,
  ChangeEvent,
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
import { SearchOutlined } from "@ant-design/icons";
import { CustomerDataType, CustomerSearchType } from "@/types/customer";

import IconStar from "@/assets/star.svg";
import IconArrowLeft from "@/assets/arrowleft.svg";
import IconArrowRight from "@/assets/arrowright.svg";
import { useGetCustomerDataMutation } from "@/features/projects";
import { useSelector } from "@/features/store";

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

const columns: ColumnsType<CustomerDataType> = [
  {
    title: "Merchant Name",
    dataIndex: "merchantName",
    key: "merchantName",
    width: 270,
  },
  {
    title: "Customer Name",
    dataIndex: "customerName",
    key: "customerName",
    width: 270,
  },
  {
    title: "Customer Phone",
    dataIndex: "phone",
    key: "phone",
    width: 270,
  },
  {
    title: "Customer Email",
    dataIndex: "email",
    key: "email",
    width: 250,
  },
  {
    title: "Count of Ratings",
    dataIndex: "rateCount",
    key: "rateCount",
    width: 250,
    render: (record) => (
      <div className="flex items-center gap-2 py-2">
        <IconStar />
        <p className="mt-0.5">{record}</p>
      </div>
    ),
  },
];

export default function Contact() {
  const [open, setOpen] = useState(false);
  const dataFetchRef = useRef(false);
  const [getCustomerData, { isLoading }] = useGetCustomerDataMutation();
  const [form] = Form.useForm();
  const [sword, setSword] = useState("");
  const [current, setCurrent] = useState(1);
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [loading, setLoading] = useState(true);
  const customer = useSelector((state) => state.customer.customer);

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  useEffect(() => {
    if (dataFetchRef.current) return;
    dataFetchRef.current = true;
    (async () => {
      setLoading(true);
      await getCustomerData({ pageNumber: 1, pageSize: 10 });
      setLoading(false);
    })();
  }, [getCustomerData]);

  const handlePageChange = (pageNumber: number, pageSize: number) => {
    console.log(pageNumber, pageSize);
    (async () => {
      setLoading(true);
      setCurrent(pageNumber);
      await getCustomerData({ pageNumber, pageSize });
      setLoading(false);
    })();
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      (async () => {
        setLoading(true);
        await getCustomerData({
          pageNumber: current,
          pageSize: 10,
          sword,
        });
        setLoading(false);
      })();
    }
  };

  const handleSwordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSword(e.target.value);
  };

  const onSubmit = (data: CustomerSearchType) => {
    (async () => {
      await getCustomerData({ pageNumber: current, pageSize: 10, ...data });
      setOpen(false);
    })();
    console.log(data);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className="min-w-[600px]">
      <div className="flex justify-between px-8 py-4 bg-white">
        <div className="py-2.5">
          <p className="text-2xl font-medium">List of Customers</p>
          <p className="text-sm">{customer?.totalCnt} Total customers</p>
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
                    <Form.Item name="merchantName" className="!mb-0">
                      <Input
                        type="text"
                        size="large"
                        placeholder="Search merchant name"
                        className="w-full !my-2"
                      />
                    </Form.Item>

                    <p className="text-base font-medium">Customer Name</p>
                    <Form.Item name="customerName" className="!mb-0">
                      <Input
                        type="text"
                        size="large"
                        placeholder="Search customer name"
                        className="w-full !my-2"
                      />
                    </Form.Item>

                    <p className="text-base font-medium mb-2">Ratings</p>
                    <Form.Item name="rating" className="!mb-0">
                      <Select
                        placeholder="Select ratings"
                        // onChange={handleChange}
                        options={[
                          {
                            value: 5,
                            label: (
                              <div className="flex items-center gap-1">
                                <IconStar />
                                <IconStar />
                                <IconStar />
                                <IconStar />
                                <IconStar />
                                <p className="text-sm">(5)</p>
                              </div>
                            ),
                          },
                          {
                            value: 4,
                            label: (
                              <div className="flex items-center gap-1">
                                <IconStar />
                                <IconStar />
                                <IconStar />
                                <IconStar />
                                <p className="text-sm">(4)</p>
                              </div>
                            ),
                          },
                          {
                            value: 3,
                            label: (
                              <div className="flex items-center gap-1">
                                <IconStar />
                                <IconStar />
                                <IconStar />
                                <p className="text-sm">(3)</p>
                              </div>
                            ),
                          },
                          {
                            value: 2,
                            label: (
                              <div className="flex items-center gap-1">
                                <IconStar />
                                <IconStar />
                                <p className="text-sm">(2)</p>
                              </div>
                            ),
                          },
                          {
                            value: 1,
                            label: (
                              <div className="flex items-center gap-1">
                                <IconStar />
                                <p className="text-sm">(1)</p>
                              </div>
                            ),
                          },
                        ]}
                        className="!h-10 w-full !items-center"
                      />
                    </Form.Item>
                  </div>
                </div>
                <div className="grid gap-2 grid-cols-2 px-6 mb-8">
                  <Button
                    htmlType="reset"
                    className="!w-full !bg-white !text-black my-4 !h-11 !text-base !rounded-lg !font-medium"
                  >
                    Clear
                  </Button>
                  <Button
                    className="!w-full !bg-[#171F30] !text-white my-4 !h-11 !rounded-lg !font-medium"
                    htmlType="submit"
                    loading={isLoading}
                  >
                    Apply Filter
                  </Button>
                </div>
              </div>
            </Form>
          </Drawer>
        </div>
      </div>
      <div className="bg-[#F7F7F7] px-8 pt-10 pb-2 checkbox-round">
        <Table
          columns={columns}
          loading={loading}
          dataSource={customer?.list.map((item, index) => {
            return {
              ...item,
              key: index,
            };
          })}
          scroll={{ x: 500 }}
          rowSelection={rowSelection}
          pagination={false}
          size="small"
          className="border border-gray-300 rounded-md border-b-0 rounded-b-none"
        />
        <div className="justify-between text-center py-4 border border-gray-300 rounded-b-md">
          <Pagination
            total={customer?.totalCnt}
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
