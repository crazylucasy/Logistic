"use client";

import * as XLSX from 'xlsx';
import React, {
  useState,
  useEffect,
  KeyboardEvent,
  ChangeEvent,
  useRef,
} from "react";
import {
  ConfigProvider,
  Space,
  Table,
  Input,
  Button,
  Select,
  Modal,
  Radio,
  Typography,
  Pagination,
  Form
} from "antd";
import Dragger from "antd/es/upload/Dragger";
import type { ColumnsType } from "antd/es/table";
import type { RadioChangeEvent, PaginationProps } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import { TranslateDataType } from "@/types/language";
import { LanguageDataType, TranslateListResoponse, SaveTranslateDataType } from "@/types/language";
import IconClose from "@/assets/closed.svg";
import IconEdit from "@/assets/edit.svg";
import IconTranslate from "@/assets/tans.svg";
import IconDelete from "@/assets/delete.svg";
import IconUpload from "@/assets/upload.svg";
import IconUploadBlack from "@/assets/upload_black.svg";
import IconExport from "@/assets/export.svg";
import IconExportGreen from "@/assets/export_green.svg";
import IconArrowLeft from "@/assets/arrowleft.svg";
import IconArrowRight from "@/assets/arrowright.svg";
import { useSelector } from "@/features/store";
import { useGetLanguageDataMutation, useGetTranslateListMutation, useSaveTranslateMutation } from "@/features/projects";
import { Astloch } from "next/font/google";
import { validateHeaderName } from 'http';

const { Text } = Typography;

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

