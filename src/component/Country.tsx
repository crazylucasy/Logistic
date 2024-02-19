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
  Modal,
  Pagination,
  Form,
} from "antd";
import type { PaginationProps } from "antd";
import type { ColumnsType } from "antd/es/table";
import { SearchOutlined } from "@ant-design/icons";
import countryList from "country-list";

import { AddCountryDataProps, CountryDataType, CountryCurrencyListResponse } from "@/types/country";
import IconPlus from "@/assets/whitePlus.svg";
import IconClose from "@/assets/closed.svg";
import IconEdit from "@/assets/edit.svg";
import IconArrowLeft from "@/assets/arrowleft.svg";
import IconArrowRight from "@/assets/arrowright.svg";
import {
  useAddCountryMutation,
  useGetCountryDataMutation,
  useGetCountryLanguageDataMutation,
  useGetCountryCurrencyListMutation,
} from "@/features/projects";
import { CountryResponse, AddCountryProp } from "@/types/country";
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

const columns: ColumnsType<CountryDataType> = [
  {
    title: "Country Name",
    dataIndex: "countryName",
    key: "countryName",
  },
  {
    title: "Country Language",
    dataIndex: "language",
    key: "language",
  },
  {
    title: "Currency",
    dataIndex: "currency",
    key: "currency",
  },
  {
    title: "Action",
    key: "action",
    fixed: "right",
    width: 90,
    render: (record) => (
      <Space size="middle">
        <div className="flex gap-2">
          <EditButton value={record} />
        </div>
      </Space>
    ),
  },
];

