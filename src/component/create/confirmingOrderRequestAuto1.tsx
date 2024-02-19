"use client";

import React, {useState} from "react";
import Image from "next/image"
import { Collapse, Button, Select, Input, Table, Divider, Switch } from "antd"
import IconArrowCircleRight from "@/assets/arrowcircleright.svg";
import IconCreateOrderTick from "@/assets/order_create_tick.svg";
import IconCreateOrderSelector from "@/assets/create_order_selector.svg";
import IconCreateOrderBackBtnArray from "@/assets/btnBack.svg"
import IconCreateOrderNextBtnArray from "@/assets/btnConfirmation.svg"
import IconBack from "@/assets/order_back.svg";
import IconNext from "@/assets/order_confirm.svg";
import IconCancel from "@/assets/order_cancel.svg";
import IconExpand from "@/assets/order_expanded.svg";
import IconCreateOrderPlus from "@/assets/order_plus.svg";
import IconEdit from "@/assets/order_edit.svg";
import IconCreateOrderDollarMark from "@/assets/order_dollar_mark.svg";
import IconChange from "@/assets/changecurrency.svg";
import IconCreateOrderCar from "@/assets/car.jpg"
import IconCreateOrderWallet from "@/assets/order_wallet.svg";
import IconCreateOrderCancel from "@/assets/order_cancel.svg";
import IconCreateOrderWarning from "@/assets/order_warning.svg";
import IconSave from "@/assets/order_save.svg";
import IconConfirm from "@/assets/order_confirm.svg";