function EditButton() {
  const [value, setValue] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
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
            <p className="text-2xl font-medium">Edit Language</p>
            <Button className="!p-2" onClick={handleCancel}>
              <IconClose />
            </Button>
          </div>
          <div className="p-6">
            <p className="text-base font-medium mb-2">Language</p>
            <Select
              placeholder="English(US)"
              options={[
                { value: "us", label: "English" },
                { value: "ge", label: "Destuch" },
              ]}
              className="!h-10 w-full mb-4"
            />
            <ConfigProvider
              theme={{
                token: {
                  colorPrimary: "#171F30",
                  colorPrimaryActive: "#171F30",
                },
              }}
            >
              <Radio.Group value={value} className="w-full mt-4">
                <Space className="!grid !grid-cols-2 !my-2">
                  <Radio value={1}>Right to Left</Radio>
                  <Radio value={2}>Left to Right</Radio>
                </Space>
              </Radio.Group>
            </ConfigProvider>
            <Button className="!w-full !bg-[#171F30] !text-white !my-2 !h-11 !text-base !rounded-md">
              Save Changes
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
}
function TranslateTable({ languageId }: { languageId: number }) {
  const itemRender1: PaginationProps["itemRender"] = (
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
  const [loading, setLoading] = useState(true);
  const [current, setCurrent] = useState(1);
  const [form] = Form.useForm();

  const [SaveTranslateProp] = useSaveTranslateMutation();
  
  const onSubmit = async (data: SaveTranslateDataType) => {
    setLoading(true);
    console.log(data);
    // await SaveTranslateProp({
    //   id: languageId,
    //   languageId: data.languageId,
    //   baseTextId: data.baseTextId,
    //   translatedText: data.translatedText,
    //   addStatus: data.addStatus,
    // });
    setLoading(false);
  };

  const dataFetchRef = useRef(false);
  const [getTranslateList, { isLoading }] =
    useGetTranslateListMutation();
  const translateList: TranslateListResoponse | null = useSelector(
    (state) => state.language.translateList
  );
  console.log(translateList);
  useEffect(() => {
    if (dataFetchRef.current) return;
    dataFetchRef.current = true;
    (async () => {
      setLoading(true);
      await getTranslateList({
        pageNumber: 1,
        pageSize: 10,
        languageId,
      });
      setLoading(false);
    })()
  }, [getTranslateList]);

  const handlePageChange = (pageNumber: number, pageSize: number) => {
    (async () => {
      setLoading(true);
      setCurrent(pageNumber);
      await getTranslateList({ pageNumber, pageSize, languageId });
      setLoading(false);
    })();
  };

  const [selectedKey, setSelectedKey] = useState<string | null>(null);

  const handleDivClick = (key: string) => {
    setSelectedKey((prevSelectedKey) => (prevSelectedKey === key ? null : key));
  };

  const columns: ColumnsType<TranslateDataType> = [
    {
      title: "Base Language Text",
      dataIndex: "base",
      key: "base",
      render: (render: string, record: TranslateDataType) => (
        <>
          <div className="w-[32vw]">
            <Text ellipsis={true}>{record.baseText}</Text>
          </div>
        </>
      ),
    },
    {
      title: "Translated Text",
      dataIndex: "trans",
      key: "trans",
      render: (render: string, record: TranslateDataType) => (
        <>
          {" "}
          <div
            onClick={() => handleDivClick(record.baseText)}
            className={`p-2 rounded-lg w-[32vw] ${selectedKey === record.baseText ? "border border-black" : ""
              }`}
          >
            <Text
              ellipsis={true}
              className={`text-base border-b ${selectedKey === record.baseText ? "border-black" : "border-gray-100"
                }`}
            >
              {record.translatedText}
            </Text>
            <p className="text-xs text-gray-400">Automatic translation</p>
          </div>
        </>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      width: 100,
      render: (render: string, record: TranslateDataType) => (
        <div className="px-2">
          {record.textStatus === "Added" && (
            <div className="bg-[#E6F9F0] text-center py-2 rounded-lg">
              <p className="text-[#01AF5B] font-semibold text-sm">Added</p>
            </div>
          )}
          {record.textStatus === "Pending" && (
            <div className="bg-[#FEEDED] text-center py-2 rounded-lg">
              <p className="text-[#AF0101] font-semibold text-sm">Pending</p>
            </div>
          )}
        </div>
      ),
    },
  ];
  // const data: TranslateDataType[] = [
  //   {
  //     key: "1",
  //     base: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries",
  //     trans:
  //       "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries",
  //     status: true,
  //   },
  //   {
  //     key: "2",
  //     base: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries",
  //     trans:
  //       "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries",
  //     status: false,
  //   },
  //   {
  //     key: "3",
  //     base: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries",
  //     trans:
  //       "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries",
  //     status: true,
  //   },
  //   {
  //     key: "4",
  //     base: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries",
  //     trans:
  //       "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries",
  //     status: true,
  //   },
  //   {
  //     key: "5",
  //     base: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries",
  //     trans:
  //       "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries",
  //     status: true,
  //   },
  //   {
  //     key: "6",
  //     base: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries",
  //     trans:
  //       "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries",
  //     status: true,
  //   },
  // ];
  return (
    <div className="flex flex-col h-[calc(100%-8rem)] justify-between">
      <div className="bg-[#F7F7F7] px-8 pt-10 pb-2">
        <Table
          loading={loading}
          columns={columns}
          dataSource={translateList?.list.map((item, index) => {
            return {
              ...item,
              key: index,
            };
          })}
          size="small"
          pagination={false}
          className="border border-gray-300 rounded-md border-b-0 rounded-b-none"
        />
        <div className="justify-between text-center py-4 border border-gray-300 rounded-b-md">
          <Pagination
            total={translateList?.totalCnt}
            itemRender={itemRender1}
            showSizeChanger={false}
            onChange={handlePageChange}
            current={current}
          />
        </div>
      </div>
      <div className="px-6">
        <Form form={form} onFinish={onSubmit}>
          <Button htmlType="submit" loading={isLoading} className="w-full !bg-[#171F30] !text-white !mt-4 !h-10 !text-base !rounded-md !font-semibold ">
            Save All Translation
          </Button>
        </Form>
      </div>
    </div>
  );
}
export default function Language() {
  const [form] = Form.useForm();
  const [isTranslate, setIsTranslate] = useState(false);
  const [current, setCurrent] = useState(1);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [getLanguageData, { isLoading }] = useGetLanguageDataMutation();
  const [loading, setLoading] = useState(true);
  const [sword, setSword] = useState("");
  const dataFetchRef = useRef(false);
  const language = useSelector((state) => state.language.language);
  const [languageId, setLanguageId] = useState(36);
  useEffect(() => {
    if (dataFetchRef.current) return;
    dataFetchRef.current = true;
    (async () => {
      setLoading(true);
      await getLanguageData({ pageNumber: 1, pageSize: 10 });
      setLoading(false);
    })();
  }, [getLanguageData]);

  const translateList: TranslateListResoponse | null = useSelector(
    (state) => state.language.translateList
  );
  const showUploadModal = () => {
    setIsUploadModalOpen(true);
  };

  const handleUploadOk = () => {
    setIsUploadModalOpen(false);
  };

  const handleUploadCancel = () => {
    setIsUploadModalOpen(false);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const columns: ColumnsType<LanguageDataType> = [
    {
      title: "Country Name",
      dataIndex: "languageName",
      key: "languageName",
    },
    {
      title: "Text Direction",
      dataIndex: "textDirection",
      key: "textDirection",
    },
    {
      title: "Action",
      key: "action",
      fixed: "right",
      width: 190,
      render: (record) => (
        <Space size="middle">
          <div className="flex gap-2">
            <EditButton />
            <Button className="!p-2 !h-9" onClick={() => { setIsTranslate(true); setLanguageId(record.id); }}>
              <IconTranslate />
            </Button>
            <Button className="!p-2 !h-9">
              <IconDelete />
            </Button>
          </div>
        </Space>
      ),
    },
  ];
  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const handlePageChange = (pageNumber: number, pageSize: number) => {
    (async () => {
      setLoading(true);
      setCurrent(pageNumber);
      await getLanguageData({ pageNumber, pageSize });
      setLoading(false);
    })();
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      (async () => {
        setLoading(true);
        await getLanguageData({
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

  const onSubmit = () => {

    const fileName = "translated text.xlsx"
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(translateList?.list ?? []);
    XLSX.utils.book_append_sheet(wb, ws, "Sheet 1");
    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([excelBuffer], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8'
    });
    const fileUrl = URL.createObjectURL(blob);
    const downloadLink = document.createElement("a");
    document.body.appendChild(downloadLink);
    downloadLink.href = fileUrl;
    downloadLink.download = fileName;
    downloadLink.click();
    document.body.removeChild(downloadLink);
    URL.revokeObjectURL(fileUrl);
  };
  return (
    <div className="min-w-[600px]">
      {!isTranslate && (
        <div>
          <div className="flex justify-between px-8 py-4 bg-white items-center">
            <div>
              <p className="text-2xl font-medium">List of Languages</p>
              <p className="text-sm">{language?.totalCnt} Total branches</p>
            </div>
            console.log()
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
            </div>
          </div>
          <div className="bg-[#F7F7F7] px-8 pt-10 pb-16 checkbox-round">
            <Table
              loading={loading}
              columns={columns}
              dataSource={language?.list.map((item, index) => {
                return {
                  ...item,
                  key: index,
                };
              })}
              size="small"
              scroll={{ x: 800 }}
              rowSelection={rowSelection}
              pagination={false}
              className="border border-gray-300 rounded-md border-b-0 rounded-b-none"
            />
            <div className="justify-between text-center py-4 border border-gray-300 rounded-b-md">
              <Pagination
                total={language?.totalCnt}
                itemRender={itemRender}
                showSizeChanger={false}
                onChange={handlePageChange}
                current={current}
              />
            </div>
          </div>
        </div>
      )}
      {isTranslate && (
        <div className="h-full">
          <div className="flex justify-between px-8 pt-8 pb-8 items-center">
            <p className="text-2xl font-medium">Edit Translation Page</p>
            <div className="flex gap-2">
              <Button
                onClick={showUploadModal}
                className="!flex !bg-[#171F30] !text-white !h-9 !text-sm !rounded-md !font-semibold !items-center gap-2"
              >
                <IconUpload />
                <p>Upload all</p>
              </Button>
              <Modal
                width={380}
                open={isUploadModalOpen}
                onOk={handleUploadOk}
                onCancel={handleUploadCancel}
                centered
                footer={false}
                closeIcon={false}
              >
                <div className="p-6 text-center">
                  <Dragger className="group !bg-white">
                    <div className="flex items-center justify-center py-2">
                      <IconUploadBlack />
                    </div>
                    <p className="text-sm text-[#1A1A1A]">
                      <span className="font-bold">Click to upload</span>&nbsp;
                      <span>or drag and drop</span>
                      <br />
                      <span>
                        Lorem ipsum is placeholder text commonly
                        <br /> used in the graphic, print, and publishing
                        <br /> industries.
                      </span>
                    </p>
                  </Dragger>
                  <Button className="w-full !text-[#171F30] !bg-white !mt-4 !h-[37px] !text-sm !rounded-md !font-semibold ">
                    Cancel
                  </Button>
                </div>
              </Modal>
              <Button
                onClick={showModal}
                className="!flex !h-9 !text-sm !rounded-md !font-semibold !items-center gap-2"
              >
                <IconExport />
                <p>Export</p>
              </Button>
              <Modal
                width={380}
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                centered
                footer={false}
                closeIcon={false}
              >
                <div className="p-6 text-center">
                  <Form form={form} layout="vertical" onFinish={onSubmit}>
                    <Button type="link">
                      <IconExportGreen />
                    </Button>
                    <p className="text-2xl font-medium mt-2">
                      Are you sure want to
                    </p>
                    <p className="text-2xl font-medium my-3">
                      Export this Translations
                    </p>
                    <p className="text-base text-[#B3B3B3] mt-4">
                      Lorem ipsum is placeholder text commonly <br /> used in the
                      graphic, print, and publishing ind
                    </p>

                    <Button htmlType="submit" onClick={handleCancel} className="w-full !bg-[#171F30] !text-white !mt-4 !h-9 !text-sm !rounded-md !font-semibold ">
                      Yeah, I want to export
                    </Button>
                    <Button

                      onClick={handleCancel}
                      className="w-full !text-[#171F30] !bg-white !mt-4 !h-9 !text-sm !rounded-md !font-semibold "
                    >
                      Cancel
                    </Button>
                  </Form>
                </div>
              </Modal>
              <Select
                defaultValue={"us"}
                options={[
                  { value: "us", label: "English" },
                  { value: "ge", label: "Destuch" },
                ]}
                className="!h-9 !font-semibold !w-[105px]"
              />
            </div>
          </div>
          <TranslateTable languageId={languageId} />
        </div>
      )}
    </div>
  );
}
