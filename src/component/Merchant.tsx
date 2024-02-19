"use client";

import React, {
  useEffect,
  useState,
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
  DatePicker,
  Drawer,
  Pagination,
  Form,
  InputNumber,
} from "antd";
import type { ColumnsType } from "antd/es/table";
import CustomTable from "./Table";
import type { DatePickerProps, RadioChangeEvent, PaginationProps } from "antd";

import IconEye from "@/assets/eye.svg";
import IconPlus from "@/assets/plus.svg";
import IconEdit from "@/assets/edit.svg";
import IconClose from "@/assets/closed.svg";
import IconFilter from "@/assets/filter.svg";
import IconArrowLeft from "@/assets/arrowleft.svg";
import IconArrowRight from "@/assets/arrowright.svg";
import { SearchOutlined } from "@ant-design/icons";
import {
  AddPaymentProps,
  CountryListResponse,
  CurrencyListResponse,
  MerchantDataType,
  MerchantPaymentDataType,
  MerchantPaymentListResponse,
  MerchantSearchType,
} from "@/types/merchant";
import {
  useAddMerchantPaymentMutation,
  useGetCountryListMutation,
  useGetCurrencyListMutation,
  useGetMerchantDataMutation,
  useGetMerchantPaymentListMutation,
  useUpdateMerchantCountryMutation,
  useUpdateMerchantStateMutation,
} from "@/features/projects/merchant";
import { useSelector } from "@/features/store";
import { MerchantResponse } from "@/types/merchant";
import dayjs from "dayjs";

const MemoizedTable = React.memo(CustomTable);
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

const columns: ColumnsType<MerchantDataType> = [
  {
    title: "Country",
    dataIndex: "countryName",
    key: "countryName",
    width: 130,
  },
  {
    title: "Currency",
    dataIndex: "currency",
    key: "currency",
    width: 130,
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    width: 120,
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    width: 260,
  },
  {
    title: "Phone",
    dataIndex: "phone",
    key: "phone",
    width: 170,
  },
  {
    title: "Sign-Up Date",
    dataIndex: "createDate",
    key: "createDate",
    width: 200,
  },
  {
    title: "Merchant Name",
    dataIndex: "merchantName",
    key: "merchantName",
    width: 150,
  },
  {
    title: "Next Payment Date",
    dataIndex: "nextPayDate",
    key: "nextPayDate",
    width: 170,
  },
  {
    title: "Expected Payment",
    dataIndex: "nextPayAmount",
    key: "nextPayAmount",
    align: "center",
    width: 150,
  },
  {
    title: "Max Number of Branches",
    dataIndex: "branchCnt",
    key: "branchCnt",
    align: "center",
    width: 200,
  },
  {
    title: "Max Scan",
    dataIndex: "maxScanCnt",
    key: "maxScanCnt",
    align: "center",
    width: 150,
  },
  {
    title: "Latest Payment Date",
    dataIndex: "lastPayDate",
    key: "lastPayDate",
    width: 150,
  },
  {
    title: "Latest Payment",
    dataIndex: "lastPayAmount",
    key: "lastPayAmount",
    align: "center",
    width: 150,
  },
  {
    title: "Action",
    key: "action",
    fixed: "right",
    width: 290,
    render: (record) => (
      <Space size="middle">
        <div className="flex gap-2">
          <EyeButton merchantId={record.id} />
          <PlusButton merchantId={record.id} />
          <EditButton value={record} />
          <SelectButton merchantId={record.id} status={record.status} />
        </div>
      </Space>
    ),
  },
];

