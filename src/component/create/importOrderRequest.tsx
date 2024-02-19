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


export function PackageDetails() {
  return (
  <div className="flex flex-col flex-1 items-start gap-[10px] w-full">
    {/* Package Details Container start*/}
    <div className="py-2.5 px-3.5 w-full flex items-start gap-[10px] flex-col text-[#49454F]">
      {/* Package Details Content start*/}
      <div className="flex flex-col items-start gap-[10px] self-stretch">
        {/* Package Details Content row 1 start*/}
        <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px] px-3.5 pb-2.5 w-full">
          <div className="text-[#49454F] leading-5 tracking-tighter">
            <p>Origin:</p>
          </div>
          <div>
            <p className="text-[22px] leading-7 break-all">United States (Houston - warehouse)</p>
          </div>
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
        <div className="flex items-start px-3.5 pb-2.5 text-[#6750A4] w-full">
          <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px] w-full ">
            <p className=" leading-5 tracking-tighter">Street Address:</p>
            <p className="text-[22px] leading-7 text-[#21005D]">No, 1osolo way, ikeja road, behind scaint merry</p>
          </div>
        </div>
        {/* Package Details Content row-3 end*/}
        {/* Package Details Content row-4 start*/}
        <div className="grid grid-cols-5 items-start gap-[20px] px-3.5 pb-2.5 text-[#6750A4] w-full">
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
            <p className=" leading-5 tracking-tighter">Zip/postal Code:</p>
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
    {/* shipping Details Container start*/}
    <div className="py-2.5 px-3.5 w-full flex items-start gap-[10px] flex-col text-[#49454F]">
      {/* shipping Details Content start*/}
      <div className="flex flex-col items-start gap-[10px] self-stretch">
        {/* shipping Details Content row 1 start*/}
        <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px] px-3.5 pb-2.5 w-full">
          <p className="text-[#49454F] leading-5 tracking-tighter">Destination:</p>
          <p className="text-[22px] leading-7 break-all">United States (Houston - warehouse)</p>
        </div>
        {/* shipping Details Content row 1 end*/}

        {/* hr start*/}
        <div className="flex flex-row py-2.5 px-3.5 items-center self-stretch gap-[10px] w-full">
          <p className="text-[22px] leading-7 text-[#21005D] min-w-max">Destination address</p>
          <div className="border-b border-[#21005D] border-dashed w-full">
          </div>
        </div>
        {/* hr end*/}

        {/* shipping Details Content row 2 start*/}
        <div className="grid grid-cols-5 items-start gap-5 px-3.5 pb-2.5 text-[#6750A4] w-full"> 
          {/* shipping Details Content row-2 column-1 start*/}
          <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px] col-span-2 ">
            <p className=" leading-5 tracking-tighter">First Name:</p>
            <p className="text-[22px] leading-7 text-[#21005D]">Malibu</p>
          </div>
          {/* shipping Details Content row-2 column-1 end*/}
          {/* shipping Details Content row-2 column-2 start*/}
          <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px] col-span-2 ">
            <p className=" leading-5 tracking-tighter">Last Name:</p>
            <p className="text-[22px] leading-7 text-[#21005D]">SHedrack</p>
          </div>
          {/* shipping Details Content row-2 column-2 end*/}
        </div>
        {/* shipping Details Content row 2 end*/}
        {/* shipping Details Content row-3 start*/}
        <div className="flex items-start px-3.5 pb-2.5 text-[#6750A4] w-full">
          <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px] w-full ">
            <p className=" leading-5 tracking-tighter">Street Address:</p>
            <p className="text-[22px] leading-7 text-[#21005D]">No, 1osolo way, ikeja road, behind scaint merry</p>
          </div>
        </div>
        {/* shipping Details Content row-3 end*/}
        {/* shipping Details Content row-4 start*/}
        <div className="grid grid-cols-5 items-start gap-5 px-3.5 pb-2.5 text-[#6750A4] w-full">
          {/* shipping Details Content row-4 column-1 start*/}
          <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px] ">
            <p className=" leading-5 tracking-tighter">Country:</p>
            <p className="text-[22px] leading-7 text-[#21005D]">Turkey</p>
          </div>
          {/* shipping Details Content row-4 column-1 end*/}
          {/* shipping Details Content row-4 column-2 start*/}
          <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px] ">
            <p className=" leading-5 tracking-tighter">State:</p>
            <p className="text-[22px] leading-7 text-[#21005D]">Istanbul</p>
          </div>
          {/* shipping Details Content row-4 column-2 end*/}
          {/* shipping Details Content row-4 column-3 start*/}
          <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px]  ">
            <p className=" leading-5 tracking-tighter">City:</p>
            <p className="text-[22px] leading-7 text-[#21005D]">Cyprusic</p>
          </div>
          {/* shipping Details Content row-4 column-3 end*/}
          {/* shipping Details Content row-4 column-4 start*/}
          <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px] ">
            <p className=" leading-5 tracking-tighter">Zip/postal Code:</p>
            <p className="text-[22px] leading-7 text-[#21005D]">98765</p>
          </div>
          {/* shipping Details Content row-4 column-4 end*/}
        </div>
        {/* shipping Details Content row-4 end*/}
      </div>
      {/* shipping Details Content end*/}
    </div>
    {/* shipping Details Container end*/}
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
        <div className="grid grid-cols-5 items-start gap-5 px-3.5 pb-2.5 text-[#49454F] w-full">
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
        <div className="grid grid-cols-5 items-start gap-5 px-3.5 pb-2.5 text-[#49454F] w-full">
          {/* Billing details Content row-2 column-1 start*/}
          <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px] col-span-2 ">
            <p className=" leading-5 tracking-tighter">Contact <br/>Number:</p>
            <p className="text-[22px] leading-7 text-[#1C1B1F]">+234 803 456 7845</p>
          </div>
          {/* Billing details Content row-2 column-1 end*/}
          {/* Billing details Content row-2 column-2 start*/}
          <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px] col-span-2 ">
            <p className=" leading-5 tracking-tighter">Email:</p>
            <p className="text-[22px] leading-7 text-[#1C1B1F] break-all">Malibushdrack@gmail.com</p>
          </div>
          {/* Billing details Content row-2 column-2 end*/}
        </div>
        {/* Billing details Content row 2 end*/}
        {/* Billing details Content row-3 start*/}
        <div className="flex items-start gap-5 px-3.5 pb-2.5 text-[#49454F] w-full">
          <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px] w-full ">
            <p className=" leading-5 tracking-tighter">Address:</p>
            <p className="text-[22px] leading-7 text-[#1C1B1F]">No, 1osolo way, ikeja road, behind scaint merry</p>
          </div>
        </div>
        {/* Billing details Content row-3 end*/}
        {/* Billing details Content row-4 start*/}
        <div className="grid grid-cols-5 items-start gap-[20px] px-3.5 pb-2.5 text-[#49454F] w-full">
          {/* Billing details Content row-4 column-1 start*/}
          <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px]">
            <p className=" leading-5 tracking-tighter">Country:</p>
            <p className="text-[22px] leading-7 text-[#1C1B1F]">Turkey</p>
          </div>
          {/* Billing details Content row-4 column-1 end*/}
          {/* Billing details Content row-4 column-2 start*/}
          <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px]">
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
            <p className=" leading-5 tracking-tighter">Zip/postal Code:</p>
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

