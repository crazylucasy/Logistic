"use client";

import React from "react";
import IconArrowCircleRight from "@/assets/arrowcircleright.svg";
import IconArrowCircleUp from "@/assets/arrowcircleup.svg";
import BtnBack from "../BtnBack"
import BtnDecline from "../BtnDecline"
import BtnConfirmation from "../BtnConfirmation"
import IconExpand from "@/assets/order_expanded.svg"
import { Collapse, Button } from "antd";
import IconBack from "@/assets/order_back.svg";
import IconNext from "@/assets/order_confirm.svg";
import IconCancel from "@/assets/order_cancel.svg";

export function OrderInformation() {
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
        <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px] col-span-2">
          <p className="text-[#49454F] leading-5 tracking-tighter">Service:</p>
          <p className="text-[22px] leading-7 text-[#1C1B1F]">Export</p>
        </div>
        {/* Order Informatin Content row-2 column-1 end*/}
        {/* Order Informatin Content row-2 column-2 start*/}
        <div className="flex flex-col justify-between gap-[5px] min-h-[73px]">
          <p className="text-[#49454F] leading-5 tracking-tighter">Order Request Date:</p>
          <p className="text-[22px] leading-7 text-[#1C1B1F]">10/12/2023</p>
        </div>
        {/* Order Informatin Content row-2 column-2 end*/}
        {/* Order Informatin Content row-2 column-3 start*/}
        <div className="flex flex-col justify-between gap-[5px] min-h-[73px]">
          <p className="text-[#49454F] leading-5 tracking-tighter">Order Request <br />Time:</p>
          <p className="text-[22px] leading-7 text-[#1C1B1F]">12:34pm</p>
        </div>
        {/* Order Informatin Content row-2 column-3 end*/}
      </div>
      {/* Order Informatin Content row 2 end*/}
    </div>
    {/* Order Informatin Content end*/}
  </div>
  );
}

export function PackageDetails() {
  return (
    <div className="flex flex-col flex-1 items-start gap-[10px] w-full">
      {/* Package Details Container start*/}
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
          <div className="flex py-2.5 px-3.5 items-start self-stretch gap-[10px] w-full">
            <div className="border-b border-[#21005D] border-dashed w-full">
            </div>
          </div>
          {/* hr end*/}
          {/* Package Details Content row 2 start*/}
          <div className="grid grid-cols-5 items-start px-3.5 pb-2.5 text-[#6750A4] w-full">
            {/* Package Details Content row-2 column-1 start*/}
            <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px] col-span-2">
              <p className=" leading-5 tracking-tighter">First Name:</p>
              <p className="text-[22px] leading-7 text-[#21005D]">Malibu</p>
            </div>
            {/* Package Details Content row-2 column-1 end*/}
            {/* Package Details Content row-2 column-2 start*/}
            <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px] col-span-2">
              <p className=" leading-5 tracking-tighter">Last Name:</p>
              <p className="text-[22px] leading-7 text-[#21005D]">SHedrack</p>
            </div>
            {/* Package Details Content row-2 column-2 end*/}
          </div>
          {/* Package Details Content row 2 end*/}
          {/* Package Details Content row-3 start*/}
          <div className="flex items-start px-3.5 pb-2.5 text-[#6750A4] w-full">
            <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px] w-full ">
              <p className=" leading-5 tracking-tighter">Street Address:</p>
              <p className="text-[22px] leading-7 text-[#21005D]">No, 1osolo way, ikeja road, behind scaint merry</p>
            </div>
          </div>
          {/* Package Details Content row-3 end*/}
          {/* Package Details Content row-4 start*/}
          <div className="grid grid-cols-5 items-start grid-5 px-3.5 pb-2.5 text-[#6750A4] w-full">
            {/* Package Details Content row-4 column-1 start*/}
            <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px] ">
              <p className=" leading-5 tracking-tighter">Country:</p>
              <p className="text-[22px] leading-7 text-[#21005D]">Turkey</p>
            </div>
            {/* Package Details Content row-4 column-1 end*/}
            {/* Package Details Content row-4 column-2 start*/}
            <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px] ">
              <p className=" leading-5 tracking-tighter">State:</p>
              <p className="text-[22px] leading-7 text-[#21005D]">Istanbul</p>
            </div>
            {/* Package Details Content row-4 column-2 end*/}
            {/* Package Details Content row-4 column-3 start*/}
            <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px] ">
              <p className=" leading-5 tracking-tighter">City:</p>
              <p className="text-[22px] leading-7 text-[#21005D]">Cyprusic</p>
            </div>
            {/* Package Details Content row-4 column-3 end*/}
            {/* Package Details Content row-4 column-4 start*/}
            <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px] ">
              <p className=" leading-5 tracking-tighter">Zip/postal <br/>Code:</p>
              <p className="text-[22px] leading-7 text-[#21005D]">98765</p>
            </div>
            {/* Package Details Content row-4 column-4 end*/}
          </div>
          {/* Package Details Content row-4 end*/}
        </div>
        {/* Package Details Content end*/}
      </div>
      {/* Package Details Container end*/}
    </div>
  );
}