export default function Auto() {
  const [currentChildId, setCurrentChildId] = useState(1);

  const handleNext = () => {
    if(currentChildId < 5) {
      setCurrentChildId(currentChildId + 1);
    }
  }

  const handleBack = () => {
    if(currentChildId > 0) {
      setCurrentChildId(currentChildId - 1);
    }
  }

// confirming auto 1 start
const ConfirmingOrderRequestAuto1 = () => {
  return (
    <div className="p-[30px] absolute w-full flex flex-col gap-[30px] items-start">
      <div className="px-[30px] py-5 border rounded-[20px] border-dashed flex items-start gap-[10px] self-stretch border-[#6750A4] w-full">
        <p className="text-[#6750A4] text-[28px] leading-9">
          Confirming Auto Import Order Request
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
        <Button onClick={ handleNext }
          className=" !flex !h-10 !w-[172px] !py-2.5 !pr-6 !pl-4 !justify-center !items-center !gap-2 !rounded-[20px] !text-[#ffffff]  !bg-[#6750A4] !text-center">
          <IconNext />
          <span className="text-sm font-medium leading-5 tracking-wide">Next</span>
        </Button>
      </div>
      {/* btn-group end */}
    </div>
  );
}
// confirming auto 1 end

//confirming auto 2 start
function PackageOrigin2() {
  return (
    <div className="py-2.5 px-3.5 w-full flex items-start gap-[10px] flex-col text-[#49454F]">
    {/* Package Details Content start*/}
      <div className="flex flex-col items-start gap-[10px] self-stretch">
        {/* Package Details Content row 1 start*/}
        <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px] px-3.5 pb-2.5 w-full">
          <p className="text-[#49454F] leading-5 tracking-tighter">Origin:</p>
          <p className="text-[22px] leading-7 break-all">United States (Houston - warehouse)</p>
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
            <p className=" leading-5 tracking-tighter">Zip/postal Code:</p>
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

function Item2_1() {
  return (
    <>
      <div className="py-2.5 px-3.5 w-full flex items-start gap-[10px] flex-col text-[#49454F]">
        {/* Car Content start*/}
        <div className="flex flex-col items-start gap-[10px] self-stretch">
          {/* Car Content row 1 start*/}
          <div className="grid grid-cols-5 items-start gap-5 px-3.5 pb-2.5 text-[#1C1B1F] w-full">
            {/* Car Content row-1 column-1 start*/}
            <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px] col-span-2">
              <p className=" leading-5 tracking-tighter">Car Model:</p>
              <p className="text-[22px] leading-7 text-[#1C1B1F]">Designer Bags</p>
            </div>
            {/* Car Content row-1 column-1 end*/}
            {/* Car Content row-1 column-2 start*/}
            <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px] col-span-2 ">
              <p className=" leading-5 tracking-tighter">Model:</p>
              <p className="text-[22px] leading-7 text-[#1C1B1F]">Designer Bags</p>
            </div>
            {/* Car Content row-1 column-2 end*/}
            {/* Car Content row-1 column-3 start*/}
            <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px] ">
              <p className=" leading-5 tracking-tighter">Production <br/>Year:</p>
              <p className="text-[22px] leading-7 text-[#1C1B1F]">2022</p>
            </div>
            {/* Car Content row-1 column-3 end*/}
          </div>
          {/* Car Content row 1 end*/}

          {/* Car Content row 2 start*/}
          <div className="grid grid-cols-5 items-start gap-5 px-3.5 pb-2.5 text-[#1C1B1F] w-full">
            {/* Car Content row-2 column-1 start*/}
            <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px] col-span-2 ">
              <p className=" leading-5 tracking-tighter">Car Value:</p>
              <p className="text-[22px] leading-7 text-[#1C1B1F]">$560,000,000.00</p>
            </div>
            {/* Car Content row-2 column-1 end*/}
            {/* Car Content row-2 column-2 start*/}
            <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px] ">
              <p className=" leading-5 tracking-tighter">Car Condition:</p>
              <p className="text-[22px] leading-7 text-[#1C1B1F]">Drivable</p>
            </div>
            {/* Car Content row-2 column-2 end*/}
            {/* Car Content row-2 column-3 start*/}
            <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px] ">
              <p className=" leading-5 tracking-tighter">Car Color:</p>
              <p className="text-[22px] leading-7 text-[#1C1B1F]">Blue</p>
            </div>
            {/* Car Content row-2 column-3 end*/}
            {/* Car Content row-2 column-4 start*/}
            <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px] ">
              <p className=" leading-5 tracking-tighter">Milleage:</p>
              <p className="text-[22px] leading-7 text-[#1C1B1F]">77676km</p>
            </div>
            {/* Car Content row-2 column-4 end*/}
          </div>
          {/* Car Content row 2 end*/}
          {/* Car Content row-3 start*/}
          <div className="grid grid-cols-5 gap-5 px-3.5 pb-2.5 text-[#1C1B1F] w-full">
            <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px] col-span-2 ">
              <p className=" leading-5 tracking-tighter">VIN Number:</p>
              <p className="text-[22px] leading-7 text-[#1C1B1F]">Amazon</p>
            </div>
            <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px] col-span-3 ">
              <p className=" leading-5 tracking-tighter">Direct URL/Website <br />Link to the Car:</p>
              <p className="text-[22px] leading-7 text-[#B3261E]">https://jjnkkukja.jhgyjayjdjjhcjc</p>
            </div>
          </div>
          {/* Car Content row-3 end*/}
          {/* Car Content row-4 start*/}
          <div className="grid grid-cols-5 items-start gap-[20px] px-3.5 pb-2.5 text-[#1C1B1F] w-full">
            {/* Car Content row-4 column-1 start*/}
            <div className="flex flex-col justify-between items-start gap-[5px] col-span-2 ">
              <p className=" leading-5 tracking-tighter">Car<br />Picture:</p>
              <div className="w-[281px] h-[151px]">
                <img src="/car.jpg" className="w-full h-full rounded-[10px]"/>
              </div>
            </div>
            {/* Car Content row-4 column-1 end*/}
            {/* Car Content row-4 column-2 start*/}
            <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px] w-full">
              <p className=" leading-5 tracking-tighter">Copy of the<br/>Car Title:</p>
              <div className="bg-[#D9D9D9] rounded-[10px] w-[147px] h-[151px]">
              </div>
            </div>
            {/* Car Content row-4 column-2 end*/}
          </div>
          {/* Car Content row-4 end*/}
          {/* Car Content row-5 start*/}
          <div className="flex items-start gap-5 px-3.5 pb-2.5 text-[#6750A4] w-full">
            <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px] w-full ">
              <p className=" leading-5 tracking-tighter text-[#49454F]">Car<br/>Description:</p>
              <p className="text-[22px] leading-7 text-[#1C1B1F]">Additonvnv ghss jgsjvsn</p>
            </div>
          </div>
          {/* Car Content row-5 end*/}

          {/* Car Content row-6 start*/}
          <div className="grid grid-cols-5 items-start gap-5 px-3.5 pb-2.5 text-[#1C1B1F] w-full">
            {/* Car Content row-6 column-1 start*/}
            <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px] ">
              <p className=" leading-5 tracking-tighter">Color:</p>
              <p className="text-[22px] leading-7 text-[#1C1B1F]">Blue</p>
            </div>
            {/* Car Content row-6 column-1 end*/}
            {/* Car Content row-6 column-2 start*/}
            <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px] ">
              <p className=" leading-5 tracking-tighter">Stripes:</p>
              <p className="text-[22px] leading-7 text-[#1C1B1F]">5 inches</p>
            </div>
            {/* Car Content row-6 column-2 end*/}
          </div>
          {/* Car Content row-6 end*/}
        </div>
        {/* Car Content end*/}
        {/* Pickup Details Container start*/}
        <div className="w-full flex items-start gap-[10px] flex-col text-[#49454F]">
          {/* hr line start*/}
          <hr className="border-t border-t-[#79747E] w-full pb-2.5"/>
          {/* hr line end*/}
          {/* Pickup Details start*/}
          <div className="flex pr-1.5 justify-between items-center self-stretch w-full">
            <p className="text-[22px] leading-7 px-3.5 py-2.5 w-full">Pickup Details</p>
          </div>
          {/* Pickup Details end*/}
          {/* Pickup Details Content start*/}
          <div className="flex flex-col items-start gap-[10px] self-stretch">
            {/* Pickup Details Content row 1 start*/}
            <div className="grid grid-cols-5 items-start gap-[20px] px-3.5 pb-2.5 text-[#49454F] w-full"> 
              {/* Pickup Details Content row-1 column-1 start*/}
              <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px] col-span-2 ">
                <p className=" leading-5 tracking-tighter">Contact First<br/> Name:</p>
                <p className="text-[22px] leading-7 text-[#1C1B1F]">Malibu</p>
              </div>
              {/* Pickup Details Content row-1 column-1 end*/}
              {/* Pickup Details Content row-1 column-2 start*/}
              <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px] col-span-2 ">
                <p className=" leading-5 tracking-tighter">Contact Last<br /> Name:</p>
                <p className="text-[22px] leading-7 text-[#1C1B1F]">SHedrack</p>
              </div>
              {/* Pickup Details Content row-1 column-2 end*/}
            </div>
            {/* Pickup Details Content row 1 end*/}

            {/* Pickup Details Content row 2 start*/}
            <div className="grid grid-cols-5 items-start gap-5 px-3.5 pb-2.5 text-[#49454F] w-full"> 
              {/* Pickup Details Content row-2 column-1 start*/}
              <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px]  col-span-2 ">
                <p className=" leading-5 tracking-tighter">Contact<br /> Number:</p>
                <p className="text-[22px] leading-7 text-[#1C1B1F]">+234 803 456 7845</p>
              </div>
              {/* Pickup Details Content row-2 column-1 end*/}
              {/* Pickup Details Content row-2 column-2 start*/}
              <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px]  col-span-2 ">
                <p className=" leading-5 tracking-tighter">Contact Email:</p>
                <p className="text-[22px] leading-7 text-[#1C1B1F] break-all">Malibushdrack@gmail.com</p>
              </div>
              {/* Pickup Details Content row-2 column-2 end*/}
            </div>
            {/* Pickup Details Content row 2 end*/}
            {/* Pickup Details Content row-3 start*/}
            <div className="grid grid-cols-5 items-start gap-[20px] px-3.5 pb-2.5 text-[#49454F] w-full">
              {/* Pickup Details Content row-3 column-1 start*/}
              <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px]">
                <p className=" leading-5 tracking-tighter">Country:</p>
                <p className="text-[22px] leading-7 text-[#1C1B1F]">Turkey</p>
              </div>
              {/* Pickup Details Content row-3 column-1 end*/}
              {/* Pickup Details Content row-3 column-2 start*/}
              <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px]">
                <p className=" leading-5 tracking-tighter">State:</p>
                <p className="text-[22px] leading-7 text-[#1C1B1F]">Istanbul</p>
              </div>
              {/* Pickup Details Content row-3 column-2 end*/}
              {/* Pickup Details Content row-3 column-3 start*/}
              <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px]">
                <p className=" leading-5 tracking-tighter">City:</p>
                <p className="text-[22px] leading-7 text-[#1C1B1F]">Cyprusic</p>
              </div>
              {/* Pickup Details Content row-3 column-3 end*/}
              {/* Pickup Details Content row-3 column-4 start*/}
              <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px]">
                <p className=" leading-5 tracking-tighter">Zip/postal<br/>Code:</p>
                <p className="text-[22px] leading-7 text-[#1C1B1F]">98765</p>
              </div>
              {/* Pickup Details Content row-3 column-4 end*/}
            </div>
            {/* Pickup Details Content row-3 end*/}
            {/* Pickup Details Content row-4 start*/}
            <div className="flex items-start gap-[60px] px-3.5 pb-2.5 text-[#49454F] w-full">
              <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px] w-full ">
                <p className=" leading-5 tracking-tighter">Street Address:</p>
                <p className="text-[22px] leading-7 text-[#1C1B1F]">No, 1osolo way, ikeja road, behind scaint merry</p>
              </div>
            </div>
            {/* Pickup Details Content row-4 end*/}

          </div>
          {/* Pickup Details Content end*/}
        </div>
        {/* Pickup Details Container end*/}
      </div>
    </>
  );
}

