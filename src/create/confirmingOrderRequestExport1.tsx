"use client";

import React from "react";
import { Collapse, Button, Select, Input, Switch, Radio, Table, Divider } from "antd"
import Image from "next/image"
import IconArrowCircleRight from "@/assets/arrowcircleright.svg";
import IconCreateOrderTick from "@/assets/order_create_tick.svg";
import IconCreateOrderSelector from "@/assets/create_order_selector.svg";
import IconCreateOrderBackBtnArray from "@/assets/btnBack.svg"
import IconCreateOrderNextBtnArray from "@/assets/btnConfirmation.svg"
import IconBack from "@/assets/order_back.svg";
import IconNext from "@/assets/order_confirm.svg";
import IconCancel from "@/assets/order_cancel.svg";
import IconWarning2 from "@/assets/warning2.svg"
import IconArrowCircleUp from "@/assets/arrowcircleup.svg"
import IconCreateOrderDollarSquare from "@/assets/order_dollar_square.svg";
import IconCreateOrderSquareMinus from "@/assets/order_square_minus.svg";
import IconCreateOrderSquarePlus from "@/assets/order_square_plus.svg";
import IconCreateOrderArray from "@/assets/order_array.svg";
import IconCreateOrderWarning from "@/assets/order_warning.svg";
import IconCreateOrderArrayCircleUp from "@/assets/order_array_circle_up.svg"
import IconCreateOrderExport from "@/assets/order_export.svg";
import IconCreateOrderPlus from "@/assets/order_plus.svg";
import IconCreateOrderDelete from "@/assets/order_delete.svg";
import IconEdit from "@/assets/order_edit.svg"
import IconExpand from "@/assets/order_expanded.svg"
import IconDelete from "@/assets/order_delete.svg";
import IconCreateOrderComputer from "@/assets/order_table_computer.png"
import IconChange from "@/assets/changecurrency.svg";
import IconCreateOrderCancel from "@/assets/order_cancel.svg";
import IconCreateOrderDollarMark from "@/assets/order_dollar_mark.svg";
import IconCreateOrderWallet from "@/assets/order_wallet.svg";
import IconCreateOrderDiscount from "@/assets/order_discount.svg";
import Computer from "@/assets/computer.jpg";
import IconSave from "@/assets/order_save.svg";
import IconConfirm from "@/assets/order_confirm.svg";



const { TextArea } = Input;



//confirming export 1 start
export default function ConfirmingOrderRequestExport1() {
  return (
    <div className="p-[30px] absolute w-full flex flex-col gap-[30px] items-start">
      <div className="px-[30px] py-5 border rounded-[20px] border-dashed flex items-start gap-[10px] self-stretch border-[#6750A4] w-full">
        <p className="text-[#6750A4] text-[28px] leading-9">
          Confirming Export Order Request
        </p>
      </div>
      <div className="flex flex-row gap-[39px]">
        <div id = "btn_group_1" className='flex gap-x-2.5 item-center'>
          <p 
            id='order_information_btn1'
            className='flex item-center align-center !w-[33px] !h-[48px] !rounded-[20px] !p-[10px] !bg-[#21005D] !text-[#FFFFFF] !font-roboto !text-[22px] !font-bold leading-7'
          >
            1
          </p>
          <p
            id='order_information_text'
            className='font-roboto text-[28px] !text-[#000000]'
          >
            Order Information
          </p>
        </div>
        <p 
          id='order_information_btn2'
          className='flex !w-[33px] !h-[48px] !rounded-[20px] !p-[10px] !bg-[#CAC4D0] !text-[#FFFFFF] !font-roboto !text-[22px] !font-bold leading-7'
        >
          2
        </p>
        <p 
          id='order_information_btn3'
          className='flex !w-[33px] !h-[48px] !rounded-[20px] !p-[10px] !bg-[#CAC4D0] !text-[#FFFFFF] !font-roboto !text-[22px] !font-bold leading-7'
        >
          3
        </p>
        <p 
          id='order_information_btn4'
          className='flex !w-[33px] !h-[48px] !rounded-[20px] !p-[10px] !bg-[#CAC4D0] !text-[#FFFFFF] !font-roboto !text-[22px] !font-bold leading-7'
        >
          4
        </p>
        <p 
          id='order_information_btn5'
          className='flex !w-[33px] !h-[48px] !rounded-[20px] !p-[10px] !bg-[#CAC4D0] !text-[#FFFFFF] !font-roboto !text-[22px] !font-bold leading-7'
        >
          5
        </p>
        <p 
          id='order_information_btn6'
          className='flex !w-[44px] !h-[48px] !rounded-[20px] !p-[10px] !bg-[#CAC4D0] !text-[#FFFFFF] !font-roboto !text-[22px] !font-bold'
        >
          <span id='create_order_tick_icon' className='flex justify-center w-6 h-6 m-0.5 leading-8 !items-center '>
            <IconCreateOrderTick />
          </span>
        </p>
      </div>
      {/*  Order ID start*/}
      <div className="text-[28px] text-[#1C1B1F] leading-9 w-full">
        <span>Order ID:</span>
        <span className="font-bold">OD78667</span>
      </div>
      {/*  Order ID end*/}

      {/* Order Information start*/}
      <div className="flex flex-col flex-1 items-start gap-[10px] w-full">
        {/* Arrow-Circle-right start*/}
        <div className="flex flex-row gap-[10px] items-center">
          <span>
            <IconArrowCircleRight />
          </span>
          <span className="text-3.5 text-[#1D192B] text-sm font-medium leading-5 tracking-wide">
            Order Information
          </span>
        </div>
        {/* Arrow-Circle-right end*/}
        {/* Order Information Container start*/}
        <div className="flex items-start gap-[10px] flex-col py-2.5 px-3.5 border border-[#CAC4D0] rounded-[20px] w-full text-[#49454F]">
          {/* Order Information Arrow-Circle-Up start*/}
          <div className="flex pr-1.5 justify-between items-center self-stretch w-full">
            <p className="text-[22px] leading-7 pl-3.5">
              Order Information
            </p>
          </div>
          {/* Order Information Arrow-Circle-Up end*/}
          {/* Order Informatin Content start*/}
          <div className="flex flex-col items-start gap-[10px] self-stretch w-full">
            {/* Order Informatin Content row 1 start*/}
            <div className="grid grid-cols-5 items-start gap-5 px-3.5 pb-2.5 w-full">
              {/* Order Informatin Content row-1 column-1 start*/}
              <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px] col-span-2">
                <p className="text-[#49454F] leading-5 tracking-tighter">
                  Assigned<br />Customer:
                </p>
                <p className="text-[22px] leading-7 text-[#1C1B1F]">
                  Reno Offorex
                </p>
              </div>
              {/* Order Informatin Content row-1 column-1 end*/}
              {/* Order Informatin Content row-1 column-2 start*/}
              <div className="flex flex-col justify-between min-h-[73px] ">
                <p className="text-[#49454F] leading-5 tracking-tighter">
                  Order Type:
                </p>
                <p className="text-[22px] leading-7 text-[#1C1B1F]">
                  Shipment
                </p>
              </div>
              {/* Order Informatin Content row-1 column-2 end*/}
              {/* Order Informatin Content row-1 column-3 start*/}
              <div className="flex flex-col justify-between min-h-[73px] ">
                <p className="text-[#49454F] leading-5 tracking-tighter">
                  Order Status:
                </p>
                <p className="text-[22px] leading-7 text-[#1C1B1F]">
                  Under Process
                </p>
              </div>
              {/* Order Informatin Content row-1 column-3 end*/}
            </div>
            {/* Order Informatin Content row 1 end*/}
            {/* Order Informatin Content row 2 start*/}
            <div className="grid grid-cols-5 items-start gap-5 px-3.5 pb-2.5 w-full">
              {/* Order Informatin Content row-2 column-1 start*/}
              <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px] col-span-2 ">
                <p className="text-[#49454F] leading-5 tracking-tighter">
                  Service:
                </p>
                <p className="text-[22px] leading-7 text-[#1C1B1F]">
                  Export
                </p>
              </div>
              {/* Order Informatin Content row-2 column-1 end*/}
              {/* Order Informatin Content row-2 column-2 start*/}
              <div className="flex flex-col justify-between min-h-[73px]">
                <p className="text-[#49454F] leading-5 tracking-tighter">
                  Order Request <br/>Date:
                </p>
                <p className="text-[22px] leading-7 text-[#1C1B1F]">
                  10/12/2023
                </p>
              </div>
              {/* Order Informatin Content row-2 column-2 end*/}
              {/* Order Informatin Content row-2 column-3 start*/}
              <div className="flex flex-col justify-between min-h-[73px]">
                <p className="text-[#49454F] leading-5 tracking-tighter">
                  Order Request <br />Time:
                </p>
                <p className="text-[22px] leading-7 text-[#1C1B1F]">
                  12:34pm
                </p>
              </div>
              {/* Order Informatin Content row-2 column-3 end*/}
            </div>
            {/* Order Informatin Content row 2 end*/}
          </div>
          {/* Order Informatin Content end*/}
        </div>
        {/* Order Information Container end*/}
      </div>
      {/* Order Information end*/}

      {/* Complete the order details start*/}
      <div className="flex flex-col flex-1 items-start gap-[30px] w-full">
        {/* Arrow-Circle-right start*/}
        <div className="flex flex-row gap-[10px] items-center w-full">
          <span className="flex min-w-max pb-[10px]">
            <IconArrowCircleRight />
          </span>
          <span className="text-3.5 text-[#1D192B] text-sm border-b border-[#79747E] !pb-[10px] font-medium leading-5 tracking-wide w-full">
            Complete the order details
          </span>
        </div>
        {/* Arrow-Circle-right end*/}
        {/* Select container start */}
        <div className="flex flex-row px-[30px] items-start gap-[30px] w-full ">
          <Select
            defaultValue="Air"
            suffixIcon = {<IconCreateOrderSelector />}
            bordered = {false}
            className='flex !h-14 !w-full !pl-4 !py-1 border !rounded-[20px] border-[#79747E]'
            // style={{ fontSize: '16px', fontWeight: 400, padding: '4px 0px 4px 16px', alignItems: 'center' custom-select}}
            options={[
              { value: 'Select origin', label: (<p style={{ fontSize: '16px', fontWeight: 400, padding: '4px 0px 4px 16px', alignItems: 'center' }}>Select origin</p>)},
              { value: 'tom', label: (<p style={{ fontSize: '16px', fontWeight: 400, padding: '4px 0px 4px 16px', alignItems: 'center' }}>Tom</p>)},
              { value: 'kai', label: (<p style={{ fontSize: '16px', fontWeight: 400, padding: '4px 0px 4px 16px', alignItems: 'center' }}>Kai</p>)}
            ]}
          />
          <Select
            defaultValue="DHL"
            suffixIcon = {<IconCreateOrderSelector />}
            bordered = {false}
            className='flex !h-14 !w-full !pl-4 !py-1 border !rounded-[20px] border-[#79747E]'
            // style={{ fontSize: '16px', fontWeight: 400, padding: '4px 0px 4px 16px', alignItems: 'center' custom-select}}
            options={[
              { value: 'Select origin', label: (<p style={{ fontSize: '16px', fontWeight: 400, padding: '4px 0px 4px 16px', alignItems: 'center' }}>Select origin</p>)},
              { value: 'tom', label: (<p style={{ fontSize: '16px', fontWeight: 400, padding: '4px 0px 4px 16px', alignItems: 'center' }}>Tom</p>)},
              { value: 'kai', label: (<p style={{ fontSize: '16px', fontWeight: 400, padding: '4px 0px 4px 16px', alignItems: 'center' }}>Kai</p>)}
            ]}
          /> 
        </div>
        {/* Select container start */}
      </div>
      {/* Complete the order details end*/}
      {/* btn-group start */}
      <div className="btn-group flex flex-row gap-[10px]"> 
        <Button className=" !flex !h-10 !w-[100px] !py-2.5 !pr-6 !pl-4 !justify-center !items-center !gap-2 !border !rounded-[20px] !text-[#6750A4] !text-center">
          <IconBack />
          <span className="text-sm font-medium leading-5 tracking-wide">Back</span>
        </Button>
        <Button className=" !flex !h-10 !w-[172px] !py-2.5 !pr-6 !pl-4 !justify-center !items-center !gap-2 !rounded-[20px] !text-[#ffffff]  !bg-[#6750A4] !text-center">
          <IconNext />
          <span className="text-sm font-medium leading-5 tracking-wide">Next</span>
        </Button>
      </div>
      {/* btn-group end */}
    </div>
  );
}
//confirming export 1 end