export function ShippingDetails() {
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

export function BillingDetails() {
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
            <p className=" leading-5 tracking-tighter">Contact <br />Number:</p>
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

export default function ExportOrderRequest() {

  return (
    <div className="p-[30px] absolute w-full flex flex-col gap-[30px] items-start">
      <div className="px-[30px] py-5 border rounded-[20px] border-dashed flex items-start gap-[10px] self-stretch border-[#6750A4] w-full">
        <p className="text-[#6750A4] text-[28px] leading-9">Export Order Request</p>
      </div>
      {/*  Order ID start*/}
      <div className="py-5 px-3.5 border border-[#CAC4D0] rounded-[20px] text-center text-[28px] leading-9 w-full">
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
        {/* Order Information Container start*/}
        <Collapse
          items={[{ key: '1', label: (<p className='text-[22px] text-[#49454F] !pl-3.5'>Order Information</p>), children: <OrderInformation /> }]}
          expandIcon={({ isActive }) => isActive ? <IconExpand /> : <IconExpand />}
          expandIconPosition='end'
          className='w-full !bg-white !rounded-xl'
        />
        {/* Order Information Container end*/}
      </div>
      {/* Order Information end*/}

      {/* Package Details start*/}
      <div className="flex flex-col flex-1 items-start gap-[10px] w-full">
        {/* Arrow-Circle-right start*/}
        <div className="flex flex-row gap-[10px] items-center">
          <span><IconArrowCircleRight /></span>
          <span className="text-3.5 text-[#1D192B] text-sm font-medium leading-5 tracking-wide">Package Details</span>
        </div>
        {/* Arrow-Circle-right end*/}
        {/* Order Information Container start*/}
        <Collapse
          items={[{ key: '1', label: (<p className='text-[22px] text-[#49454F] !pl-3.5'>Package Origin</p>), children: <PackageDetails /> }]}
          expandIcon={({ isActive }) => isActive ? <IconExpand /> : <IconExpand />}
          expandIconPosition='end'
          className='w-full !bg-white !rounded-xl'
        />
        {/* Order Information Container end*/}
      </div>
      {/* Package Details end*/}

      {/* Shipping Details start*/}
      <div className="flex flex-col flex-1 items-start gap-[10px] w-full">
        {/* Arrow-Circle-right start*/}
        <div className="flex flex-row gap-[10px] items-center">
          <span><IconArrowCircleRight /></span>
          <span className="text-3.5 text-[#1D192B] text-sm font-medium leading-5 tracking-wide">Shipping Details</span>
        </div>
        {/* Arrow-Circle-right end*/}
        {/* Order Information Container start*/}
        <Collapse
          items={[{ key: '1', label: (<p className='text-[22px] text-[#49454F] !pl-3.5'>Destination/Shipping Address</p>), children: <ShippingDetails /> }]}
          expandIcon={({ isActive }) => isActive ? <IconExpand /> : <IconExpand />}
          expandIconPosition='end'
          className='w-full !bg-white !rounded-xl'
        />
        {/* Order Information Container end*/}
      </div>
      {/* Shipping Details end*/}

      {/* Billing details start*/}
      <div className="flex flex-col flex-1 items-start gap-[10px] w-full">
        {/* Arrow-Circle-right start*/}
        <div className="flex flex-row gap-[10px] items-center">
          <span><IconArrowCircleRight /></span>
          <span className="text-3.5 text-[#1D192B] text-sm font-medium leading-5 tracking-wide">Billing Details</span>
        </div>
        {/* Arrow-Circle-right end*/}
        {/* Order Information Container start*/}
        <Collapse
          items={[{ key: '1', label: (<p className='text-[22px] text-[#49454F] !pl-3.5'>Billing Address</p>), children: <BillingDetails /> }]}
          expandIcon={({ isActive }) => isActive ? <IconExpand /> : <IconExpand />}
          expandIconPosition='end'
          className='w-full !bg-white !rounded-xl'
        />
        {/* Order Information Container end*/}
      </div>
      {/* Billing details end*/}
      {/* btn-group start */}
      <div className="btn-group flex flex-row gap-[10px]"> 
        <Button className=" !flex !h-10 !py-2.5 !pr-6 !pl-4 !justify-center !items-center !gap-2 !border !rounded-[20px] !text-[#6750A4] !text-center">
          <IconBack />
          <span className="text-sm font-medium leading-5 tracking-wide">Back</span>
        </Button>
        <Button className=" !flex !h-10 !py-2.5 !pr-6 !pl-4 !justify-center !items-center !gap-2 !rounded-[20px] !text-[#ffffff] !bg-[#B3261E] !text-center">
          <IconCancel />
          <span className="text-sm font-medium leading-5 tracking-wide">Decline Request</span>
        </Button>
        <Button className=" !flex !h-10 !py-2.5 !pr-6 !pl-4 !justify-center !items-center !gap-2 !rounded-[20px] !text-[#ffffff]  !bg-[#6750A4] !text-center">
          <IconNext />
          <span className="text-sm font-medium leading-5 tracking-wide">Proceed comfirmation</span>
        </Button>
      </div>
      {/* btn-group end */}
    </div>
  );
}