function Item2_2() {
  return (
    <>   
    </>
  );
}

const ConfirmingOrderRequestAuto2 = () => {
  const [isOrder, setIsOrder] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  }

  return (
    <div className="p-[30px] absolute w-full flex flex-col gap-[30px] items-start">
      <div className="px-[30px] py-5 border rounded-[20px] border-dashed flex items-start gap-[10px] self-stretch border-[#6750A4] w-full">
        <p className="text-[#6750A4] text-[28px] leading-9">
          Confirming Auto Import Order Request
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

      {/* Package Details start*/}
      <div className="flex flex-col flex-1 items-start gap-[10px] w-full">
        <div  className="flex items-center justify-center gap-[10px] w-full">
          {/* Package Details Container start*/}
          <div className="flex flex-col items-start gap-[10px] w-full">
            <Collapse
              items={[{ key: '1', label: (<p className='text-[22px] text-[#49454F] !pl-3.5'>Package Origin/Shipment Location</p>), children: <PackageOrigin2 /> }]}
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
          {/* Package Details Container end*/}
          <Button type="link" className="!flex !items-center">
            <IconEdit />
          </Button>
        </div>
        {/* Car1 start*/}
        <div className="flex items-center justify-center gap-[10px] w-full">
          {/* Car Container start*/}
          <Collapse
            items={[{ key: '1', label: (<p className='text-[22px] text-[#49454F] !pl-3.5'>Car - <span className="text-[#6750A4]">#1</span></p>), children: <Item2_1 /> }]}
            expandIcon={({ isActive }) => isActive ? <IconExpand /> : <IconExpand />}
            expandIconPosition='end'
            className='w-full !bg-white !rounded-xl'
          />
          <Button type="link" className="!flex !items-center">
            <IconEdit />
          </Button>
          {/* Car Container end*/}
        </div>
        {/* Car1 end*/}
        {/* Car2 start*/}
        <div className="flex items-center justify-center gap-[10px] w-full">
          {/* Car Container start*/}
          <Collapse
            items={[{ key: '1', label: (<p className='text-[22px] text-[#49454F] leading-7 !pl-3.5'>Car - <span className="text-[#6750A4]">#2</span></p>), children: <Item2_2 /> }]}
            expandIcon={({ isActive }) => isActive ? <IconExpand /> : <IconExpand />}
            expandIconPosition='end'
            className='w-full !bg-white !rounded-xl'
          />
          <Button type="link" className="!flex !items-center">
            <IconEdit />
          </Button>
          {/* Car Container end*/}
        </div>
        {/* Car2 end*/}
      </div>
      {/* Package Details end*/}
      {/* Add new Car start */}
      <Button onClick={() => setIsModalOpen(true)} className='!flex !items-center justify-center !w-[200px] !h-14 !py-1 !pr-[16px] !pl-0 !rounded-[20px] !bg-[#49454F] '>
        <span className='w-[40px] h-[40px] !m-1'><IconCreateOrderPlus /></span>
        <p className='!text-base text-[#E6E1E5] !font-normal'>Add new car</p>
      </Button>
      {/* Add new Car end */}
      {/* btn-group start */}
      <div className="btn-group flex flex-row gap-[10px]"> 
        <Button  onClick={handleBack} className=" !flex !h-10 !w-[100px] !py-2.5 !pr-6 !pl-4 !justify-center !items-center !gap-2 !border !rounded-[20px] !text-[#6750A4] !text-center">
          <IconBack />
          <span className="text-sm font-medium leading-5 tracking-wide">Back</span>
        </Button>
        <Button onClick={ handleNext } className=" !flex !h-10 !w-[172px] !py-2.5 !pr-6 !pl-4 !justify-center !items-center !gap-2 !rounded-[20px] !text-[#ffffff]  !bg-[#6750A4] !text-center">
          <IconNext />
          <span className="text-sm font-medium leading-5 tracking-wide">Next</span>
        </Button>
      </div>
      {/* btn-group end */}
      {/* <Modal centered open={isModalOpen} footer={null} closeIcon={null} className='!rounded-3xl'>
        <div className='px-[30px] py-6'>
          <p className='text-[24px] mb-4'>OOPS!</p>
          <p className='text-base'>This Shipment has not been started, would you like to start<br />this Shipment now?</p>
          <div className='flex items-center justify-end pr-6 mt-8'>
            <Button type='link' onClick={handleCancel}>
              <p className='text-[#6750A4] font-semibold'>Cancel</p>
            </Button>
            <Button onClick={() => { setIsOrder(false); handleOk(); }} className='!h-10 !rounded-3xl !bg-[#6750A4]'>
              <div className='flex items-center'>
                <IconStart />
                <p className='text-white'>Yes, Start Shipment</p>
              </div>
            </Button>
          </div>
        </div>
      </Modal> */}
    </div>
  );
}
//confirming auto 2 end

//confirming auto 3 start
function ShippingDetails3() {
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

const ConfirmingOrderRequestAuto3 = () => {
  return (
    <div className="p-[30px] absolute w-full flex flex-col gap-[30px] items-start">
      <div className="px-[30px] py-5 border rounded-[20px] border-dashed flex items-start gap-[10px] self-stretch border-[#6750A4] w-full">
        <p className="text-[#6750A4] text-[28px] leading-9">
          Confirming Auto Import Order Request
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
        <Button onClick={handleBack}  className=" !flex !h-10 !w-[100px] !py-2.5 !pr-6 !pl-4 !justify-center !items-center !gap-2 !border !rounded-[20px] !text-[#6750A4] !text-center">
          <IconBack />
          <span className="text-sm font-medium leading-5 tracking-wide">Back</span>
        </Button>
        <Button onClick={ handleNext } className=" !flex !h-10 !w-[172px] !py-2.5 !pr-6 !pl-4 !justify-center !items-center !gap-2 !rounded-[20px] !text-[#ffffff]  !bg-[#6750A4] !text-center">
          <IconNext />
          <span className="text-sm font-medium leading-5 tracking-wide">Next</span>
        </Button>
      </div>
      {/* btn-group end */}
    </div>
  );
}
//confirming auto 3 end

//confirming auto 4 start
function BillingInformation4() {
  return (
  <div className="flex flex-col flex-1 items-start gap-[10px] w-full">
    {/* Billing details Container start*/}
    <div className="py-2.5 px-3.5 w-full flex items-start gap-[10px] flex-col text-[#49454F]">
      {/* Billing details Content start*/}
      <div className="flex flex-col items-start gap-[10px] self-stretch">
        {/* Billing details Content row 1 start*/}
        <div className="grid grid-cols-5 w-full items-start gap-5 px-3.5 pb-2.5 text-[#49454F]">
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
        <div className="grid grid-cols-5 w-full items-start gap-5 px-3.5 pb-2.5 text-[#49454F]">
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
        <div className="flex items-start gap-5 px-3.5 pb-2.5 text-[#49454F]">
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

function ShipmentCost4() {
  return (
  <div
    id='order_pgdetail-item_1'
    className='flex flex-col gap-y-[10px] w-full !pt-[30px] !pb-[30px] !px-[34px] '
  >
    <Input
        className='flex !h-14 !w-full !text-base !pt-1 !pr-4 !pb-1 !pl-0 !border !rounded-[20px] !border-[#79747E]'
        prefix={<div className='grid !place-items-center !w-12 !h-12 ml-1 !rounded-[100px]'><IconCreateOrderDollarMark /></div>}
        value={'657.00'}
      />  

    <div
      className='!flex flex-col border rounded-[20px] !py-[20px] !px-[20px] gap-y-[30px]'
    >
      <p className='!flex !items-center'>
        <span className='text-sm'>Additional Costs</span>
      </p>
      <div className='grid grid-cols-4'>
        <div className="flex flex-col justify-between min-h-[73px]">
          <p className='text-sm'>Storage <br />Charge:</p>
          <p className='text-[22px] leading-[26px] text-[#1C1B1F]'>$23.00</p>
        </div>
        <div className="flex flex-col justify-between min-h-[73px]">
          <p className='text-sm'>Insurance <br />Cost:</p>
          <p className='text-[22px] leading-[26px] text-[#1C1B1F]'>$23.00</p>
        </div>
        <div className="flex flex-col justify-between min-h-[73px]">
          <p className='text-sm'>Payment Method <br />Surcharge:</p>
          <p className='text-[22px] leading-[26px] text-[#1C1B1F]'>$23.00</p>
        </div>
        <div className="flex flex-col justify-between min-h-[73px]">
          <p className='text-sm'>VAT:</p>
          <p className='text-[22px] leading-[26px] text-[#1C1B1F]'>$23.00</p>
        </div>
      </div>
      <div className="flex gap-x-[10px] w-full">
        <Input
          className='flex !h-14 !w-full !text-base !pt-1 !pr-4 !pb-1 !pl-0 !border !rounded-[20px] !border-[#79747E]'
          prefix={<div className='grid !place-items-center !w-12 !h-12 ml-1 !rounded-[100px] '><IconCreateOrderDollarMark /></div>}
          value={'657.00'}
        />
        <Input
          className='flex !h-14 !w-full !text-base !pt-1 !pr-4 !pb-1 !pl-0 !border !rounded-[20px] !border-[#79747E]'
          prefix={<div className='grid !place-items-center !w-12 !h-12 ml-1 !rounded-[100px] '><IconCreateOrderDollarMark /></div>}
          value={'657.00'}
        />
      </div>
      <Button className='!flex !items-center !justify-center !w-[200px] !h-14 !py-1 !pr-[16px] !pl-0 !rounded-t-[20px] !rounded-b-none !border-x-0 !border-t-0 !border-b !border-black !bg-[#E7E0EC] '>
        <span className='flex !justify-center !items-center w-[25px] h-[25px] !m-1'><IconCreateOrderCancel /></span>
        <p className='!text-base !text-black !font-normal'>Pick Up cost</p>
      </Button>

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

function ClearingCost4() {
  return (
    <div
      id='order_pgdetail-item_1'
      className='flex flex-col w-full !pt-[30px] !pb-[30px] !px-[34px] '
    >
      <Input
        className='flex !h-14 !w-full !text-base my-[30px] !pt-1 !pr-4 !pb-1 !pl-0 !border !rounded-[20px] !border-[#79747E]'
        prefix={<div className='grid !place-items-center !w-12 !h-12 ml-1 !rounded-[100px]'><IconCreateOrderDollarMark /></div>}
        value={'657.00'}
      />  
      <Button className='!flex !items-center justify-center !w-[200px] !h-14 !py-1 !pr-[16px] !pl-0 !rounded-[20px] !bg-[#49454F] !text-white'>
        <span className='w-[40px] h-[40px] !m-1'><IconCreateOrderPlus /></span>
        <p className='!text-base text-[#E6E1E5] !font-normal'>Add new payment</p>
      </Button>
 
      <Divider className='!p-0 !my-[10px] !border-[#79747E] ' />
      <div className='grid grid-cols-3 gap-[30px]'>
        <div
          className='flex flex-col border rounded-[20px] !px-[14px] !py-[10px] border-[#CAC4D0] justify-between gap-y-[20px] w-full'
        >
          <div className='!flex !justify-between !items-center '>
            <p className='text-[22px]'>Discounts</p>
            <span className='p-3'><Switch /></span>
          </div>
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


const ConfirmingOrderRequestAuto4 = () => {


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
            src={IconCreateOrderCar}
            alt="Your Image"
            width={62}
            height={55}
          />
          <p className='truncate overflow-ellipsis whitespace-pre-line'>{text}</p>
        </div>
      ),
    },
    {
      title: <p className='text-sm !font-medium'>Car(s)<br/> Color</p>,
      dataIndex: 'color',
      key: 'color',
      width: '20%',
      render: (text: string) => (
        <>
          <p className='text-sm font-medium'>{text}</p>
        </>
      )
    },
    {
      title: <p className='text-sm !font-medium'>Car(s)<br/> Value</p>,
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
      title: <p className='text-sm !font-medium'>Pick up <br/>Cost</p>,
      dataIndex: 'cost',
      key: 'cost',
      width: '20%',
      render: (text: string) => (
        <>
          <p className='text-sm font-medium'>{text}</p>
        </>
      )
    }];

  const data = [
    {
      items: "Benz s10",
      color: "Blue",
      value: "$88.99",
      cost: "$22.00"
    },
    {
      items: "GLK 450d",
      color: "Green",
      value: "$88.99",
      cost: "---"
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
        <div className='flex justify-end px-[30px] py-[10px]'>
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
      {/* Clearing Cost start */}
      <Collapse
        items={[{ key: '1', label: (<p className='text-[22px] text-[#49454F] !pl-3.5'>Clearing Cost</p>  
        ), children: <ClearingCost4 /> }]}
        expandIcon={({ isActive }) => isActive ? <IconExpand /> : <IconExpand />}
        expandIconPosition='end'
        className='w-full !bg-white !rounded-xl !border-[#d9d9d9]'
      />
      {/* clearing Cost end */}

      {/* btn-group start */}
      <div className="btn-group flex flex-row gap-[10px]"> 
        <Button  onClick={handleBack} className=" !flex !h-10 !py-2.5 !pr-6 !pl-4 !justify-center !items-center !gap-2 !border !rounded-[20px] !text-[#6750A4] !text-center">
          <IconBack />
          <span className="text-sm font-medium leading-5 tracking-wide">Back</span>
        </Button>
        <Button className=" !flex !h-10 !w-[172px] !py-2.5 !pr-6 !pl-4 !justify-center !items-center !gap-2 !rounded-[20px] !text-[#ffffff]  !bg-[#6750A4] !text-center">
          <IconSave />
          <span className="text-sm font-medium leading-5 tracking-wide">Save as Draft</span>
        </Button>
        <Button onClick={handleNext} className=" !flex !h-10 !py-2.5 !pr-6 !pl-4 !justify-center !items-center !gap-2 !rounded-[20px] !text-[#ffffff] !bg-[#B3261E] !text-center">
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
//confirming auto 4 end

//confirming auto 5 start
function OrderInformation5() {
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
          <p className="text-[22px] leading-7 text-[#1C1B1F]">Auto Import</p>
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

function PackageOrigin5() {
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

function Item5_1() {
  return (
    <>
      <div className="py-2.5 px-3.5 w-full flex items-start gap-[10px] flex-col text-[#49454F]">
        {/* Car Content start*/}
        <div className="flex flex-col items-start gap-[10px] self-stretch">
          {/* Car Content row 1 start*/}
          <div className="grid grid-cols-5 items-start gap-5 px-3.5 pb-2.5 text-[#1C1B1F] w-full">
            {/* Car Content row-1 column-1 start*/}
            <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px] col-span-2">
              <p className=" leading-5 tracking-tighter">Car Model:</p>
              <p className="text-[22px] leading-7 text-[#1C1B1F]">Designer Bags</p>
            </div>
            {/* Car Content row-1 column-1 end*/}
            {/* Car Content row-1 column-2 start*/}
            <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px] col-span-2 ">
              <p className=" leading-5 tracking-tighter">Model:</p>
              <p className="text-[22px] leading-7 text-[#1C1B1F]">Designer Bags</p>
            </div>
            {/* Car Content row-1 column-2 end*/}
            {/* Car Content row-1 column-3 start*/}
            <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px] ">
              <p className=" leading-5 tracking-tighter">Production <br/>Year:</p>
              <p className="text-[22px] leading-7 text-[#1C1B1F]">2022</p>
            </div>
            {/* Car Content row-1 column-3 end*/}
          </div>
          {/* Car Content row 1 end*/}

          {/* Car Content row 2 start*/}
          <div className="grid grid-cols-5 items-start gap-5 px-3.5 pb-2.5 text-[#1C1B1F] w-full">
            {/* Car Content row-2 column-1 start*/}
            <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px] col-span-2 ">
              <p className=" leading-5 tracking-tighter">Car Value:</p>
              <p className="text-[22px] leading-7 text-[#1C1B1F]">$560,000,000.00</p>
            </div>
            {/* Car Content row-2 column-1 end*/}
            {/* Car Content row-2 column-2 start*/}
            <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px] ">
              <p className=" leading-5 tracking-tighter">Car Condition:</p>
              <p className="text-[22px] leading-7 text-[#1C1B1F]">Drivable</p>
            </div>
            {/* Car Content row-2 column-2 end*/}
            {/* Car Content row-2 column-3 start*/}
            <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px] ">
              <p className=" leading-5 tracking-tighter">Car Color:</p>
              <p className="text-[22px] leading-7 text-[#1C1B1F]">Blue</p>
            </div>
            {/* Car Content row-2 column-3 end*/}
            {/* Car Content row-2 column-4 start*/}
            <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px] ">
              <p className=" leading-5 tracking-tighter">Milleage:</p>
              <p className="text-[22px] leading-7 text-[#1C1B1F]">77676km</p>
            </div>
            {/* Car Content row-2 column-4 end*/}
          </div>
          {/* Car Content row 2 end*/}
          {/* Car Content row-3 start*/}
          <div className="grid grid-cols-5 gap-5 px-3.5 pb-2.5 text-[#1C1B1F] w-full">
            <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px] col-span-2 ">
              <p className=" leading-5 tracking-tighter">VIN Number:</p>
              <p className="text-[22px] leading-7 text-[#1C1B1F]">Amazon</p>
            </div>
            <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px] col-span-3 ">
              <p className=" leading-5 tracking-tighter">Direct URL/Website <br />Link to the Car:</p>
              <p className="text-[22px] leading-7 text-[#B3261E]">https://jjnkkukja.jhgyjayjdjjhcjc</p>
            </div>
          </div>
          {/* Car Content row-3 end*/}
          {/* Car Content row-4 start*/}
          <div className="grid grid-cols-5 items-start gap-[20px] px-3.5 pb-2.5 text-[#1C1B1F] w-full">
            {/* Car Content row-4 column-1 start*/}
            <div className="flex flex-col justify-between items-start gap-[5px] col-span-2 ">
              <p className=" leading-5 tracking-tighter">Car<br />Picture:</p>
              <div className="w-[281px] h-[151px]">
                <img src="/car.jpg" className="w-full h-full rounded-[10px]"/>
              </div>
            </div>
            {/* Car Content row-4 column-1 end*/}
            {/* Car Content row-4 column-2 start*/}
            <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px] w-full">
              <p className=" leading-5 tracking-tighter">Copy of the<br/>Car Title:</p>
              <div className="bg-[#D9D9D9] rounded-[10px] w-[147px] h-[151px]">
              </div>
            </div>
            {/* Car Content row-4 column-2 end*/}
          </div>
          {/* Car Content row-4 end*/}
          {/* Car Content row-5 start*/}
          <div className="flex items-start gap-5 px-3.5 pb-2.5 text-[#6750A4] w-full">
            <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px] w-full ">
              <p className=" leading-5 tracking-tighter text-[#49454F]">Car<br/>Description:</p>
              <p className="text-[22px] leading-7 text-[#1C1B1F]">Additonvnv ghss jgsjvsn</p>
            </div>
          </div>
          {/* Car Content row-5 end*/}

          {/* Car Content row-6 start*/}
          <div className="grid grid-cols-5 items-start gap-5 px-3.5 pb-2.5 text-[#1C1B1F] w-full">
            {/* Car Content row-6 column-1 start*/}
            <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px] ">
              <p className=" leading-5 tracking-tighter">Color:</p>
              <p className="text-[22px] leading-7 text-[#1C1B1F]">Blue</p>
            </div>
            {/* Car Content row-6 column-1 end*/}
            {/* Car Content row-6 column-2 start*/}
            <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px] ">
              <p className=" leading-5 tracking-tighter">Stripes:</p>
              <p className="text-[22px] leading-7 text-[#1C1B1F]">5 inches</p>
            </div>
            {/* Car Content row-6 column-2 end*/}
          </div>
          {/* Car Content row-6 end*/}
        </div>
        {/* Car Content end*/}
        {/* Pickup Details Container start*/}
        <div className="w-full flex items-start gap-[10px] flex-col text-[#49454F]">
          {/* hr line start*/}
          <hr className="border-t border-t-[#79747E] w-full pb-2.5"/>
          {/* hr line end*/}
          {/* Pickup Details start*/}
          <div className="flex pr-1.5 justify-between items-center self-stretch w-full">
            <p className="text-[22px] leading-7 px-3.5 py-2.5 w-full">Pickup Details</p>
          </div>
          {/* Pickup Details end*/}
          {/* Pickup Details Content start*/}
          <div className="flex flex-col items-start gap-[10px] self-stretch">
            {/* Pickup Details Content row 1 start*/}
            <div className="grid grid-cols-5 items-start gap-[20px] px-3.5 pb-2.5 text-[#49454F] w-full"> 
              {/* Pickup Details Content row-1 column-1 start*/}
              <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px] col-span-2 ">
                <p className=" leading-5 tracking-tighter">Contact First<br/> Name:</p>
                <p className="text-[22px] leading-7 text-[#1C1B1F]">Malibu</p>
              </div>
              {/* Pickup Details Content row-1 column-1 end*/}
              {/* Pickup Details Content row-1 column-2 start*/}
              <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px] col-span-2 ">
                <p className=" leading-5 tracking-tighter">Contact Last<br /> Name:</p>
                <p className="text-[22px] leading-7 text-[#1C1B1F]">SHedrack</p>
              </div>
              {/* Pickup Details Content row-1 column-2 end*/}
            </div>
            {/* Pickup Details Content row 1 end*/}

            {/* Pickup Details Content row 2 start*/}
            <div className="grid grid-cols-5 items-start gap-5 px-3.5 pb-2.5 text-[#49454F] w-full"> 
              {/* Pickup Details Content row-2 column-1 start*/}
              <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px]  col-span-2 ">
                <p className=" leading-5 tracking-tighter">Contact<br /> Number:</p>
                <p className="text-[22px] leading-7 text-[#1C1B1F]">+234 803 456 7845</p>
              </div>
              {/* Pickup Details Content row-2 column-1 end*/}
              {/* Pickup Details Content row-2 column-2 start*/}
              <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px]  col-span-2 ">
                <p className=" leading-5 tracking-tighter">Contact Email:</p>
                <p className="text-[22px] leading-7 text-[#1C1B1F] break-all">Malibushdrack@gmail.com</p>
              </div>
              {/* Pickup Details Content row-2 column-2 end*/}
            </div>
            {/* Pickup Details Content row 2 end*/}
            {/* Pickup Details Content row-3 start*/}
            <div className="grid grid-cols-5 items-start gap-[20px] px-3.5 pb-2.5 text-[#49454F] w-full">
              {/* Pickup Details Content row-3 column-1 start*/}
              <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px]">
                <p className=" leading-5 tracking-tighter">Country:</p>
                <p className="text-[22px] leading-7 text-[#1C1B1F]">Turkey</p>
              </div>
              {/* Pickup Details Content row-3 column-1 end*/}
              {/* Pickup Details Content row-3 column-2 start*/}
              <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px]">
                <p className=" leading-5 tracking-tighter">State:</p>
                <p className="text-[22px] leading-7 text-[#1C1B1F]">Istanbul</p>
              </div>
              {/* Pickup Details Content row-3 column-2 end*/}
              {/* Pickup Details Content row-3 column-3 start*/}
              <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px]">
                <p className=" leading-5 tracking-tighter">City:</p>
                <p className="text-[22px] leading-7 text-[#1C1B1F]">Cyprusic</p>
              </div>
              {/* Pickup Details Content row-3 column-3 end*/}
              {/* Pickup Details Content row-3 column-4 start*/}
              <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px]">
                <p className=" leading-5 tracking-tighter">Zip/postal<br/>Code:</p>
                <p className="text-[22px] leading-7 text-[#1C1B1F]">98765</p>
              </div>
              {/* Pickup Details Content row-3 column-4 end*/}
            </div>
            {/* Pickup Details Content row-3 end*/}
            {/* Pickup Details Content row-4 start*/}
            <div className="flex items-start gap-[60px] px-3.5 pb-2.5 text-[#49454F] w-full">
              <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px] w-full ">
                <p className=" leading-5 tracking-tighter">Street Address:</p>
                <p className="text-[22px] leading-7 text-[#1C1B1F]">No, 1osolo way, ikeja road, behind scaint merry</p>
              </div>
            </div>
            {/* Pickup Details Content row-4 end*/}

          </div>
          {/* Pickup Details Content end*/}
        </div>
        {/* Pickup Details Container end*/}
      </div>
    </>
  );
}