//confirming export 2 start
export function Item2() {
  return (
    <div className="flex items-start gap-[10px] flex-col py-2.5 px-3.5 w-full text-[#49454F]">
      {/* Order Informatin Content start*/}
      <div className="flex flex-col items-start gap-[30px] mt-[30px] px-5 pb-5 self-stretch w-full">
        {/* Order Informatin Content row 1 start*/}
        <div className="flex flex-row gap-[30px] h-[56px] w-full">
          <Input type="text" className="basis-[70%] !border !rounded-[20px] border-[#79747E] !py-2 !pl-4" value={'Product Name'}/>
          <Input type="number"
              className='basis-[30%] !border !rounded-[20px] border-[#79747E] !py-2 !px-0'
              prefix={<div className='grid !place-items-center !w-12 !h-12 mx-1 !rounded-[100px] bg-[#E8DEF8]'><IconCreateOrderDollarSquare /></div>}
              value={'657.00'}
        />
        </div>
        {/* Order Informatin Content row 1 end*/}
        {/* Order Informatin Content row 2 start*/}
        <div className="flex flex-row gap-[30px] h-[56px] w-full">
          <Input
              className='basis-1/5 !flex !items-center !text-base !text-center !h-14 !w-[231px] !border !px-0 !py-4 !rounded-[20px] border-[#79747E]'
              prefix={<button className='grid !place-items-center !border-0 !p-0 !w-12 !h-12 ml-1'><IconCreateOrderSquareMinus /></button>}
              suffix={<button className='grid !place-items-center !border-0 !p-0 !w-12 !h-12 ml-1'><IconCreateOrderSquarePlus /></button>}
              value={'01'}
            />
          <Input type="text" className="basis-1/5 !border !rounded-[20px] border-[#79747E] !py-2 !pl-4" value={"56kg"}/>
          <Input type="text" className="basis-1/5 !border !rounded-[20px] border-[#79747E] !py-2 !pl-4" value={"76"} />
          <Input type="text" className="basis-1/5 !border !rounded-[20px] border-[#79747E] !py-2 !pl-4" value={"76"} />
          <Input type="text" className="basis-1/5 !border !rounded-[20px] border-[#79747E] !py-2 !pl-4" value={"76"} />
        </div>
        {/* Order Informatin Content row 2 end*/}
        {/* Order Informatin Content row 3 start*/}
        <div className="w-1/2">
          <p className='!text-xs !pl-[11px]'>Upload Product/Item Picture</p>
          <div className='flex !h-12 !py-1'>
            <Button className='!flex justify-center !w-full !h-[40px] !rounded-r-[0px] !rounded-l-[4px] !py-2.5 border !border-[#79747E] !bg-[#E8DEF8] gap-2 leading-5 '>
              <span className='w-[18px] h-[18px]'><IconCreateOrderExport /></span>
              <p className='!text-sm !font-medium'>Choose File</p>
            </Button>   
            <Button className='!flex justify-center !w-full !h-[40px] !rounded-l-[0px] !rounded-r-[100px] !py-2.5 !px-3 border !border-[#79747E] gap-2 leading-5 '>
              <p className='!text-sm !font-medium'>No file chosen</p>
            </Button> 
          </div>
        </div>
        {/* Order Informatin Content row 3 end*/}
        <TextArea placeholder="Product Description" className="!pl-4 !py-2 flex !w-1/2" style={{ height: 144, resize: 'none' }}/>
        <div>
          <div
            id='order_detail_head'
            className='w-full h-[34px] gap-x-2.5 pb-[10px]'
          >
            <div
              id='order_detail_head'
              className='flex w-full h-[34px] gap-x-2.5 pb-[10px]'
            >
              <span className='w-6 h-6'>
                <IconCreateOrderArray />
              </span>
              <p className='h-[20px] font-roboto font-medium	leading-5'>
                Describe the item you wish to purchase further with the following properties
              </p>
            </div>
            <hr className='border ml-[34px] bg-[#79747E] !mb-[30px]'/>
          </div>
          <div
            className='flex pl-[34px] gap-[30px] mt-[30px]'
          >
            <Input
              className='flex !text-center !text-base !w-[230px] !border !rounded-[20px] border-[#79747E]'
              value={'Enter the color of the item'}
            /> 
            <Button className='!flex !items-center justify-center !w-[176px] !h-14 !py-1 !pr-[16px] !pl-0 !rounded-[20px] !bg-[#49454F] '>
              <span className='w-[40px] h-[40px] !m-1'><IconCreateOrderPlus /></span>
              <p className='!text-base text-[#E6E1E5] !font-normal'>Add propertise</p>
            </Button>  
          </div>
        </div>
      </div>
      {/* Order Informatin Content end*/}
    </div>
  );
}

