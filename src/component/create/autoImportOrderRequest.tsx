"use client";

import React from "react";
import IconArrowCircleRight from "@/assets/arrowcircleright.svg";
import IconArrowCircleUp from "@/assets/arrowcircleup.svg";
import IconCreateOrderSelector from "@/assets/creat_eorder_selector.svg";
import CarImage from "../../assets/car.jpg";
import IconBack from "@/assets/order_back.svg";
import IconNext from "@/assets/order_confirm.svg";
import IconCancel from "@/assets/order_cancel.svg";
import BtnDecline from "../BtnDecline";
import BtnConfirmation from "../BtnConfirmation";
import IconExpand from "@/assets/order_expanded.svg"
import { Collapse, Button } from "antd";

export function PackageOrigin() {
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
  );
}

export function Item1() {
  return (
    <>
      <div className="py-2.5 px-3.5 w-full flex items-start gap-[10px] flex-col text-[#49454F]">
        {/* Car Arrow-Circle-Up start*/}
        {/* <div className="flex pr-1.5 justify-between items-center self-stretch w-full">
          <div className="text-[22px] leading-7 pl-3.5 break-all">
            <span className="">Car</span>
            <span> - </span>
            <span className="text-[#6750A4]">#1</span>
          </div>
          <span className="p-3"><IconArrowCircleUp /></span>
        </div> */}
        {/* Car Arrow-Circle-Up end*/}
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

export function Item2() {
  return (
    <>   
    </>
  );
}

export function ShippingDetails() {
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
            <p className=" leading-5 tracking-tighter">Contact <br />Number:</p>
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

export function BillingDetails() {
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
            <p className=" leading-5 tracking-tighter">Contact <br />Number:</p>
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

export default function AutoImportOrderRequest() {

  return (
    <div className="p-[30px] absolute w-full flex flex-col gap-[30px] items-start">
      <div className="px-[30px] py-5 border rounded-[20px] border-dashed flex items-start gap-[10px] self-stretch border-[#6750A4] w-full">
        <p className="text-[#6750A4] text-[28px] leading-9">Auto Import Order Request</p>
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
      <div className="flex flex-col flex-1 items-start gap-[10px] w-full">
        {/* Arrow-Circle-right start*/}
        <div className="flex flex-row gap-[10px] items-center">
          <span><IconArrowCircleRight /></span>
          <span className="text-3.5 text-[#1D192B] text-sm font-medium leading-5 tracking-wide">Confirm Your Package Details</span>
        </div>
        {/* Arrow-Circle-right end*/}
        {/* Package Details Container start*/}
        <Collapse
          items={[{ key: '1', label: (<p className='text-[22px] text-[#49454F] !pl-3.5'>Package Origin</p>), children: <PackageOrigin /> }]}
          expandIcon={({ isActive }) => isActive ? <IconExpand /> : <IconExpand />}
          expandIconPosition='end'
          className='w-full !bg-white !rounded-xl'
        />
        {/* Package Details Container end*/}
        {/* hr start */}
        <div className="flex w-full">
          <div className="border-b border-dashed mx-5 border-[#21005D] w-full "></div>
        </div>
        {/* hr end */}


        {/* Car1 start*/}
        <div className="flex flex-col flex-1 items-start gap-[10px] w-full">
          {/* Car Container start*/}
          <Collapse
            items={[{ key: '1', label: (<p className='text-[22px] text-[#49454F] !pl-3.5'>Car - #1</p>), children: <Item1 /> }]}
            expandIcon={({ isActive }) => isActive ? <IconExpand /> : <IconExpand />}
            expandIconPosition='end'
            className='w-full !bg-white !rounded-xl'
          />
          {/* Car Container end*/}
        </div>
        {/* Car1 end*/}
        {/* Car2 start*/}
        <div className="flex flex-col flex-1 items-start gap-[10px] w-full">
          {/* Car Container start*/}
          <Collapse
            items={[{ key: '1', label: (<p className='text-[22px] text-[#49454F] leading-7 !pl-3.5'>Car - <span className="text-[#6750A4]">#2</span></p>), children: <Item2 /> }]}
            expandIcon={({ isActive }) => isActive ? <IconExpand /> : <IconExpand />}
            expandIconPosition='end'
            className='w-full !bg-white !rounded-xl'
          />
          {/* Car Container end*/}
        </div>
        {/* Car2 end*/}
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
        {/* Shipping Details Container start*/}
        <Collapse
            items={[{ key: '1', label: (<p className='text-[22px] text-[#49454F] leading-7 !pl-3.5'>Destination/Shipping Address</p>), children: <ShippingDetails /> }]}
            expandIcon={({ isActive }) => isActive ? <IconExpand /> : <IconExpand />}
            expandIconPosition='end'
            className='w-full !bg-white !rounded-xl'
        />

        {/* Shipping Details Container end*/}
      </div>
      {/* Shipping Details end*/}

      {/* Billing details start*/}
      <div className="flex flex-col flex-1 items-start gap-[10px] w-full">
        {/* Arrow-Circle-right start*/}
        <div className="flex flex-row gap-[10px] items-center">
          <span><IconArrowCircleRight /></span>
          <span className="text-3.5 text-[#1D192B] text-sm font-medium leading-5 tracking-wide">Billing details</span>
        </div>
        {/* Arrow-Circle-right end*/}
        {/* Billing details Container start*/}
        <Collapse
          items={[{ key: '1', label: (<p className='text-[22px] text-[#49454F] leading-7 !pl-3.5'>Billing Address</p>), children: <BillingDetails /> }]}
          expandIcon={({ isActive }) => isActive ? <IconExpand /> : <IconExpand />}
          expandIconPosition='end'
          className='w-full !bg-white !rounded-xl'
        />
        {/* Billing details Container end*/}
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