const options = [
  { value: 1, label: "Active" },
  { value: 2, label: "Inactive" },
  { value: 3, label: "Paid" },
  { value: 4, label: "Unpaid" },
];
function SelectButton({
  merchantId,
  status,
}: {
  merchantId: number;
  status: string;
}) {
  const [updateMerchantState] = useUpdateMerchantStateMutation();
  const [getMerchantData] = useGetMerchantDataMutation();

  const handleChange = async (e: any) => {
    await updateMerchantState({ merchantId, status: e as number });
    await getMerchantData({ pageNumber: 1, pageSize: 10 });
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
function EyeButton({ merchantId }: { merchantId: number }) {
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
  const dataFetchRef = useRef(false);
  const [getMerchantPaymentList, { isLoading }] =
    useGetMerchantPaymentListMutation();
  const merchantPaymentList: MerchantPaymentListResponse | null = useSelector(
    (state) => state.merchant.merchantPaymentList
  );

  useEffect(() => {
    console.log("PPPPPPPPPPPPPPPPPPPPPPPPPPPP");

    if (dataFetchRef.current) return;
    dataFetchRef.current = true;
    (async () => {
      setLoading(true);
      setLoading(false);
    })();
  }, [getMerchantPaymentList]);

  const [loading, setLoading] = useState(true);
  const [current, setCurrent] = useState(1);
  const handlePageChange = (pageNumber: number, pageSize: number) => {
    (async () => {
      setLoading(true);
      setCurrent(pageNumber);
      await getMerchantPaymentList({ pageNumber, pageSize });
      setLoading(false);
    })();
  };
  const columns: ColumnsType<MerchantPaymentDataType> = [
    {
      title: "Payment Date",
      dataIndex: "payDate",
      key: "payDate",
      width: 170,
    },
    {
      title: "Next Payment Date",
      dataIndex: "nextPayDate",
      key: "nextPayDate",
      width: 170,
    },
    {
      title: "Payment Amount",
      dataIndex: "payAmount",
      key: "payAmount",
      align: "center",
      width: 170,
    },
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    (async () => {
      setLoading(true);
      await getMerchantPaymentList({
        pageNumber: 1,
        pageSize: 10,
        merchantId,
      });
      setLoading(false);
    })();
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
        <IconEye />
      </Button>
      <Modal
        width={1000}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
        closeIcon={false}
      >
        <div>
          <div className="flex justify-between p-6 pb-4 border-b-2">
            <p className="text-xl font-medium ">All Payment</p>
            <Button className="!p-2" onClick={handleCancel}>
              <IconClose />
            </Button>
          </div>
          <div className="p-4">
            <Table
              loading={loading}
              columns={columns}
              dataSource={merchantPaymentList?.list.map((item, index) => {
                return {
                  ...item,
                  key: index,
                };
              })}
              pagination={false}
              className="border border-gray-300 rounded-md border-b-0 rounded-b-none"
            />
            <div className="justify-between text-center py-4 border border-gray-300 rounded-b-md">
              <Pagination
                total={merchantPaymentList?.totalCnt}
                itemRender={itemRender1}
                showSizeChanger={false}
                onChange={handlePageChange}
                current={current}
              />
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
function PlusButton({ merchantId }: { merchantId: number }) {
  const [form] = Form.useForm();
  const [addMerchantPayment, { isLoading }] = useAddMerchantPaymentMutation();

  const onSubmit = async (data: AddPaymentProps) => {
    const submitData: AddPaymentProps = {
      merchantId,
      payAmount: data.payAmount,
      nextPayDate: dayjs(data.nextPayDate).format("YYYY-MM-DD"),
    };
    await addMerchantPayment(submitData);
    setIsModalOpen(false);
  };

  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
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
  return (
    <>
      <Button onClick={showModal} className="!p-2 !h-9">
        <IconPlus />
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
            <p className="text-2xl font-medium">Add Payment</p>
            <Button className="!p-2" onClick={handleCancel}>
              <IconClose />
            </Button>
          </div>
          <div className="p-6">
            <Form form={form} layout="vertical" onFinish={onSubmit}>
              <p className="text-base font-medium">Payment Amount</p>
              <Form.Item
                name="payAmount"
                rules={[
                  { message: "This is a required field", required: true },
                ]}
                className="!mb-0"
              >
                <Input
                  type="text"
                  size="large"
                  placeholder="e.g $100"
                  className="w-full mt-2"
                />
              </Form.Item>

              <p className="text-base my-2 font-medium">Next Payment Date</p>
              <Form.Item
                name="nextPayDate"
                rules={[
                  { message: "This is a required field", required: true },
                ]}
                className="!mb-2"
              >
                <DatePicker
                  onChange={onChange}
                  className="w-full h-10 rounded-lg mb-4"
                />
              </Form.Item>

              <Button
                className="w-full !bg-[#171F30] !text-white !my-2 !h-11 !text-base !rounded-md !font-semibold "
                htmlType="submit"
                loading={isLoading}
              >
                Add Payment
              </Button>
            </Form>
          </div>
        </div>
      </Modal>
    </>
  );
}
function EditButton({ value }: { value: MerchantDataType }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [getCountryList] = useGetCountryListMutation();
  const [getCurrencyList] = useGetCurrencyListMutation();
  const [getMerchantData] = useGetMerchantDataMutation();
  const [updateMerchantCountry, { isLoading }] =
    useUpdateMerchantCountryMutation();

  const countryList: CountryListResponse = useSelector(
    (state) => state.merchant.countryList
  );
  const currencyList: CurrencyListResponse = useSelector(
    (state) => state.merchant.currencyList
  );

  const initialValues = {
    country: value.countryName,
    currency: value.currency,
  };

  const [form] = Form.useForm();

  const showModal = () => {
    (async () => {
      await getCountryList({});
      await getCurrencyList({});
    })();
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onSubmit = async (data: any) => {
    console.log(data);
    let currencyId = data.currency;
    if (typeof data.currency === "string") {
      currencyId = currencyList.find((item) => item.code === data.currency)?.id;
    }
    await updateMerchantCountry({
      merchantId: value.id,
      countryId: data.country,
      currencyId,
    });

    await getMerchantData({
      pageNumber: 1,
      pageSize: 10,
    });
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
            <p className="text-2xl font-medium">Edit</p>
            <Button className="!p-2" onClick={handleCancel}>
              <IconClose />
            </Button>
          </div>
          <div className="p-6">
            <Form form={form} onFinish={onSubmit} initialValues={initialValues}>
              <p className="text-base font-medium mb-2">Country</p>
              <Form.Item
                name="country"
                rules={[
                  { message: "This is a required field.", required: true },
                ]}
                className="!mb-0"
              >
                <Select
                  options={countryList.map((item: any) => {
                    return { value: item.id, label: item.countryName };
                  })}
                  className="!h-10 w-full"
                />
              </Form.Item>

              <p className="text-base font-medium my-2">Currency</p>
              <Form.Item
                name="currency"
                rules={[
                  { message: "This is a required field.", required: true },
                ]}
                className="!mb-2"
              >
                <Select
                  options={currencyList.map((item: any) => {
                    return {
                      value: item.id,
                      label: item.code + " " + item.symbol,
                    };
                  })}
                  className="!h-10 w-full mb-6"
                />
              </Form.Item>

              <Button
                className="w-full !bg-[#171F30] !text-white !my-2 !h-11 !text-base !font-semibold !rounded-md"
                htmlType="submit"
                loading={isLoading}
              >
                Save Changes
              </Button>
            </Form>
          </div>
        </div>
      </Modal>
    </>
  );
}
export default function Merchant() {
  const dataFetchRef = useRef(false);
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(1);
  const [sword, setSword] = useState("");
  const [getMerchantData, { isLoading }] = useGetMerchantDataMutation();
  const [loading, setLoading] = useState(true);
  const merchant: MerchantResponse | null = useSelector(
    (state) => state.merchant.merchant
  );
  const [form] = Form.useForm();

  useEffect(() => {
    console.log("OKOKOK");
    
    if (dataFetchRef.current) return;
    dataFetchRef.current = true;
    console.log("<<<<<<<<<<<<<<<<<<<OKOKOK>>>>>>>>>>>>>>>>>>>");

    (async () => {
      setLoading(true);
      await getMerchantData({
        pageNumber: 1,
        pageSize: 10,
      });
      setLoading(false);
    })();
  }, [getMerchantData]);
  const showDrawer = () => {
    setOpen(true);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      (async () => {
        setLoading(true);
        await getMerchantData({
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
  const onClose = () => {
    setOpen(false);
  };

  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const handlePageChange = (pageNumber: number, pageSize: number) => {
    (async () => {
      setLoading(true);
      setCurrent(pageNumber);
      await getMerchantData({
        pageNumber,
        pageSize,
      });
      setLoading(false);
    })();
  };

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const onSubmit = async (data: MerchantSearchType) => {
    await getMerchantData({
      pageNumber: current,
      pageSize: 10,
      ...data,
    });
    setOpen(false);
  };
  return (
    <div className="min-w-[600px]">
      <div className="flex justify-between px-8 py-4 bg-white">
        <div className="py-2.5">
          <p className="text-2xl font-medium">List of Merchants</p>
          <p className="text-sm">{merchant?.totalCnt} Total merchants</p>
        </div>
        <div className="flex items-center gap-2">
          <Input
            size="large"
            placeholder="Search..."
            value={sword}
            onChange={handleSwordChange}
            onKeyDown={handleKeyDown}
            prefix={<SearchOutlined />}
            className="h-10 !w-[340px]"
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
                    <p className="text-base font-medium">Country</p>
                    <Form.Item name="country" className="!mb-2">
                      <Input
                        type="text"
                        size="large"
                        placeholder="Search country"
                        className="w-full !mt-2"
                      />
                    </Form.Item>

                    <p className="text-base font-medium">Currency</p>
                    <Form.Item name="currency" className="!mb-2">
                      <Input
                        type="text"
                        size="large"
                        placeholder="Search currency"
                        className="w-full !mt-2"
                      />
                    </Form.Item>

                    <p className="text-base font-medium">Merchant Name</p>
                    <Form.Item name="merchantName" className="!mb-2">
                      <Input
                        type="text"
                        size="large"
                        placeholder="Search merchant name"
                        className="w-full !mt-2"
                      />
                    </Form.Item>

                    <p className="text-base font-medium mb-2">Status</p>
                    <Form.Item name="status" className="!mb-2">
                      <Select
                        placeholder="Select merchants status"
                        options={[
                          { value: 1, label: "Active" },
                          { value: 2, label: "Inactive" },
                          { value: 3, label: "Paid" },
                          { value: 4, label: "Unpaid" },
                        ]}
                        className="!h-10 w-full"
                      />
                    </Form.Item>
                  </div>
                </div>
                <div className="grid gap-2 grid-cols-2 px-6 mb-8">
                  <Button
                    htmlType="reset"
                    className="!!w-full bg-white !text-black !my-4 !h-11 !text-base !rounded-lg !font-medium"
                  >
                    Clear
                  </Button>
                  <Button
                    className="w-full !bg-[#171F30] !text-white !my-4 !h-11 !text-base !rounded-lg !font-medium"
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
      <div className="bg-[#F7F7F7] px-8 pt-10 pb-16 checkbox-round">
        <MemoizedTable
          loading={loading}
          columns={columns}
          data={merchant?.list.map((item, index) => {
            return {
              ...item,
              key: index,
            };
          })}
          rowSelection={rowSelection}
        />
        <div className="justify-between text-center py-4 border border-gray-300 rounded-b-md">
          <Pagination
            current={current}
            total={merchant?.totalCnt}
            itemRender={itemRender}
            showSizeChanger={false}
            onChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
}