export function ConfirmingOrderRequestExport2() {
  return (
    <div className="p-[30px] absolute w-full flex flex-col gap-[30px] items-start">
      <div className="px-[30px] py-5 border rounded-[20px] border-dashed flex items-start gap-[10px] self-stretch border-[#6750A4] w-full">
        <p className="text-[#6750A4] text-[28px] leading-9">
          Confirming Export Order Request
        </p>
      </div>
      <div className="flex flex-row gap-[39px]">
          <p 
            id='order_information_btn2'
            className='flex !w-[33px] !h-[48px] !rounded-[20px] !p-[10px] !bg-[#CAC4D0] !text-[#FFFFFF] !font-roboto !text-[22px] !font-bold leading-7'
          >
            1
        </p>
        <div id = "btn_group_1" className='flex gap-x-2.5 item-center'>
          <p 
            id='order_information_btn1'
            className='flex item-center align-center !w-[33px] !h-[48px] !rounded-[20px] !p-[10px] !bg-[#21005D] !text-[#FFFFFF] !font-roboto !text-[22px] !font-bold leading-7'
          >
            2
          </p>
          <p
            id='order_information_text'
            className='font-roboto text-[28px] !text-[#000000]'
          >
            Package Details
          </p>
        </div>
        <p 
          id='order_information_btn2'
          className='flex !w-[33px] !h-[48px] !rounded-[20px] !p-[10px] !bg-[#CAC4D0] !text-[#FFFFFF] !font-roboto !text-[22px] !font-bold leading-7'
        >
          2
        </p>
        <p 
          id='order_information_btn3'
          className='flex !w-[33px] !h-[48px] !rounded-[20px] !p-[10px] !bg-[#CAC4D0] !text-[#FFFFFF] !font-roboto !text-[22px] !font-bold leading-7'
        >
          3
        </p>
        <p 
          id='order_information_btn4'
          className='flex !w-[33px] !h-[48px] !rounded-[20px] !p-[10px] !bg-[#CAC4D0] !text-[#FFFFFF] !font-roboto !text-[22px] !font-bold leading-7'
        >
          4
        </p>
        <p 
          id='order_information_btn5'
          className='flex !w-[33px] !h-[48px] !rounded-[20px] !p-[10px] !bg-[#CAC4D0] !text-[#FFFFFF] !font-roboto !text-[22px] !font-bold leading-7'
        >
          5
        </p>
        <p 
          id='order_information_btn6'
          className='flex !w-[44px] !h-[48px] !rounded-[20px] !p-[10px] !bg-[#CAC4D0] !text-[#FFFFFF] !font-roboto !text-[22px] !font-bold'
        >
          <span id='create_order_tick_icon' className='flex justify-center w-6 h-6 m-0.5 leading-8 !items-center '>
            <IconCreateOrderTick />
          </span>
        </p>
      </div>
      {/*  Order ID start*/}
      <div className="text-[28px] text-[#1C1B1F] leading-9 w-full">
        <span>Order ID:</span>
        <span className="font-bold">OD78667</span>
      </div>
      {/*  Order ID end*/}
      {/* Arrow-Circle-right start*/}
      <div className="flex flex-row gap-[10px] items-center w-full">
        <span className="flex min-w-max pb-[10px]">
          <IconArrowCircleRight />
        </span>
        <span className="text-3.5 text-[#1D192B] text-sm border-b border-[#79747E] !pb-[10px] font-medium leading-5 tracking-wide w-full">
          Tell us where this package will be shipped from
        </span>
      </div>
      {/* Arrow-Circle-right end*/}
      {/* Select Origin start*/}
      <div className="flex flex-row items-center justify-center px-[30px] gap-[10px] w-full ">
        <Select
          defaultValue="Select Origin"
          suffixIcon = {<IconCreateOrderSelector />}
          bordered = {false}
          className='flex !h-14 !w-full border !rounded-[20px] border-[#79747E] !pl-4'
          // style={{ fontSize: '16px', fontWeight: 400, padding: '4px 0px 4px 16px', alignItems: 'center' custom-select}}
          options={[
            { value: 'Select origin', label: (<p style={{ fontSize: '16px', fontWeight: 400, padding: '4px 0px 4px 16px', alignItems: 'center' }}>Select origin</p>)},
            { value: 'tom', label: (<p style={{ fontSize: '16px', fontWeight: 400, padding: '4px 0px 4px 16px', alignItems: 'center' }}>Tom</p>)},
            { value: 'kai', label: (<p style={{ fontSize: '16px', fontWeight: 400, padding: '4px 0px 4px 16px', alignItems: 'center' }}>Kai</p>)}
          ]}
        />
        <span className="flex min-w-max">
          <IconWarning2 />
        </span>
      </div>
      {/* Select Origin end*/}

      {/* Arrow-Circle-right start*/}
      <div className="flex flex-row gap-[10px] items-center">
        <span>
          <IconArrowCircleRight />
        </span>
        <span className="text-3.5 text-[#1D192B] text-sm font-medium leading-5 tracking-wide">
          Add details about your package
        </span>
      </div>
      {/* Arrow-Circle-right end*/}

      {/* Add details about your package start*/}
      <div className="flex items-center justify-center gap-[10px] w-full">
        {/* Add details about your package Container start*/}
        <Collapse
          items={[{ key: '1', label: (<p className='text-[22px] text-[#49454F] !pl-5'>Item #1</p>), children: <Item2 /> }]}
          expandIcon={({ isActive }) => isActive ? <IconExpand /> : <IconExpand />}
          expandIconPosition='end'
          className='w-full !bg-white !rounded-xl'
        />
        <Button type="link" className="!flex !items-center">
          <IconDelete />
        </Button>
        {/* Add details about your package Container end*/}
      </div>
      {/* Add details about your package end*/}
      {/* Add details about your package start*/}
      <div className="flex items-center justify-center gap-[10px] w-full">
        {/* Add details about your package Container start*/}
        <Collapse
          items={[{ key: '1', label: (<p className='text-[22px] text-[#49454F] !pl-5'>Item #2</p>), children: <Item2 /> }]}
          expandIcon={({ isActive }) => isActive ? <IconExpand /> : <IconExpand />}
          expandIconPosition='end'
          className='w-full !bg-white !rounded-xl'
        />
        <Button type="link" className="!flex !items-center">
          <IconDelete />
        </Button>
        {/* Add details about your package Container end*/}
      </div>
      {/* Add details about your package end*/}
      {/* Add new product/item start */}
      <Button className='!flex !items-center justify-center !w-[200px] !h-14 !py-1 !pr-[16px] !pl-0 !rounded-[20px] !bg-[#49454F] '>
        <span className='w-[40px] h-[40px] !m-1'><IconCreateOrderPlus /></span>
        <p className='!text-base text-[#E6E1E5] !font-normal'>Add new product/item</p>
      </Button>
      {/* Add new product/item end */}

      {/* btn-group start */}
      <div className="btn-group flex flex-row gap-[10px]"> 
        <Button className=" !flex !h-10 !w-[100px] !py-2.5 !pr-6 !pl-4 !justify-center !items-center !gap-2 !border !rounded-[20px] !text-[#6750A4] !text-center">
          <IconBack />
          <span className="text-sm font-medium leading-5 tracking-wide">Back</span>
        </Button>
        <Button className=" !flex !h-10 !w-[172px] !py-2.5 !pr-6 !pl-4 !justify-center !items-center !gap-2 !rounded-[20px] !text-[#ffffff]  !bg-[#6750A4] !text-center">
          <IconNext />
          <span className="text-sm font-medium leading-5 tracking-wide">Next</span>
        </Button>
      </div>
      {/* btn-group end */}
    </div>
  );
}
//confirming export 2 end

//confirming export 3 start
export function ShippingDetails3() {
  return (
  <div className="flex flex-col flex-1 items-start gap-[10px] w-full">
    {/* Shipping Details Container start*/}
    <div className="py-2.5 px-3.5 w-full flex items-start gap-[10px] flex-col text-[#49454F]">
      {/* Shipping Details Content start*/}
      <div className="flex flex-col items-start gap-[10px] self-stretch">
        {/* Shipping Details Content row 1 start*/}
        <div className="grid grid-cols-5 w-full  items-start gap-5 px-3.5 pb-2.5 text-[#49454F]">
          {/* Shipping Details Content row-1 column-1 start*/}
          <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px] col-span-2 ">
            <p className=" leading-5 tracking-tighter">Receiver's First<br/> Name:</p>
            <p className="text-[22px] leading-7 text-[#1C1B1F]">Malibu</p>
          </div>
          {/* Shipping Details Content row-1 column-1 end*/}
          {/* Shipping Details Content row-1 column-2 start*/}
          <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px] col-span-2 ">
            <p className=" leading-5 tracking-tighter">Receiver's Last<br /> Name:</p>
            <p className="text-[22px] leading-7 text-[#1C1B1F]">SHedrack</p>
          </div>
          {/* Shipping Details Content row-1 column-2 end*/}
        </div>
        {/* Shipping Details Content row 1 end*/}

        {/* Shipping Details Content row 2 start*/}
        <div className="grid grid-cols-5 w-full items-start gap-5 px-3.5 pb-2.5 text-[#49454F]">
          {/* Shipping Details Content row-2 column-1 start*/}
          <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px] col-span-2 ">
            <p className=" leading-5 tracking-tighter">Contact <br/>Number:</p>
            <p className="text-[22px] leading-7 text-[#1C1B1F]">+234 803 456 7845</p>
          </div>
          {/* Shipping Details Content row-2 column-1 end*/}
          {/* Shipping Details Content row-2 column-2 start*/}
          <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px] col-span-2 ">
            <p className=" leading-5 tracking-tighter">Receiver's <br />Email:</p>
            <p className="text-[22px] leading-7 text-[#1C1B1F]">Malibushdrack@gmail.com</p>
          </div>
          {/* Shipping Details Content row-2 column-2 end*/}
        </div>
        {/* Shipping Details Content row 2 end*/}
        {/* Shipping Details Content row-3 start*/}
        <div className="flex w-full  gap-5 px-3.5 pb-2.5 text-[#49454F]">
          <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px] w-full ">
            <p className=" leading-5 tracking-tighter">Receiver's <br />Address:</p>
            <p className="text-[22px] leading-7 text-[#1C1B1F]">No, 1osolo way, ikeja road, behind scaint merry</p>
          </div>
        </div>
        {/* Shipping Details Content row-3 end*/}
        {/* Shipping Details Content row-4 start*/}
        <div className="grid grid-cols-5 w-full  items-start gap-[20px] px-3.5 pb-2.5 text-[#49454F]">
          {/* Shipping Details Content row-4 column-1 start*/}
          <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px] ">
            <p className=" leading-5 tracking-tighter">Destination <br />Country:</p>
            <p className="text-[22px] leading-7 text-[#1C1B1F]">Turkey</p>
          </div>
          {/* Shipping Details Content row-4 column-1 end*/}
          {/* Shipping Details Content row-4 column-2 start*/}
          <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px]  ">
            <p className=" leading-5 tracking-tighter">Destination <br />State:</p>
            <p className="text-[22px] leading-7 text-[#1C1B1F]">Istanbul</p>
          </div>
          {/* Shipping Details Content row-4 column-2 end*/}
          {/* Shipping Details Content row-4 column-3 start*/}
          <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px]">
            <p className=" leading-5 tracking-tighter">Destination <br />City:</p>
            <p className="text-[22px] leading-7 text-[#1C1B1F]">Cyprusic</p>
          </div>
          {/* Shipping Details Content row-4 column-3 end*/}
          {/* Shipping Details Content row-4 column-4 start*/}
          <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px] ">
            <p className=" leading-5 tracking-tighter">Zip/postal <br />Code:</p>
            <p className="text-[22px] leading-7 text-[#1C1B1F]">98765</p>
          </div>
          {/* Shipping Details Content row-4 column-4 end*/}
        </div>
        {/* Shipping Details Content row-4 end*/}
      </div>
      {/* Shipping Details Content end*/}
    </div>
    {/* Shipping Details Container end*/}
  </div>
  );
}

export function ConfirmingOrderRequestExport3() {
  return (
    <div className="p-[30px] absolute w-full flex flex-col gap-[30px] items-start">
      <div className="px-[30px] py-5 border rounded-[20px] border-dashed flex items-start gap-[10px] self-stretch border-[#6750A4] w-full">
        <p className="text-[#6750A4] text-[28px] leading-9">
          Confirming Export Order Request
        </p>
      </div>
      <div className="flex flex-row gap-[39px]">
        <p 
            id='order_information_btn2'
            className='flex !w-[33px] !h-[48px] !rounded-[20px] !p-[10px] !bg-[#CAC4D0] !text-[#FFFFFF] !font-roboto !text-[22px] !font-bold leading-7'
          >
            1
        </p>
        <p 
          id='order_information_btn2'
          className='flex !w-[33px] !h-[48px] !rounded-[20px] !p-[10px] !bg-[#CAC4D0] !text-[#FFFFFF] !font-roboto !text-[22px] !font-bold leading-7'
        >
          2
        </p>
        <div id = "btn_group_1" className='flex gap-x-2.5 item-center'>
          <p 
            id='order_information_btn1'
            className='flex item-center align-center !w-[33px] !h-[48px] !rounded-[20px] !p-[10px] !bg-[#21005D] !text-[#FFFFFF] !font-roboto !text-[22px] !font-bold leading-7'
          >
            3
          </p>
          <p
            id='order_information_text'
            className='font-roboto text-[28px] !text-[#000000]'
          >
            Shipping Details
          </p>
        </div>
        <p 
          id='order_information_btn4'
          className='flex !w-[33px] !h-[48px] !rounded-[20px] !p-[10px] !bg-[#CAC4D0] !text-[#FFFFFF] !font-roboto !text-[22px] !font-bold leading-7'
        >
          4
        </p>
        <p 
          id='order_information_btn5'
          className='flex !w-[33px] !h-[48px] !rounded-[20px] !p-[10px] !bg-[#CAC4D0] !text-[#FFFFFF] !font-roboto !text-[22px] !font-bold leading-7'
        >
          5
        </p>
        <p 
          id='order_information_btn6'
          className='flex !w-[44px] !h-[48px] !rounded-[20px] !p-[10px] !bg-[#CAC4D0] !text-[#FFFFFF] !font-roboto !text-[22px] !font-bold'
        >
          <span id='create_order_tick_icon' className='flex justify-center w-6 h-6 m-0.5 leading-8 !items-center '>
            <IconCreateOrderTick />
          </span>
        </p>
      </div>
      {/*  Order ID start*/}
      <div className="text-[28px] text-[#1C1B1F] leading-9 w-full">
        <span>Order ID:</span>
        <span className="font-bold">OD78667</span>
      </div>
      {/*  Order ID end*/}


      {/* Add details about your package start*/}
      <div className="flex items-center justify-center gap-[10px] w-full">
        {/* Add details about your package Container start*/}
        <Collapse
          items={[{ key: '1', label: (<p className='text-[22px] text-[#49454F] !pl-3.5'>Destination/Shipping Address</p>), children: <ShippingDetails3 /> }]}
          expandIcon={({ isActive }) => isActive ? <IconExpand /> : <IconExpand />}
          expandIconPosition='end'
          className='w-full !bg-white !rounded-xl'
        />
        <Button type="link" className="!flex !items-center">
          <IconEdit />
        </Button>
        {/* Add details about your package Container end*/}
      </div>
      {/* Add details about your package end*/}

      {/* btn-group start */}
      <div className="btn-group flex flex-row gap-[10px]"> 
        <Button className=" !flex !h-10 !w-[100px] !py-2.5 !pr-6 !pl-4 !justify-center !items-center !gap-2 !border !rounded-[20px] !text-[#6750A4] !text-center">
          <IconBack />
          <span className="text-sm font-medium leading-5 tracking-wide">Back</span>
        </Button>
        <Button className=" !flex !h-10 !w-[172px] !py-2.5 !pr-6 !pl-4 !justify-center !items-center !gap-2 !rounded-[20px] !text-[#ffffff]  !bg-[#6750A4] !text-center">
          <IconNext />
          <span className="text-sm font-medium leading-5 tracking-wide">Next</span>
        </Button>
      </div>
      {/* btn-group end */}
    </div>
  );
}
//confirming export 3 end