function Item5_2() {
  return (    
  <div className="flex flex-col flex-1 items-start gap-[10px] w-full">
  {/* Item Container start*/}

  {/* Item Container end*/}
  </div>
  );
}

function ShippingDetails5() {
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

function BillingDetails5() {
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
            <p className=" leading-5 tracking-tighter">Phone Number:</p>
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

function PaymentInformation5() {
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
        {/* payment information Content row-2 start*/}
        <div className="flex items-start gap-y-[13px] px-3.5 pb-2.5 col-span-2">
          <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px] w-full col-span-2">
            <div className="flex gap-x-[10px] justify-center items-center">
              <IconCreateOrderWarning />
              <p className=" leading-5 tracking-tighter">Total Clearing Cost:</p>
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
        {/* payment information Content row-2 end*/}
      </div>
      {/* payment information Content end*/}
    </div>
  );
}

const ConfirmingOrderRequestAuto5 = () => {

  return (
    <div className="p-[30px] absolute w-full flex flex-col gap-[30px] items-start">
      <div className="px-[30px] py-5 border rounded-[20px] border-dashed flex items-start gap-[10px] self-stretch border-[#6750A4] w-full">
        <p className="text-[#6750A4] text-[28px] leading-9">
          Confirming Auto Import Order Request
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
        
        {/* Car1 start*/}
        <div className="flex items-center justify-center gap-[10px] w-full">
          <Collapse
            items={[{ key: '1', label: (<p className='text-[22px] text-[#49454F] !pl-3.5'>Car - <span className="text-[#6750A4]">#1</span></p>), children: <Item5_1 /> }]}
            expandIcon={({ isActive }) => isActive ? <IconExpand /> : <IconExpand />}
            expandIconPosition='end'
            className='w-full !bg-white !rounded-xl'
          />
          <Button type="link" className="!flex !items-center">
            <IconEdit />
          </Button>
        </div>
        {/* Car1 end*/}
        {/* Car2 start*/}
        <div className="flex items-center justify-center gap-[10px] w-full">
          <Collapse
            items={[{ key: '1', label: (<p className='text-[22px] text-[#49454F] !pl-3.5'>Car - <span className="text-[#6750A4]">#2</span></p>), children: <Item5_2 /> }]}
            expandIcon={({ isActive }) => isActive ? <IconExpand /> : <IconExpand />}
            expandIconPosition='end'
            className='w-full !bg-white !rounded-xl'
          />
          <Button type="link" className="!flex !items-center">
            <IconEdit />
          </Button>
        </div>
        {/* Car2 end*/}
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
        <Button  onClick={handleBack} className=" !flex !h-10 !py-2.5 !pr-6 !pl-4 !justify-center !items-center !gap-2 !border !rounded-[20px] !text-[#6750A4] !text-center">
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
//confirming auto 5 end

const renderChildComponent = () => {
  switch (currentChildId) {
    case 1:
      return <ConfirmingOrderRequestAuto1 />;
    case 2:
      return <ConfirmingOrderRequestAuto2 />;
    case 3:
      return <ConfirmingOrderRequestAuto3 />;
    case 4:
      return <ConfirmingOrderRequestAuto4 />;
    case 5:
      return <ConfirmingOrderRequestAuto5 />;
    default:
      return null;
  }
};

return (
  <div>
    {renderChildComponent()}
  </div>
); 

}