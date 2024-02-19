"use client";

import React, {
  useState,
  useEffect,
  ChangeEvent,
  KeyboardEvent,
  useRef,
} from "react";
import {
  Space,
  Table,
  Input,
  Button,
  Form,
  Modal,
  Pagination,
  Select,
} from "antd";
import type { RadioChangeEvent, PaginationProps } from "antd";
import type { ColumnsType } from "antd/es/table";
import { SearchOutlined } from "@ant-design/icons";

import {
  BaseTextResponse,
  BaseTextDataType,
  BaseTextSearchType,
  AddBaseTextDataProps,
  AddBaseTextProp,
} from "@/types/basetext";
import IconPlus from "@/assets/whitePlus.svg";
import IconClose from "@/assets/closed.svg";
import IconEdit from "@/assets/edit.svg";
import IconArrowLeft from "@/assets/arrowleft.svg";
import IconArrowRight from "@/assets/arrowright.svg";
import IconDelete from "@/assets/delete.svg";
import {
  useGetBaseTextDataMutation,
  useAddBaseTextMutation,
  useDeleteBaseTextMutation,
} from "@/features/projects";
import { useSelector } from "@/features/store";
import { text } from "stream/consumers";

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

const columns: ColumnsType<BaseTextDataType> = [
  {
    title: "Base Text",
    dataIndex: "baseText",
    key: "baseText",
  },
  {
    title: "Text Kind",
    dataIndex: "textKind",
    key: "textKind",
  },
  {
    title: "Action",
    key: "action",
    fixed: "right",
    width: 150,
    render: (record) => (
      <Space size="middle">
        <div className="flex gap-2">
          <EditButton value={record} />
        </div>
        <div className="flex gap-2">
          <DeleteButton value={record} />
        </div>
      </Space>
    ),
  },
];