//confirming export 4 start
export function BillingInformation4() {
  return (
  <div className="flex flex-col flex-1 items-start gap-[10px] w-full">
    {/* Billing details Container start*/}
    <div className="py-2.5 px-3.5 w-full flex items-start gap-[10px] flex-col text-[#49454F]">
      {/* Billing details Content start*/}
      <div className="flex flex-col items-start gap-[10px] self-stretch">
        {/* Billing details Content row 1 start*/}
        <div className="grid grid-cols-5 w-full items-start gap-[60px] px-3.5 pb-2.5 text-[#49454F]">
          {/* Billing details Content row-1 column-1 start*/}
          <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px] col-span-2 ">
            <p className=" leading-5 tracking-tighter">First Name:</p>
            <p className="text-[22px] leading-7 text-[#1C1B1F]">Malibu</p>
          </div>
          {/* Billing details Content row-1 column-1 end*/}
          {/* Billing details Content row-1 column-2 start*/}
          <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px] col-span-2 ">
            <p className=" leading-5 tracking-tighter">Last Name:</p>
            <p className="text-[22px] leading-7 text-[#1C1B1F]">SHedrack</p>
          </div>
          {/* Billing details Content row-1 column-2 end*/}
        </div>
        {/* Billing details Content row 1 end*/}

        {/* Billing details Content row 2 start*/}
        <div className="grid grid-cols-5 w-full items-start gap-[60px] px-3.5 pb-2.5 text-[#49454F]">
          {/* Billing details Content row-2 column-1 start*/}
          <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px] col-span-2 ">
            <p className=" leading-5 tracking-tighter">Phone Number:</p>
            <p className="text-[22px] leading-7 text-[#1C1B1F]">+234 803 456 7845</p>
          </div>
          {/* Billing details Content row-2 column-1 end*/}
          {/* Billing details Content row-2 column-2 start*/}
          <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px] col-span-2 ">
            <p className=" leading-5 tracking-tighter">Email:</p>
            <p className="text-[22px] leading-7 text-[#1C1B1F]">Malibushdrack@gmail.com</p>
          </div>
          {/* Billing details Content row-2 column-2 end*/}
        </div>
        {/* Billing details Content row 2 end*/}
        {/* Billing details Content row-3 start*/}
        <div className="flex items-start gap-[60px] px-3.5 pb-2.5 text-[#49454F]">
          <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px] w-full ">
            <p className=" leading-5 tracking-tighter">Address:</p>
            <p className="text-[22px] leading-7 text-[#1C1B1F]">No, 1osolo way, ikeja road, behind scaint merry</p>
          </div>
        </div>
        {/* Billing details Content row-3 end*/}
        {/* Billing details Content row-4 start*/}
        <div className="grid grid-cols-5 w-full items-start gap-[20px] px-3.5 pb-2.5 text-[#49454F]">
          {/* Billing details Content row-4 column-1 start*/}
          <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px] ">
            <p className=" leading-5 tracking-tighter">Country:</p>
            <p className="text-[22px] leading-7 text-[#1C1B1F]">Turkey</p>
          </div>
          {/* Billing details Content row-4 column-1 end*/}
          {/* Billing details Content row-4 column-2 start*/}
          <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px] ">
            <p className=" leading-5 tracking-tighter">State:</p>
            <p className="text-[22px] leading-7 text-[#1C1B1F]">Istanbul</p>
          </div>
          {/* Billing details Content row-4 column-2 end*/}
          {/* Billing details Content row-4 column-3 start*/}
          <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px] ">
            <p className=" leading-5 tracking-tighter">City:</p>
            <p className="text-[22px] leading-7 text-[#1C1B1F]">Cyprusic</p>
          </div>
          {/* Billing details Content row-4 column-3 end*/}
          {/* Billing details Content row-4 column-4 start*/}
          <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px] ">
            <p className=" leading-5 tracking-tighter">Zip/postal <br />Code:</p>
            <p className="text-[22px] leading-7 text-[#1C1B1F]">98765</p>
          </div>
          {/* Billing details Content row-4 column-4 end*/}
        </div>
        {/* Billing details Content row-4 end*/}
      </div>
      {/* Billing details Content end*/}
    </div>
    {/* Billing details Container end*/}
  </div>
  );
}

export function ShipmentCost4() {
  return (
  <div
    id='order_pgdetail-item_1'
    className='flex flex-col gap-y-[10px] w-full !pt-[30px] !pb-[30px] !px-[34px] '
  >
    
    <Radio.Group className='!w-full !pt-[20px]' defaultValue={1}>
      <div className='grid grid-cols-5 gap-5 !w-full'>
        <div
          className='!col-span-2 !flex flex-col items-start border rounded-[20px] !py-[20px] !px-[20px] gap-y-[30px]'
        >
          <Radio value={1} className='!flex w-full pr-[20x]'>
            <p className='!flex !pl-[20px] !items-center'>
              <span className='text-sm'>Basic Shipping Method</span>
            </p>
          </Radio>
          <div>
            <p className='text-sm'>Shipping<br />Cost:</p>
            <p className='text-[22px] leading-[26px] text-[#1C1B1F]'>$23.00</p>
          </div>
          <div>
            <p className='text-sm'>Clearing, Port<br />Handling:</p>
            <p className='text-[22px] leading-[26px] text-[#1C1B1F]'>$0.00</p>
          </div>
        </div>

        <div
          className='!col-span-3 !flex flex-col items-start border rounded-[20px] !py-[20px] !px-[20px] gap-y-[30px]'
        >
          <Radio value={1} className='!flex w-full pr-[20x]'>
            <p className='!flex !pl-[20px] !items-center'>
              <span className='text-sm'>Custom Shipping Method</span>
            </p>
          </Radio>
          <div 
            id='input_group'
            className='flex justify-between h-[56px] gap-[30px]'
          >
            <Input
              className='flex !h-14 !w-full !text-base !pt-1 !pr-4 !pb-1 !pl-0 !border !rounded-[20px] !border-[#79747E]'
              prefix={<div className='grid !place-items-center !w-12 !h-12 ml-1 !rounded-[100px]'><IconCreateOrderDollarMark /></div>}
              value={'657.00'}
            />
            <Input
              className='flex !h-14 !w-full !text-base !pt-1 !pr-4 !pb-1 !pl-0 !border !rounded-[20px] !border-[#79747E]'
              prefix={<div className='grid !place-items-center !w-12 !h-12 ml-1 !rounded-[100px]'><IconCreateOrderDollarMark /></div>}
              value={'657.00'}
            />
          </div>
          <Input
              className='flex !h-14 !w-full !text-base !pt-1 !pr-4 !pb-1 !pl-0 !border !rounded-[20px] !border-[#79747E]'
              prefix={<div className='grid !place-items-center !w-12 !h-12 ml-1 !rounded-[100px]'><IconCreateOrderDollarMark /></div>}
              value={'657.00'}
          />
        </div>
      </div>
    </Radio.Group>  

    <div
      className='!flex flex-col border rounded-[20px] !py-[20px] !px-[20px] gap-y-[30px]'
    >
      <p className='!flex !items-center'>
        <span className='text-sm'>Additional Costs</span>
      </p>
      <div className='!flex !justify-between'>
        <div>
          <p className='text-sm'>Insurance <br />Cost:</p>
          <p className='text-[22px] leading-[26px] text-[#1C1B1F]'>$23.00</p>
        </div>
      </div>
      <Input
        className='flex !h-14 !w-full !text-base !pt-1 !pr-4 !pb-1 !pl-0 !border !rounded-[20px] !border-[#79747E]'
        prefix={<div className='grid !place-items-center !w-12 !h-12 ml-1 !rounded-[100px]'><IconCreateOrderDollarMark /></div>}
        value={'657.00'}
      />
      <div className="flex gap-x-[30px]">
        <Button className='!flex !items-center !justify-center !w-[200px] !h-14 !py-1 !pr-[16px] !pl-0 !rounded-t-[20px] !rounded-b-none !border-none !bg-[#E7E0EC]'>
          <span className='flex !justify-center !items-center w-[25px] h-[25px] !m-1'><IconCreateOrderCancel /></span>
          <p className='!text-base !text-black !font-normal'>Storage charge</p>
        </Button>
        <Button className='!flex !items-center justify-center !w-[200px] !h-14 !py-1 !pr-[16px] !pl-0 !rounded-[20px] !border-[#CAC4D0] !bg-[#ffffff]'>
          <span className='w-[40px] h-[40px] !m-1 fill-black'><IconCreateOrderPlus /></span>
          <p className='!text-base !text-black !font-normal'>Other charges</p>
        </Button>
        <Button className='!flex !items-center justify-center !w-[200px] !h-14 !py-1 !pr-[16px] !pl-0 !rounded-[20px] !bg-[#49454F] !text-white'>
          <span className='w-[40px] h-[40px] !m-1'><IconCreateOrderPlus /></span>
          <p className='!text-base text-[#E6E1E5] !font-normal'>Add new payment</p>
        </Button>
      </div>
    </div>   
    <Divider className='!p-0 !m-0 !border-[#79747E] ' />
    <div className='grid grid-cols-3 gap-[30px]'>
      <div
        className='flex flex-col border rounded-[20px] !px-[14px] !py-[10px] border-[#CAC4D0] justify-between gap-y-[20px] w-full'
      >
        <div className='!flex !justify-between !items-center '>
          <p className='text-[22px]'>Discounts</p>
          <span className='p-3'><Switch /></span>
        </div>
        <Radio.Group className='!flex !px-[24px]' defaultValue={1}>
          <Radio value={1} className='!flex w-full pr-[20x] text-[#1C1B1F]'>
            %%
          </Radio>
          <Radio value={2} className='!flex w-full pr-[20x] text-[#1C1B1F]'>
            $$
          </Radio>
        </Radio.Group>
        <Input
          className='flex !h-14 !w-full !text-base !pt-1 !pr-4 !pb-1 !pl-0 !border !rounded-[20px] !border-[#79747E]'
          prefix={<div className='grid !place-items-center ml-1 !rounded-[100px]'><IconCreateOrderDiscount /></div>}
          value={'20'}
        />
      </div>
      <div>
        <p className='text-sm'>Total Shipment<br />Cost: </p>
        <p className='text-[22px] leading-[26px] text-[#1C1B1F]'>$5,682,342.00</p>
      </div>
      <div>
        <p className='text-sm'>Payment Status<br />&nbsp; </p>
        <div className='flex items-center gap-[10px]'>
          <span><Switch /></span>
          <p className='text-[22px] leading-[26px] text-[#1C1B1F]'>Unpaid</p>
          <Button
            className='!flex !h-[40px] !py-2.5 !rounded-[100px] !bg-[#B3261E] border gap-2'>
            <span className='w-[18px] h-[18px]'><IconCreateOrderWallet /></span>
            <p className='!text-sm !font-medium	 text-[#FFFFFF]'>Pay Now</p>
          </Button>
        </div>
      </div>
    </div>
  </div>
  )
}