function EditButton({ value }: { value: CountryDataType }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const language = useSelector((state) => state.country.language);
  const CountryCurrencyList: CountryCurrencyListResponse = useSelector(
    (state) => state.country.countryCurrencyList
  );

  const [getCountryCurrencyList] = useGetCountryCurrencyListMutation();

  const [form] = Form.useForm();
  const [getCountryData] = useGetCountryDataMutation();
  const [addCountry, { isLoading }] = useAddCountryMutation();
  const initialValues = {
    countryName: value.countryName,
    language: value.language,
    currency: value.currency,
  };
  const showModal = () => {
    (async () => {
      await getCountryCurrencyList({});
    })();
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onSubmit = async (data: AddCountryProp) => {
    const lang = language.find((item) => item.value === data.language);
    console.log(lang);
    const submitData: AddCountryDataProps = {
      ...data,
      language: lang?.label as string,
      id: value.id,
      defaultLanguageId: 36,
      additionalLanguageId: 1,
      countryCode: countryList.getCode(data.countryName),
    };
    await addCountry(submitData);
    await getCountryData({ pageNumber: 1, pageSize: 10 });
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
            <p className="text-2xl font-medium">Edit Countries</p>
            <Button className="!p-2" onClick={handleCancel}>
              <IconClose />
            </Button>
          </div>
          <Form form={form} onFinish={onSubmit} initialValues={initialValues}>
            <div className="p-6">
              <p className="text-base font-medium mb-2">Country</p>
              <Form.Item
                name="countryName"
                rules={[
                  { message: "This is a required field", required: true },
                ]}
              >
                <Input
                  type="text"
                  size="large"
                  placeholder="e.g Singapore"
                  className="w-full mt-2"
                />
              </Form.Item>

              <p className="text-base font-medium my-2">Language</p>
              <Form.Item
                name="language"
                rules={[
                  { message: "This is a required field", required: true },
                ]}
              >
                <Select
                  placeholder="English(US)"
                  options={language}
                  className="!h-10 w-full"
                />
              </Form.Item>

              <p className="text-base font-medium !mb-2">Currency</p>
              <Form.Item
                // name="currency"
                rules={[
                  { message: "This is a required field", required: true },
                ]}
              >
                <Select
                  options={CountryCurrencyList.map((item: any) => {
                    return {
                      value: item.id,
                      label: item.value + " " + item.label,
                    };
                  })}
                  className="!h-10 w-full"
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
export default function Country() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [current, setCurrent] = useState(1);

  const [getCountryData] = useGetCountryDataMutation();
  const [getCountryLanguageData] = useGetCountryLanguageDataMutation();
  const [addCountry, { isLoading }] = useAddCountryMutation();
  const [loading, setLoading] = useState(true);
  const [sword, setSword] = useState("");
  const dataFetchRef = useRef(false);

  const [form] = Form.useForm();

  const country: CountryResponse | null = useSelector(
    (store) => store.country.country
  );

  const language = useSelector((state) => state.country.language);

  useEffect(() => {
    if (dataFetchRef.current) return;
    dataFetchRef.current = true;
    (async () => {
      setLoading(true);
      await getCountryData({ pageNumber: 1, pageSize: 10 });
      await getCountryLanguageData({});
      setLoading(false);
    })();
  }, [getCountryData]);

  const handlePageChange = (pageNumber: number, pageSize: number) => {
    (async () => {
      setLoading(true);
      setCurrent(pageNumber);
      await getCountryData({ pageNumber, pageSize });
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
  const onSubmit = async (data: AddCountryProp) => {
    const lang = language.find((item) => item.value === data.language);
    const submitData: AddCountryDataProps = {
      ...data,
      language: lang?.label as string,
      id: 0,
      defaultLanguageId: 36,
      additionalLanguageId: 1,
      countryCode: countryList.getCode(data.countryName),
    };
    await addCountry(submitData);
    await getCountryData({ pageNumber: 1, pageSize: 10 });
    setIsModalOpen(false);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      (async () => {
        setLoading(true);
        await getCountryData({
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
          <p className="text-2xl font-medium">List of Countries</p>
          <p className="text-sm">{country?.totalCnt} Total Countries</p>
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
            <IconPlus /> Add Country
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
                <p className="text-2xl font-medium">Add Countries</p>
                <Button className="!p-2" onClick={handleCancel}>
                  <IconClose />
                </Button>
              </div>
              <Form form={form} onFinish={onSubmit}>
                <div className="p-6">
                  <p className="text-base font-medium">Country Name</p>
                  <Form.Item
                    name="countryName"
                    rules={[
                      { message: "This is a required field", required: true },
                    ]}
                  >
                    <Input
                      type="text"
                      size="large"
                      placeholder="e.g Singapore"
                      className="w-full mt-2"
                    />
                  </Form.Item>

                  <p className="text-base font-medium mt-2">Language</p>
                  <Form.Item
                    name="language"
                    rules={[
                      { message: "This is a required field", required: true },
                    ]}
                  >
                    <Select
                      placeholder="English(US)"
                      options={language}
                      className="!h-10 w-full mt-2"
                    />
                  </Form.Item>

                  <p className="text-base font-medium mt-2">Add Currency</p>
                  <Form.Item
                    name="currency"
                    rules={[
                      { message: "This is a required field", required: true },
                    ]}
                  >
                    <Input
                      type="text"
                      size="large"
                      placeholder="Dollar Singapore"
                      className="w-full mt-2"
                    />
                  </Form.Item>

                  <p className="text-base font-medium mt-2">Default Country</p>
                  <Form.Item name="defaultCountry" className="!mb-0">
                    <Select
                      placeholder="Germany"
                      options={[
                        { value: "germany", label: "Germany" },
                        { value: "us", label: "United Kingdom" },
                      ]}
                      className="!h-10 w-full mt-2"
                    />
                  </Form.Item>

                  <Button
                    className="!w-full !bg-[#171F30] !text-white !mt-8 !h-11 !text-base !rounded-md !font-semibold"
                    htmlType="submit"
                    loading={isLoading}
                  >
                    Add Countries
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
          dataSource={country?.list.map((item, index) => {
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
            total={country?.totalCnt}
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