function EditButton({ value }: { value: BaseTextDataType }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const basetext = useSelector((state) => state.basetext.searchtext);
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(true);
  const [getBaseTextData] = useGetBaseTextDataMutation();
  const [AddBaseTextProp, { isLoading }] = useAddBaseTextMutation();
  const initialValues = {
    baseText: value.baseText,
    textKind: value.textKind,
  };
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onSubmit = async (data: AddBaseTextProp) => {
    setLoading(true);
    let textKindId = data.textKind;
    if(textKindId == "Flutter App"){
      textKindId = "1";
    }
    if(textKindId == "Survey Web"){
      textKindId = "2";
    }
    if(textKindId == "Admin"){
      textKindId = "3";
    }
    await AddBaseTextProp({
      id: value.id,
      baseText: data.baseText,
      textKind: textKindId,
    });
    await getBaseTextData({ pageNumber: 1, pageSize: 10 });
    setIsModalOpen(false);
  };

  return (
    <>
      <Button onClick={showModal} className="!p-2 !h-9">
        <IconEdit />
      </Button>
      <Modal
        width={600}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
        closeIcon={false}
      >
        <div>
          <div className="flex justify-between p-6 pb-4 border-b-2">
            <p className="text-2xl font-medium">Edit Base texts</p>
            <Button className="!p-2" onClick={handleCancel}>
              <IconClose />
            </Button>
          </div>
          <Form form={form} onFinish={onSubmit} initialValues={initialValues}>
            <div className="p-6">
              <p className="text-base font-medium">Base text</p>
              <Form.Item
                name="baseText"
                rules={[
                  { message: "This is a required field", required: true },
                ]}
                className="!mb-0"
              >
                <Input
                  type="text"
                  size="large"
                  placeholder="Base texts"
                  className="w-full !mt-2"
                />
              </Form.Item>
              <p className="text-base font-medium !mt-4">Text kind</p>
              <Form.Item
                name="textKind"
                rules={[
                  { message: "This is a required field", required: true },
                ]}
                className="!mb-4"
              >
                <Select
                  options={[
                    { value: 1, label: "Flutter App" },
                    { value: 2, label: "Survey Web" },
                    { value: 3, label: "Admin" },
                  ]}
                  className="!h-10 !mt-2"
                />
              </Form.Item>
              <Button
                className="w-full !bg-[#171F30] !text-white !my-2 !h-11 !text-base !font-semibold !rounded-md"
                htmlType="submit"
                loading={isLoading}
              >
                Save Changes
              </Button>
            </div>
          </Form>
        </div>
      </Modal>
    </>
  );
}
function DeleteButton({ value }: { value: BaseTextDataType }) {
  const [deleteBaseTextMutation] = useDeleteBaseTextMutation();
  const [getBaseTextData, { isLoading }] = useGetBaseTextDataMutation();
  const handleRemove = async () => {
    await deleteBaseTextMutation({ id: value.id });
    await getBaseTextData({ pageNumber: 1, pageSize: 10 });
  };
  return (
    <Button onClick={handleRemove} className="!p-2 !h-9">
      <IconDelete />
    </Button>
  );
}
export default function Basetext() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [current, setCurrent] = useState(1);
  const dataFetchRef = useRef(false);
  // const [getBaseTextData] = useGetBaseTextDataMutation();
  const [getBaseTextData, { isLoading }] = useGetBaseTextDataMutation();
  const [sword, setSword] = useState("");
  const [addBaseText] = useAddBaseTextMutation();

  const [form] = Form.useForm();
  const [loading, setLoading] = useState(true);

  const basetext: BaseTextResponse | null = useSelector(
    (state) => state.basetext.basetext
  );

  const searchBasetext = useSelector((state) => state.basetext.searchtext);

  useEffect(() => {
    if (dataFetchRef.current) return;
    dataFetchRef.current = true;
    (async () => {
      setLoading(true);
      await getBaseTextData({ pageNumber: 1, pageSize: 10 });
      setLoading(false);
    })();
  }, [getBaseTextData]);

  const handlePageChange = (pageNumber: number, pageSize: number) => {
    (async () => {
      setLoading(true);
      setCurrent(pageNumber);
      await getBaseTextData({ pageNumber, pageSize });
      setLoading(false);
    })();
  };
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
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

  const onSubmit = async (data: AddBaseTextDataProps) => {
    setLoading(true);
    await addBaseText({
      ...data,
      id: 0,
    });
    await getBaseTextData({
      pageNumber: current,
      pageSize: 10,
      ...data,
    });
    setLoading(false);
    setIsModalOpen(false);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      (async () => {
        setLoading(true);
        await getBaseTextData({
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

  return (
    <div className="min-w-[600px]">
      <div className="flex justify-between px-8 py-4 bg-white items-center">
        <div>
          <p className="text-2xl font-medium">List of Base texts</p>
          <p className="text-sm">{basetext?.totalCnt} Total Base texts</p>
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
          <Button
            onClick={showModal}
            className="!flex !w-[146px] !bg-[#171F30] !gap-2 !text-white !my-4 !h-10 !text-sm !rounded-lg !font-semibold !items-center"
          >
            <IconPlus /> Add Base text
          </Button>
          <Modal
            width={600}
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={false}
            closeIcon={false}
          >
            <div>
              <div className="flex justify-between p-6 pb-4 border-b-2">
                <p className="text-2xl font-medium">Add Base texts</p>
                <Button className="!p-2" onClick={handleCancel}>
                  <IconClose />
                </Button>
              </div>
              <Form form={form} onFinish={onSubmit}>
                <div className="p-6">
                  <p className="text-base font-medium">Base Text</p>
                  <Form.Item
                    name="baseText"
                    rules={[
                      { message: "This is a required field.", required: true },
                    ]}
                    className="!mb-0"
                  >
                    <Input type="text" size="large" className="w-full !mt-2" />
                  </Form.Item>

                  <p className="text-base font-medium !mt-2">Text Kind</p>
                  <Form.Item
                    name="textKind"
                    rules={[
                      { message: "This is a required field.", required: true },
                    ]}
                    className="!mb-0"
                  >
                    <Select
                      options={[
                        { value: 1, label: "Flutter APP" },
                        { value: 2, label: "Survey Web" },
                        { value: 3, label: "Admin" },
                      ]}
                      className="!h-10 !mt-2"
                    />
                  </Form.Item>

                  <Button
                    htmlType="submit"
                    loading={isLoading}
                    className="!w-full !bg-[#171F30] !text-white !mt-8 !h-11 !text-base !rounded-md !font-semibold "
                  >
                    Add Base texts
                  </Button>
                </div>
              </Form>
            </div>
          </Modal>
        </div>
      </div>
      <div className="bg-[#F7F7F7] px-8 pt-10 pb-16 checkbox-round">
        <Table
          loading={loading}
          columns={columns}
          dataSource={basetext?.list.map((item, index) => {
            return {
              ...item,
              key: index,
            };
          })}
          scroll={{ x: 500 }}
          size="small"
          rowSelection={rowSelection}
          pagination={false}
          className="border border-gray-300 rounded-md border-b-0 rounded-b-none"
        />
        <div className="justify-between text-center py-4 border border-gray-300 rounded-b-md">
          <Pagination
            total={basetext?.totalCnt}
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