export function ConfirmingOrderRequestExport4() {


  const rowClassName = () => 'px-4'; 
  
  const columns = [
  {
    title: <p className='text-sm !font-medium'>Items</p>,
    dataIndex: 'items',
    key: 'items',
    width: '40%',
    fixed: true,
    render: (text: string) => (
      <div className='flex gap-[5px]'>
        <Image
          src={IconCreateOrderComputer}
          alt="Your Image"
          width={62}
          height={55}
        />
        <p className='truncate overflow-ellipsis whitespace-pre-line'>{text}</p>
      </div>
    ),
  },
  {
    title: <p className='text-sm !font-medium'>Value <br/>Per Items</p>,
    dataIndex: 'value',
    key: 'value',
    width: '20%',
    render: (text: string) => (
      <>
        <p className='text-sm font-medium'>{text}</p>
      </>
    )
  },
  {
    title: <p className='text-sm !font-medium'>Quantity <br/>Of Items</p>,
    dataIndex: 'quality',
    key: 'quality',
    width: '20%',
    render: (text: string) => (
      <>
        <p className='text-sm font-medium'>{text}</p>
      </>
    )
  },
  {
    title: <p className='text-sm !font-medium'>Total Value <br/>Of Items</p>,
    dataIndex: 'total_value',
    key: 'total_value',
    width: '20%',
    render: (text: string) => (
      <>
        <p className='text-sm font-medium'>{text}</p>
      </>
    )
  }];

  const data = [
    {
      items: "SteelSeries Rival 5 Gaming Laptop with PrismSync RRRGGGEEEGRGB...",
      value: "$88.99",
      quality: "3",
      total_value: "$112.49"
    },
    {
      items: "SteelSeries Rival 5 Gaming Laptop with PrismSync RRRGGGEEEGRGB...",
      value: "$88.99",
      quality: "3",
      total_value: "$112.49"
    },
  ]

  return (
    <div className="p-[30px] absolute w-full flex flex-col gap-[30px] items-start">
      <div className="px-[30px] py-5 border rounded-[20px] border-dashed flex items-start gap-[10px] self-stretch border-[#6750A4] w-full">
        <p className="text-[#6750A4] text-[28px] leading-9">
          Confirming Export Order Request
        </p>
      </div>
      <div className="flex flex-row gap-[39px]">
        <p 
            id='order_information_btn2'
            className='flex !w-[33px] !h-[48px] !rounded-[20px] !p-[10px] !bg-[#CAC4D0] !text-[#FFFFFF] !font-roboto !text-[22px] !font-bold leading-7'
          >
            1
        </p>
        <p 
          id='order_information_btn2'
          className='flex !w-[33px] !h-[48px] !rounded-[20px] !p-[10px] !bg-[#CAC4D0] !text-[#FFFFFF] !font-roboto !text-[22px] !font-bold leading-7'
        >
          2
        </p>
        <p 
          id='order_information_btn4'
          className='flex !w-[33px] !h-[48px] !rounded-[20px] !p-[10px] !bg-[#CAC4D0] !text-[#FFFFFF] !font-roboto !text-[22px] !font-bold leading-7'
        >
          3
        </p>
        <div id = "btn_group_1" className='flex gap-x-2.5 item-center'>
          <p 
            id='order_information_btn1'
            className='flex item-center align-center !w-[33px] !h-[48px] !rounded-[20px] !p-[10px] !bg-[#21005D] !text-[#FFFFFF] !font-roboto !text-[22px] !font-bold leading-7'
          >
            4
          </p>
          <p
            id='order_information_text'
            className='font-roboto text-[28px] !text-[#000000]'
          >
            Billing Details
          </p>
        </div>

        <p 
          id='order_information_btn5'
          className='flex !w-[33px] !h-[48px] !rounded-[20px] !p-[10px] !bg-[#CAC4D0] !text-[#FFFFFF] !font-roboto !text-[22px] !font-bold leading-7'
        >
          5
        </p>
        <p 
          id='order_information_btn6'
          className='flex !w-[44px] !h-[48px] !rounded-[20px] !p-[10px] !bg-[#CAC4D0] !text-[#FFFFFF] !font-roboto !text-[22px] !font-bold'
        >
          <span id='create_order_tick_icon' className='flex justify-center w-6 h-6 m-0.5 leading-8 !items-center '>
            <IconCreateOrderTick />
          </span>
        </p>
      </div>
      {/*  Order ID start*/}
      <div className="text-[28px] text-[#1C1B1F] leading-9 w-full">
        <span>Order ID:</span>
        <span className="font-bold">OD78667</span>
      </div>
      {/*  Order ID end*/}

      {/* Add details about your package start*/}
      <div className="flex items-center justify-center gap-[10px] w-full">
        {/* Add details about your package Container start*/}
        <Collapse
          items={[{ key: '1', label: (<p className='text-[22px] text-[#49454F] !pl-3.5'>Billing Information</p>), children: <BillingInformation4 /> }]}
          expandIcon={({ isActive }) => isActive ? <IconExpand /> : <IconExpand />}
          expandIconPosition='end'
          className='w-full !bg-white !rounded-xl'
        />
        <Button type="link" className="!flex !items-center">
          <IconEdit />
        </Button>
        {/* Add details about your package Container end*/}
      </div>
      {/* Arrow-Circle-right start*/}
      <div className="flex flex-row gap-[10px] items-center w-full">
        <span className="flex min-w-max pb-[10px]">
          <IconArrowCircleRight />
        </span>
        <span className="text-3.5 text-[#1D192B] text-sm border-b border-[#79747E] !pb-[10px] font-medium leading-5 tracking-wide w-full">
          Confirm the Payments for This Order 
        </span>
      </div>
      {/* Arrow-Circle-right end*/}
      {/* table start */}
      <div className="flex flex-row items-center py-2.5 px-3.5 self-stretch gap-[10px] w-full">
        <div className="flex flex-row items-center gap-[5px] !pl-[20px]">
            <p className="pr-5">Default Currency:<span className="font-medium pl-[5px]">USD</span></p>
            <Button className="btnBack !flex !h-10 !py-2.5 !pr-6 !pl-4 !justify-center !items-center !gap-2 !border !rounded-[20px] !text-[#6750A4] !text-center" > 
              <IconChange />
              <span className="text-sm font-medium leading-5 tracking-wide text-[#6750A4] min-w-max">Change currency</span>
            </Button>
        </div>
      </div>
      <div className='!flex flex-col w-full border rounded-[20px]'>
        <Table 
          rowClassName={rowClassName} 
          columns={columns} 
          dataSource={data}
          pagination={false}
        />
        <div className='flex justify-between px-[30px] py-[10px]'>
          <div className="!w-[150px] ">
            <p className='text-sm'>Total number<br />of items:</p>
            <p className='text-[22px] leading-[26px]'>6</p>
          </div>
          <div className="!w-[150px]">
            <p className='text-sm'>Total Gross<br />of items:</p>
            <p className='text-[22px] leading-[26px]'>30Ibs</p>
          </div>
          <div className="!w-[150px]">
            <p className='text-sm'>Total declared<br />Value:</p>
            <p className='text-[22px] leading-[26px]'>$345.00</p>
          </div>
        </div>
      </div>
      {/* table end */}
      {/* Shipment Cost start */}
      <Collapse
        items={[{ key: '1', label: (<p className='text-[22px] text-[#49454F] !pl-3.5'>Shipment Cost</p>  
        ), children: <ShipmentCost4 /> }]}
        expandIcon={({ isActive }) => isActive ? <IconExpand /> : <IconExpand />}
        expandIconPosition='end'
        className='w-full !bg-white !rounded-xl !border-[#d9d9d9]'
      />
      {/* Shipment Cost end */}

      {/* btn-group start */}
      <div className="btn-group flex flex-row gap-[10px]"> 
        <Button className=" !flex !h-10 !py-2.5 !pr-6 !pl-4 !justify-center !items-center !gap-2 !border !rounded-[20px] !text-[#6750A4] !text-center">
          <IconBack />
          <span className="text-sm font-medium leading-5 tracking-wide">Back</span>
        </Button>
        <Button className=" !flex !h-10 !w-[172px] !py-2.5 !pr-6 !pl-4 !justify-center !items-center !gap-2 !rounded-[20px] !text-[#ffffff]  !bg-[#6750A4] !text-center">
          <IconSave />
          <span className="text-sm font-medium leading-5 tracking-wide">Save as Draft</span>
        </Button>
        <Button className=" !flex !h-10 !py-2.5 !pr-6 !pl-4 !justify-center !items-center !gap-2 !rounded-[20px] !text-[#ffffff] !bg-[#B3261E] !text-center">
          <IconConfirm />
          <span className="text-sm font-medium leading-5 tracking-wide">Confirm & Submit Order</span>
        </Button>
      </div>
      <div>
        <p>Upon clicking “Confirm & Submit Order”, I confirm I <br/>have read and agreed to <span className="text-[#6750A4]">all terms and policies</span></p>
      </div>
      {/* btn-group end */}
    </div>
  );
}
//confirming export 4 end