export default function ImportOrderRequest() {

  return (
    <div className="p-[30px] absolute w-full flex flex-col gap-[30px] items-start">
      <div className="px-[30px] py-5 border rounded-[20px] border-dashed flex items-start gap-[10px] self-stretch border-[#6750A4] w-full">
        <p className="text-[#6750A4] text-[28px] leading-9">Import Order Request</p>
      </div>
      {/* <div className="flex items-start gap-[39px]">
        <div className="flex items-start gap-2.5 p-2.5 rounded-[20px] bg-[#CAC4D0]">
          <p className="text-[#fff] text-[22px] font-bold leading-7">1</p>
        </div>
      </div> */}
      {/*  Order ID start*/}
      <div className="py-5 px-3.5 border border-[#CAC4D0] rounded-[20px] text-center text-[28px] leading-9 w-full">
        <span>Order ID:</span>
        <span className="font-bold">OD78667</span>
      </div>
      {/*  Order ID end*/}

      {/* Package Details start*/}  
      {/* Arrow-Circle-right start*/}
      <div className="flex flex-row gap-[10px] items-center">
        <span><IconArrowCircleRight /></span>
        <span className="text-3.5 text-[#1D192B] text-sm font-medium leading-5 tracking-wide">Package Details</span>
      </div>
      {/* Arrow-Circle-right end*/}
      <Collapse
          items={[{ key: '1', label: (<p className='text-[22px] text-[#49454F] !pl-3.5'>Package Origin</p>), children: <PackageDetails /> }]}
          expandIcon={({ isActive }) => isActive ? <IconExpand /> : <IconExpand />}
          expandIconPosition='end'
          className='w-full !bg-white !rounded-xl'
        />
      {/* Package Details end*/}

      {/* shipping Details start*/}
      {/* Arrow-Circle-right start*/}
      <div className="flex flex-row gap-[10px] items-center">
        <span><IconArrowCircleRight /></span>
        <span className="text-3.5 text-[#1D192B] text-sm font-medium leading-5 tracking-wide">shipping Details</span>
      </div>
      {/* Arrow-Circle-right end*/}
      <Collapse
          items={[{ key: '1', label: (<p className='text-[22px] text-[#49454F] !pl-3.5'>Destination/Shipping Address</p>), children: <ShippingDetails /> }]}
          expandIcon={({ isActive }) => isActive ? <IconExpand /> : <IconExpand />}
          expandIconPosition='end'
          className='w-full !bg-white !rounded-xl'
      />
      {/* shipping Details end*/}

      {/* Billing details start*/}
      {/* Arrow-Circle-right start*/}
      <div className="flex flex-row gap-[10px] items-center">
        <span><IconArrowCircleRight /></span>
        <span className="text-3.5 text-[#1D192B] text-sm font-medium leading-5 tracking-wide">Billing details</span>
      </div>
      {/* Arrow-Circle-right end*/}
      <Collapse
          items={[{ key: '1', label: (<p className='text-[22px] text-[#49454F] !pl-3.5'>Billing Details</p>), children: <BillingDetails /> }]}
          expandIcon={({ isActive }) => isActive ? <IconExpand /> : <IconExpand />}
          expandIconPosition='end'
          className='w-full !bg-white !rounded-xl'
      />
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