//confirming export 5 start
export function OrderInformation5() {
  return (
  <div className="py-2.5 px-3.5 w-full flex items-start gap-[10px] flex-col text-[#49454F]">
    {/* Order Informatin Content start*/}
    <div className="flex flex-col items-start gap-[10px] self-stretch">
      {/* Order Informatin Content row 1 start*/}
      <div className="grid grid-cols-5 items-start gap-5 px-3.5 pb-2.5 w-full">
        {/* Order Informatin Content row-1 column-1 start*/}
        <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px] col-span-2">
          <p className="text-[#49454F] leading-5 tracking-tighter">Assigned<br />Customer:</p>
          <p className="text-[22px] leading-7 text-[#1C1B1F]">Reno Offorex</p>
        </div>
        {/* Order Informatin Content row-1 column-1 end*/}
        {/* Order Informatin Content row-1 column-2 start*/}
        <div className="flex flex-col justify-between gap-[5px] min-h-[73px]">
          <p className="text-[#49454F] leading-5 tracking-tighter">Order Type:</p>
          <p className="text-[22px] leading-7 text-[#1C1B1F]">Shipment</p>
        </div>
        {/* Order Informatin Content row-1 column-2 end*/}
        {/* Order Informatin Content row-1 column-3 start*/}
        <div className="flex flex-col justify-between gap-[5px] min-h-[73px]">
          <p className="text-[#49454F] leading-5 tracking-tighter">Order Status:</p>
          <p className="text-[22px] leading-7 text-[#1C1B1F]">Under Process</p>
        </div>
        {/* Order Informatin Content row-1 column-3 end*/}
      </div>
      {/* Order Informatin Content row 1 end*/}
      {/* Order Informatin Content row 2 start*/}
      <div className="grid grid-cols-5 items-start gap-5 px-3.5 pb-2.5 w-full">
        {/* Order Informatin Content row-2 column-1 start*/}
        <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px]">
          <p className="text-[#49454F] leading-5 tracking-tighter">Service:</p>
          <p className="text-[22px] leading-7 text-[#1C1B1F]">Export</p>
        </div>
        {/* Order Informatin Content row-2 column-1 end*/}
        {/* Order Informatin Content row-2 column-2 start*/}
        <div className="flex flex-col justify-between gap-[5px] min-h-[73px]">
          <p className="text-[#49454F] leading-5 tracking-tighter">Shipment <br />Method:</p>
          <p className="text-[22px] leading-7 text-[#1C1B1F]">Air</p>
        </div>
        {/* Order Informatin Content row-2 column-2 end*/}
        {/* Order Informatin Content row-2 column-3 start*/}
        <div className="flex flex-col justify-between gap-[5px] min-h-[73px]">
          <p className="text-[#49454F] leading-5 tracking-tighter">Delivery <br />Company:</p>
          <p className="text-[22px] leading-7 text-[#1C1B1F]">DHL</p>
        </div>
        {/* Order Informatin Content row-2 column-3 end*/}
        {/* Order Informatin Content row-2 column-4 start*/}
        <div className="flex flex-col justify-between gap-[5px] min-h-[73px]">
          <p className="text-[#49454F] leading-5 tracking-tighter">Order Date:</p>
          <p className="text-[22px] leading-7 text-[#1C1B1F]">12/02/2023</p>
        </div>
        {/* Order Informatin Content row-2 column-4 end*/}
        {/* Order Informatin Content row-2 column-5 start*/}
        <div className="flex flex-col justify-between gap-[5px] min-h-[73px]">
          <p className="text-[#49454F] leading-5 tracking-tighter">Order Time:</p>
          <p className="text-[22px] leading-7 text-[#1C1B1F]">9:48am</p>
        </div>
        {/* Order Informatin Content row-2 column-5 end*/}
      </div>
      {/* Order Informatin Content row 2 end*/}
    </div>
    {/* Order Informatin Content end*/}
  </div>
  );
}

export function PackageOrigin5() {
  return (
    <div className="py-2.5 px-3.5 w-full flex items-start gap-[10px] flex-col text-[#49454F]">
    {/* Package Details Content start*/}
      <div className="flex flex-col items-start gap-[10px] self-stretch">
        {/* Package Details Content row 1 start*/}
        <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px] px-3.5 pb-2.5 w-full">
          <p className="text-[#49454F] leading-5 tracking-tighter">Origin:</p>
          <p className="text-[22px] leading-7 break-all text-[#1C1B1F]">United States (Houston - warehouse)</p>
        </div>
        {/* Package Details Content row 1 end*/}

        {/* hr start*/}
        <div className="flex flex-row items-center py-2.5 px-3.5 self-stretch gap-[10px] w-full">
          <p className="text-[22px] leading-7 text-[#21005D] min-w-max">Origin Address</p>
          <div className="border-b border-[#21005D] border-dashed w-full">
          </div>
        </div>
        {/* hr end*/}

        {/* Package Details Content row 2 start*/}
        <div className="grid grid-cols-5 items-start gap-5 px-3.5 pb-2.5 text-[#6750A4] w-full"> 
          {/* Package Details Content row-2 column-1 start*/}
          <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px] col-span-2 ">
            <p className=" leading-5 tracking-tighter">First Name:</p>
            <p className="text-[22px] leading-7 text-[#21005D]">Malibu</p>
          </div>
          {/* Package Details Content row-2 column-1 end*/}
          {/* Package Details Content row-2 column-2 start*/}
          <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px] col-span-2 ">
            <p className=" leading-5 tracking-tighter">Last Name:</p>
            <p className="text-[22px] leading-7 text-[#21005D]">SHedrack</p>
          </div>
          {/* Package Details Content row-2 column-2 end*/}
        </div>
        {/* Package Details Content row 2 end*/}
        {/* Package Details Content row-3 start*/}
        <div className="flex items-start gap-5 px-3.5 pb-2.5 text-[#6750A4] w-full">
          <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px] w-full ">
            <p className=" leading-5 tracking-tighter">Street Address:</p>
            <p className="text-[22px] leading-7 text-[#21005D]">No, 1osolo way, ikeja road, behind scaint merry</p>
          </div>
        </div>
        {/* Package Details Content row-3 end*/}
        {/* Package Details Content row-4 start*/}
        <div className="grid grid-cols-5 items-start gap-5 px-3.5 pb-2.5 text-[#6750A4] w-full">
          {/* Package Details Content row-4 column-1 start*/}
          <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px] ">
            <p className=" leading-5 tracking-tighter">State:</p>
            <p className="text-[22px] leading-7 text-[#21005D]">Istanbul</p>
          </div>
          {/* Package Details Content row-4 column-1 end*/}
          {/* Package Details Content row-4 column-2 start*/}
          <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px] ">
            <p className=" leading-5 tracking-tighter">City:</p>
            <p className="text-[22px] leading-7 text-[#21005D]">Cyprusic</p>
          </div>
          {/* Package Details Content row-4 column-2 end*/}
          {/* Package Details Content row-4 column-3 start*/}
          <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px] ">
            <p className=" leading-5 tracking-tighter">Zip/postal <br/>Code:</p>
            <p className="text-[22px] leading-7 text-[#21005D]">98765</p>
          </div>
          {/* Package Details Content row-4 column-3 end*/}
        </div>
        {/* Package Details Content row-4 end*/}
      </div>
    {/* Package Details Content end*/}
    </div>
  );
}

export function Item5_1() {
  return (
    <div className="flex flex-col flex-1 items-start gap-[10px] w-full">
    {/* Item Container start*/}
      <div className="py-2.5 px-3.5 w-full flex items-start gap-[10px] flex-col text-[#49454F]">
        {/* Item Content start*/}
        <div className="flex flex-col items-start gap-[20px] self-stretch">
          <div className="flex flex-col items-start gap-[10px] self-stretch">
            {/* Item Content row 1 start*/}
            <div className="grid grid-cols-5 w-full items-start gap-5 px-3.5 pb-2.5 text-[#1C1B1F]">
              {/* Item Content row-1 column-1 start*/}
              <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px] col-span-2 ">
                <p className=" leading-5 tracking-tighter">Product Name:</p>
                <p className="text-[22px] leading-7 text-[#1C1B1F]">Designer Bags</p>
              </div>
              {/* Item Content row-1 column-1 end*/}
              {/* Item Content row-1 column-2 start*/}
              <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px]">
                <p className=" leading-5 tracking-tighter">Product <br/>Original Cost:</p>
                <p className="text-[22px] leading-7 text-[#1C1B1F]">$45.00</p>
              </div>
              {/* Item Content row-1 column-2 end*/}
              {/* Item Content row-1 column-3 start*/}
              <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px]">
                <p className=" leading-5 tracking-tighter">Quantity:</p>
                <p className="text-[22px] leading-7 text-[#1C1B1F]">4</p>
              </div>
              {/* Item Content row-1 column-3 end*/}
            </div>
            {/* Item Content row 1 end*/}
            {/* Item Content row 2 start*/}
            <div className="grid grid-cols-5 w-full items-start gap-5 px-3.5 pb-2.5 text-[#1C1B1F]">
              {/* Item Content row-2 column-1 start*/}
              <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px]">
                <p className=" leading-5 tracking-tighter">Weight:</p>
                <p className="text-[22px] leading-7 text-[#1C1B1F]">67kg</p>
              </div>
              {/* Item Content row-2 column-1 end*/}
              {/* Item Content row-2 column-2 start*/}
              <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px] ">
                <p className=" leading-5 tracking-tighter">Height:</p>
                <p className="text-[22px] leading-7 text-[#1C1B1F]">5 inches</p>
              </div>
              {/* Item Content row-2 column-2 end*/}
              {/* Item Content row-2 column-3 start*/}
              <div className="flex flex-col justify-between items-start gap-[20px] min-h-[73px] ">
                <p className=" leading-5 tracking-tighter">Length:</p>
                <p className="text-[22px] leading-7 text-[#1C1B1F]">5 inches</p>
              </div>
              {/* Item Content row-2 column-3 end*/}
              {/* Item Content row-2 column-4 start*/}
              <div className="flex flex-col justify-between items-start gap-[20px] min-h-[73px] ">
                <p className=" leading-5 tracking-tighter">Width:</p>
                <p className="text-[22px] leading-7 text-[#1C1B1F]">5 inches</p>
              </div>
              {/* Item Content row-2 column-4 end*/}
            </div>
            {/* Item Content row 2 end*/}


            {/* Item Content row-5 start*/}
            <div className="flex flex-wrap items-start gap-5 px-3.5 pb-2.5 text-[#1C1B1F]">
              {/* Item Content row-5 column-1 start*/}
              <div className="flex flex-col justify-between items-start gap-[5px] w-[281px] ">
                <p className=" leading-5 tracking-tighter">Product/Item<br />Picture:</p>
                <div className="rounded-[10px]">
                  <Image src={Computer} alt="computer" width={220} height={150} className="!rounded-[10px]"/>
                  {/* <img src="/computer.jpg" className="w-full h-full "/> */}
                </div>
              </div>
              {/* Item Content row-5 column-1 end*/}
            </div>
            {/* Item Content row-5 end*/}
            {/* Item Content row 6 start*/}
            <div className="flex flex-col w-full px-3.5 pb-2.5 justify-between items-start gap-[5px] min-h-[73px]">
              <p className=" leading-5 tracking-tighter">Product <br />Description:</p>
              <p className="text-[22px] leading-7 text-[#1C1B1F]">Additonvnv ghss jgsjvsn</p>
            </div>
            {/* Item Content row 6 end*/}
            {/* Item Content row-7 start*/}
            <div className="grid grid-cols-5 w-full items-start gap-[20px] px-3.5 pb-2.5 text-[#49454F]">
              {/* Item Content row-7 column-1 start*/}
              <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px]">
                <p className=" leading-5 tracking-tighter">Color:</p>
                <p className="text-[22px] leading-7 text-[#1C1B1F]">Blue</p>
              </div>
              {/* Item Content row-7 column-1 end*/}
              {/* Item Content row-7 column-2 start*/}
              <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px]">
                <p className=" leading-5 tracking-tighter">Stripes:</p>
                <p className="text-[22px] leading-7 text-[#1C1B1F]">5 inches</p>
              </div>
              {/* Item Content row-7 column-2 end*/}
            </div>
            {/* Item Content row-7 end*/}
          </div>

        </div>
        {/* Item Content end*/}
      </div>
      {/* Item Container end*/}
    </div>
  );
}

export function Item5_2() {
  return (    
  <div className="flex flex-col flex-1 items-start gap-[10px] w-full">
  {/* Item Container start*/}

  {/* Item Container end*/}
  </div>
  );
}

export function ShippingDetails5() {
  return (
    <div className="py-2.5 px-3.5 w-full flex items-start gap-[10px] flex-col text-[#49454F]">
    {/* Shipping Details Content start*/}
      <div className="flex flex-col items-start gap-[10px] self-stretch w-full">
        {/* Shipping Details Content row 1 start*/}
        <div className="grid grid-cols-5 items-start gap-5 px-3.5 pb-2.5 text-[#49454F] w-full ">
          {/* Shipping Details Content row-1 column-1 start*/}
          <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px] col-span-2 ">
            <p className=" leading-5 tracking-tighter">Receiver's First <br />Name:</p>
            <p className="text-[22px] leading-7 text-[#1C1B1F]">Malibu</p>
          </div>
          {/* Shipping Details Content row-1 column-1 end*/}
          {/* Shipping Details Content row-1 column-2 start*/}
          <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px] col-span-2 ">
            <p className=" leading-5 tracking-tighter">Receiver's Last <br />Name:</p>
            <p className="text-[22px] leading-7 text-[#1C1B1F]">SHedrack</p>
          </div>
          {/* Shipping Details Content row-1 column-2 end*/}
        </div>
        {/* Shipping Details Content row 1 end*/}

        {/* Shipping Details Content row 2 start*/}
        <div className="grid grid-cols-5 items-start gap-5 px-3.5 pb-2.5 text-[#49454F] w-full">
          {/* Shipping Details Content row-2 column-1 start*/}
          <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px] col-span-2 ">
            <p className=" leading-5 tracking-tighter">Receiver's <br />Phone Number:</p>
            <p className="text-[22px] leading-7 text-[#1C1B1F]">+234 803 456 7845</p>
          </div>
          {/* Shipping Details Content row-2 column-1 end*/}
          {/* Shipping Details Content row-2 column-2 start*/}
          <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px] col-span-2 ">
            <p className=" leading-5 tracking-tighter">Receiver's <br />Email:</p>
            <p className="text-[22px] leading-7 text-[#1C1B1F]">Malibushdrack@gmail.com</p>
          </div>
          {/* Shipping Details Content row-2 column-2 end*/}
        </div>
        {/* Shipping Details Content row 2 end*/}
        {/* Shipping Details Content row-3 start*/}
        <div className="flex items-start gap-5 px-3.5 pb-2.5 text-[#49454F] w-full">
          <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px] w-full ">
            <p className=" leading-5 tracking-tighter">Receiver's <br />Address:</p>
            <p className="text-[22px] leading-7 text-[#1C1B1F]">No, 1osolo way, ikeja road, behind scaint merry</p>
          </div>
        </div>
        {/* Shipping Details Content row-3 end*/}
        {/* Shipping Details Content row-4 start*/}
        <div className="grid grid-cols-5 items-start gap-[20px] px-3.5 pb-2.5 text-[#49454F] w-full">
          {/* Shipping Details Content row-4 column-1 start*/}
          <div className="flex flex-col justify-between items-start gap-[5px] ">
            <p className=" leading-5 tracking-tighter">Destination <br />Country:</p>
            <p className="text-[22px] leading-7 text-[#1C1B1F]">Turkey</p>
          </div>
          {/* Shipping Details Content row-4 column-1 end*/}
          {/* Shipping Details Content row-4 column-2 start*/}
          <div className="flex flex-col justify-between items-start gap-[5px] ">
            <p className=" leading-5 tracking-tighter">Destination <br />State:</p>
            <p className="text-[22px] leading-7 text-[#1C1B1F]">Istanbul</p>
          </div>
          {/* Shipping Details Content row-4 column-2 end*/}
          {/* Shipping Details Content row-4 column-3 start*/}
          <div className="flex flex-col justify-between items-start gap-[5px] ">
            <p className=" leading-5 tracking-tighter">Destination <br />City:</p>
            <p className="text-[22px] leading-7 text-[#1C1B1F]">Cyprusic</p>
          </div>
          {/* Shipping Details Content row-4 column-3 end*/}
          {/* Shipping Details Content row-4 column-4 start*/}
          <div className="flex flex-col justify-between items-start gap-[5px] ">
            <p className=" leading-5 tracking-tighter">Zip/postal <br />Code:</p>
            <p className="text-[22px] leading-7 text-[#1C1B1F]">98765</p>
          </div>
          {/* Shipping Details Content row-4 column-4 end*/}
        </div>
        {/* Shipping Details Content row-4 end*/}
      </div>
      {/* Shipping Details Content end*/}
    </div>
  );
}

export function BillingDetails5() {
  return (
    <div className="py-2.5 px-3.5 w-full flex items-start gap-[10px] flex-col text-[#49454F]">
    {/* Billing Details Content start*/}
      <div className="flex flex-col items-start gap-[10px] self-stretch w-full">
        {/* Billing Details Content row 1 start*/}
        <div className="grid grid-cols-5 items-start gap-5 px-3.5 pb-2.5 text-[#49454F] w-full ">
          {/* Billing Details Content row-1 column-1 start*/}
          <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px] col-span-2 ">
            <p className=" leading-5 tracking-tighter">First Name:</p>
            <p className="text-[22px] leading-7 text-[#1C1B1F]">Malibu</p>
          </div>
          {/* Billing Details Content row-1 column-1 end*/}
          {/* Billing Details Content row-1 column-2 start*/}
          <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px] col-span-2 ">
            <p className=" leading-5 tracking-tighter">Last Name:</p>
            <p className="text-[22px] leading-7 text-[#1C1B1F]">SHedrack</p>
          </div>
          {/* Billing Details Content row-1 column-2 end*/}
        </div>
        {/* Billing Details Content row 1 end*/}

        {/* Billing Details Content row 2 start*/}
        <div className="grid grid-cols-5 items-start gap-5 px-3.5 pb-2.5 text-[#49454F] w-full">
          {/* Billing Details Content row-2 column-1 start*/}
          <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px] col-span-2 ">
            <p className=" leading-5 tracking-tighter">Phone <br />Number:</p>
            <p className="text-[22px] leading-7 text-[#1C1B1F]">+234 803 456 7845</p>
          </div>
          {/* Billing Details Content row-2 column-1 end*/}
          {/* Billing Details Content row-2 column-2 start*/}
          <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px] col-span-2 ">
            <p className=" leading-5 tracking-tighter">Email:</p>
            <p className="text-[22px] leading-7 text-[#1C1B1F]">Malibushdrack@gmail.com</p>
          </div>
          {/* Billing Details Content row-2 column-2 end*/}
        </div>
        {/* Billing Details Content row 2 end*/}
        {/* Billing Details Content row-3 start*/}
        <div className="flex items-start gap-5 px-3.5 pb-2.5 text-[#49454F] w-full">
          <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px] w-full ">
            <p className=" leading-5 tracking-tighter">Address:</p>
            <p className="text-[22px] leading-7 text-[#1C1B1F]">No, 1osolo way, ikeja road, behind scaint merry</p>
          </div>
        </div>
        {/* Billing Details Content row-3 end*/}
        {/* Billing Details Content row-4 start*/}
        <div className="grid grid-cols-5 items-start gap-[20px] px-3.5 pb-2.5 text-[#49454F] w-full">
          {/* Billing Details Content row-4 column-1 start*/}
          <div className="flex flex-col justify-between items-start gap-[5px]  min-h-[73px] ">
            <p className=" leading-5 tracking-tighter">Country:</p>
            <p className="text-[22px] leading-7 text-[#1C1B1F]">Turkey</p>
          </div>
          {/* Billing Details Content row-4 column-1 end*/}
          {/* Billing Details Content row-4 column-2 start*/}
          <div className="flex flex-col justify-between items-start gap-[5px]  min-h-[73px] ">
            <p className=" leading-5 tracking-tighter">State:</p>
            <p className="text-[22px] leading-7 text-[#1C1B1F]">Istanbul</p>
          </div>
          {/* Billing Details Content row-4 column-2 end*/}
          {/* Billing Details Content row-4 column-3 start*/}
          <div className="flex flex-col justify-between items-start gap-[5px]  min-h-[73px] ">
            <p className=" leading-5 tracking-tighter">City:</p>
            <p className="text-[22px] leading-7 text-[#1C1B1F]">Cyprusic</p>
          </div>
          {/* Billing Details Content row-4 column-3 end*/}
          {/* Billing Details Content row-4 column-4 start*/}
          <div className="flex flex-col justify-between items-start gap-[5px]  min-h-[73px] ">
            <p className=" leading-5 tracking-tighter">Zip/postal <br />Code:</p>
            <p className="text-[22px] leading-7 text-[#1C1B1F]">98765</p>
          </div>
          {/* Billing Details Content row-4 column-4 end*/}
        </div>
        {/* Billing Details Content row-4 end*/}
      </div>
      {/* Billing Details Content end*/}
    </div>
  );
}

export function PaymentInformation5() {
  return (
    <div className="py-2.5 px-3.5 w-full flex items-start gap-[10px] flex-col text-[#49454F]">
      {/* payment information Content start*/}
      <div className="grid grid-cols-5 items-start gap-[10px] self-stretch">
        {/* payment information Content row-1 start*/}
        <div className="flex items-start gap-5 px-3.5 pb-2.5 col-span-2">
          <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px] w-full col-span-2">
            <div className="flex gap-x-[10px] justify-center items-center">
              <IconCreateOrderWarning />
              <p className=" leading-5 tracking-tighter">Total Shipment Cost:</p>
            </div>
            <p className="text-[22px] leading-7 text-[#1C1B1F]">$234,000.00</p>
          </div>
        </div>
        <div className="flex items-start gap-5 px-3.5 pb-2.5 col-span-2">
          <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px] w-full col-span-2 ">
            <p className=" leading-5 tracking-tighter">Payment<br /> Status</p>
            <p className="text-[22px] leading-7 text-[#1C1B1F]">Processing</p>
          </div>
        </div>
        {/* payment information Content row-1 end*/}
      </div>
      {/* payment information Content end*/}
    </div>
  );
}

export function confirmingOrderRequestExport5() {

  return (
    <div className="p-[30px] absolute w-full flex flex-col gap-[30px] items-start">
      <div className="px-[30px] py-5 border rounded-[20px] border-dashed flex items-start gap-[10px] self-stretch border-[#6750A4] w-full">
        <p className="text-[#6750A4] text-[28px] leading-9">
          Confirming Export Order Request
        </p>
      </div>
      <div className="flex flex-row gap-[39px]">
        <p 
            id='order_information_btn2'
            className='flex !w-[33px] !h-[48px] !rounded-[20px] !p-[10px] !bg-[#CAC4D0] !text-[#FFFFFF] !font-roboto !text-[22px] !font-bold leading-7'
          >
            1
        </p>
        <p 
          id='order_information_btn2'
          className='flex !w-[33px] !h-[48px] !rounded-[20px] !p-[10px] !bg-[#CAC4D0] !text-[#FFFFFF] !font-roboto !text-[22px] !font-bold leading-7'
        >
          2
        </p>
        <p 
          id='order_information_btn4'
          className='flex !w-[33px] !h-[48px] !rounded-[20px] !p-[10px] !bg-[#CAC4D0] !text-[#FFFFFF] !font-roboto !text-[22px] !font-bold leading-7'
        >
          3
        </p>
        <p 
          id='order_information_btn5'
          className='flex !w-[33px] !h-[48px] !rounded-[20px] !p-[10px] !bg-[#CAC4D0] !text-[#FFFFFF] !font-roboto !text-[22px] !font-bold leading-7'
        >
          4
        </p>
        <div id = "btn_group_1" className='flex gap-x-2.5 item-center'>
          <p 
            id='order_information_btn1'
            className='flex item-center align-center !w-[33px] !h-[48px] !rounded-[20px] !p-[10px] !bg-[#21005D] !text-[#FFFFFF] !font-roboto !text-[22px] !font-bold leading-7'
          >
            5
          </p>
          <p
            id='order_information_text'
            className='font-roboto text-[28px] !text-[#000000]'
          >
            Order Details Confirmation
          </p>
        </div>
        <p 
          id='order_information_btn6'
          className='flex !w-[44px] !h-[48px] !rounded-[20px] !p-[10px] !bg-[#CAC4D0] !text-[#FFFFFF] !font-roboto !text-[22px] !font-bold'
        >
          <span id='create_order_tick_icon' className='flex justify-center w-6 h-6 m-0.5 leading-8 !items-center '>
            <IconCreateOrderTick />
          </span>
        </p>
      </div>
      {/*  Order ID start*/}
      <div className="text-[28px] text-[#1C1B1F] leading-9 w-full">
        <span>Order ID:</span>
        <span className="font-bold">OD78667</span>
      </div>
      {/*  Order ID end*/}
      {/* Order Information start*/}
      <div className="flex flex-col flex-1 items-start gap-[10px] w-full">
        {/* Arrow-Circle-right start*/}
        <div className="flex flex-row gap-[10px] items-center">
          <span><IconArrowCircleRight /></span>
          <span className="text-3.5 text-[#1D192B] text-sm font-medium leading-5 tracking-wide">Order Information</span>
        </div>
        {/* Arrow-Circle-right end*/}
        <div className="flex items-center justify-center gap-[10px] w-full">
          {/* Order Information Container start*/}
          <Collapse
            items={[{ key: '1', label: (<p className='text-[22px] text-[#49454F] !pl-3.5'>Order Information</p>), children: <OrderInformation5 /> }]}
            expandIcon={({ isActive }) => isActive ? <IconExpand /> : <IconExpand />}
            expandIconPosition='end'
            className='w-full !bg-white !rounded-xl'
          />
          <Button type="link" className="!flex !items-center">
            <IconEdit />
          </Button>
          {/* Order Information Container end*/}
        </div>
      </div>
      {/* Order Information end*/}

      {/* Package Origin start*/}
      <div className="flex flex-col flex-1 items-start gap-[10px] w-full">
        {/* Arrow-Circle-right start*/}
        <div className="flex flex-row gap-[10px] items-center">
          <span><IconArrowCircleRight /></span>
          <span className="text-3.5 text-[#1D192B] text-sm font-medium leading-5 tracking-wide">Package Details</span>
        </div>
        {/* Arrow-Circle-right end*/}
        <div className="flex items-center justify-center gap-[10px] w-full">
          {/* Package Origin Container start*/}
          <div className="flex flex-col w-full gap-[10px]">
            <Collapse
              items={[{ key: '1', label: (<p className='text-[22px] text-[#49454F] !pl-3.5'>Package Origin</p>), children: <PackageOrigin5 /> }]}
              expandIcon={({ isActive }) => isActive ? <IconExpand /> : <IconExpand />}
              expandIconPosition='end'
              className='w-full !bg-white !rounded-xl'
            />
            {/* hr start */}
            <div className="flex w-full">
              <div className="border-b border-dashed mx-5 border-[#21005D] w-full "></div>
            </div>
            {/* hr end */}
          </div>
          <Button type="link" className="!flex !items-center">
            <IconEdit />
          </Button>
          {/* Package Origin Container end*/}
        </div>
        
        {/* Item1 start*/}
        <div className="flex items-center justify-center gap-[10px] w-full">
          <Collapse
            items={[{ key: '1', label: (<p className='text-[22px] text-[#49454F] !pl-3.5'>Item - #1</p>), children: <Item5_1 /> }]}
            expandIcon={({ isActive }) => isActive ? <IconExpand /> : <IconExpand />}
            expandIconPosition='end'
            className='w-full !bg-white !rounded-xl'
          />
          <Button type="link" className="!flex !items-center">
            <IconEdit />
          </Button>
        </div>
        {/* Item1 end*/}
        {/* Item2 start*/}
        <div className="flex items-center justify-center gap-[10px] w-full">
          <Collapse
            items={[{ key: '1', label: (<p className='text-[22px] text-[#49454F] !pl-3.5'>Item - #2</p>), children: <Item5_2 /> }]}
            expandIcon={({ isActive }) => isActive ? <IconExpand /> : <IconExpand />}
            expandIconPosition='end'
            className='w-full !bg-white !rounded-xl'
          />
          <Button type="link" className="!flex !items-center">
            <IconEdit />
          </Button>
        </div>
        {/* Item2 end*/}
      </div>
      {/* Package Origin end*/}

      {/* Shipping details start*/}
      <div className="flex flex-col flex-1 items-start gap-[10px] w-full">
        {/* Arrow-Circle-right start*/}
        <div className="flex flex-row gap-[10px] items-center">
          <span><IconArrowCircleRight /></span>
          <span className="text-3.5 text-[#1D192B] text-sm font-medium leading-5 tracking-wide">Shipping details</span>
        </div>
        {/* Arrow-Circle-right end*/}
        {/* Shipping Details Container start*/}
        <div className="flex items-center justify-center gap-[10px] w-full">
          <Collapse
            items={[{ key: '1', label: (<p className='text-[22px] text-[#49454F] !pl-3.5'>Destination/Shipping Address</p>), children: <ShippingDetails5 /> }]}
            expandIcon={({ isActive }) => isActive ? <IconExpand /> : <IconExpand />}
            expandIconPosition='end'
            className='w-full !bg-white !rounded-xl'
          />
          <Button type="link" className="!flex !items-center">
            <IconEdit />
          </Button>
        </div>
        {/* Shipping Details Container end*/}
      </div>
      {/* Shipping details end*/}

      {/* Billing details start*/}
      <div className="flex flex-col flex-1 items-start gap-[10px] w-full">
        {/* Arrow-Circle-right start*/}
        <div className="flex flex-row gap-[10px] items-center">
          <span><IconArrowCircleRight /></span>
          <span className="text-3.5 text-[#1D192B] text-sm font-medium leading-5 tracking-wide">Billing details</span>
        </div>
        {/* Arrow-Circle-right end*/}
        {/* Billing details Container start*/}
        <div className="flex items-center justify-center gap-[10px] w-full">
          <Collapse
            items={[{ key: '1', label: (<p className='text-[22px] text-[#49454F] leading-7 !pl-3.5'>Billing Information</p>), children: <BillingDetails5 /> }]}
            expandIcon={({ isActive }) => isActive ? <IconExpand /> : <IconExpand />}
            expandIconPosition='end'
            className='w-full !bg-white !rounded-xl'
          />
          <Button type="link" className="!flex !items-center">
            <IconEdit />
          </Button>
        </div>
        {/* Billing details Container end*/}
      </div>
      {/* Billing details end*/}
      {/* Payments Information start */}
      <div className="flex flex-col flex-1 items-start gap-[10px] w-full">
        {/* Payments Information Container start*/}
        <div className="flex items-center justify-center gap-[10px] w-full">
          <Collapse
            items={[{ key: '1', label: (<p className='text-[22px] text-[#49454F] leading-7 !pl-3.5'>Payment Information</p>), children: <PaymentInformation5 /> }]}
            expandIcon={({ isActive }) => isActive ? <IconExpand /> : <IconExpand />}
            expandIconPosition='end'
            className='w-full !bg-white !rounded-xl'
          />
          <Button type="link" className="!flex !items-center">
            <IconEdit />
          </Button>
        </div>
        {/* Payments Information Container end*/}
      </div>
      {/* Payments Information end */}
      {/* btn-group start */}
      <div className="btn-group flex flex-row gap-[10px]"> 
        <Button className=" !flex !h-10 !py-2.5 !pr-6 !pl-4 !justify-center !items-center !gap-2 !border !rounded-[20px] !text-[#6750A4] !text-center">
          <IconBack />
          <span className="text-sm font-medium leading-5 tracking-wide">Back</span>
        </Button>
        <Button className=" !flex !h-10 !w-[172px] !py-2.5 !pr-6 !pl-4 !justify-center !items-center !gap-2 !rounded-[20px] !text-[#ffffff]  !bg-[#6750A4] !text-center">
          <IconSave />
          <span className="text-sm font-medium leading-5 tracking-wide">Save as Draft</span>
        </Button>
        <Button className=" !flex !h-10 !py-2.5 !pr-6 !pl-4 !justify-center !items-center !gap-2 !rounded-[20px] !text-[#ffffff] !bg-[#B3261E] !text-center">
          <IconConfirm />
          <span className="text-sm font-medium leading-5 tracking-wide">Confirm & Submit Order</span>
        </Button>
      </div>
      <div>
        <p>Upon clicking “Confirm & Submit Order”, I confirm I <br/>have read and agreed to <span className="text-[#6750A4]">all terms and policies</span></p>
      </div>
      {/* btn-group end */}
    </div>
  );
}
//confirming export 5 end

