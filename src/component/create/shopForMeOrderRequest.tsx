"use client";

import React from "react";
import { Button } from "antd";
import type from "antd";
import IconArrowCircleRight from "@/assets/arrowcircleright.svg";
import IconArrowCircleUp from "@/assets/arrowcircleup.svg";
import IconChange from "@/assets/changecurrency.svg";
import BtnBack from "../BtnBack";
import BtnDecline from "../BtnDecline";
import BtnConfirmation from "../BtnConfirmation";
import Image from "next/image";
import IconBack from "@/assets/order_back.svg";
import IconNext from "@/assets/order_confirm.svg";
import IconCancel from "@/assets/order_cancel.svg";
import IconExpand from "@/assets/order_expanded.svg"
import { Collapse } from "antd";
import Computer from "@/assets/computer.jpg";

export function PackageOrigin() {
  return (
    <div className="py-2.5 px-3.5 w-full flex items-start gap-[10px] flex-col text-[#49454F]">
    {/* Package Details Content start*/}
      <div className="flex flex-col items-start gap-[10px] self-stretch">
        {/* Package Details Content row 1 start*/}
        <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px] px-3.5 pb-2.5 w-full">
          <p className="text-[#49454F] leading-5 tracking-tighter">Country of<br/> Purchase:</p>
          <p className="text-[22px] leading-7 break-all">United States (Houston - warehouse)</p>
        </div>
        {/* Package Details Content row 1 end*/}

        {/* hr start*/}
        <div className="flex flex-row items-center py-2.5 px-3.5 self-stretch gap-[10px] w-full">
          <p className="text-[22px] leading-7 text-[#21005D] min-w-max">Country of purchase address</p>
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

export function Item1() {
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
                <p className=" leading-5 tracking-tighter">Store:</p>
                <p className="text-[22px] leading-7 text-[#1C1B1F]">Amazon</p>
              </div>
              {/* Item Content row-1 column-1 end*/}
              {/* Item Content row-1 column-2 start*/}
              <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px] col-span-2 ">
                <p className=" leading-5 tracking-tighter">Urgent <br />Purchase:</p>
                <p className="text-[22px] leading-7 text-[#1C1B1F]">No</p>
              </div>
              {/* Item Content row-1 column-2 end*/}
            </div>
            {/* Item Content row 1 end*/}
            {/* Item Content row 2 start*/}
            <div className="flex flex-col w-full justify-between items-start gap-[5px] min-h-[73px] px-3.5 pb-2.5">
              <p className=" leading-5 tracking-tighter">Item URL:</p>
              <p className="text-[22px] leading-7 text-[#B3261E]">https://jjnkkukja.jhgyjayjdjjhcjc</p>
            </div>
            {/* Item Content row 2 end*/}
            {/* Item Content row 3 start*/}
            <div className="grid grid-cols-5 w-full items-start gap-5 px-3.5 pb-2.5 text-[#1C1B1F]">
              {/* Item Content row-3 column-1 start*/}
              <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px]  col-span-2">
                <p className=" leading-5 tracking-tighter">Item Name:</p>
                <p className="text-[22px] leading-7 text-[#1C1B1F]">Designer Bags</p>
              </div>
              {/* Item Content row-3 column-1 end*/}
              {/* Item Content row-3 column-2 start*/}
              <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px] ">
                  <p className=" leading-5 tracking-tighter">Item Cost from<br /> Store:</p>
                  <p className="text-[22px] leading-7 text-[#1C1B1F]">$45.00</p>
                </div>
                {/* Item Content row-3 column-2 end*/}
                {/* Item Content row-3 column-3 start*/}
                <div className="flex flex-col justify-between items-start gap-[20px] min-h-[73px] ">
                  <p className=" leading-5 tracking-tighter">Quantity:</p>
                  <p className="text-[22px] leading-7 text-[#1C1B1F]">4</p>
                </div>
                {/* Item Content row-3 column-3 end*/}
            </div>
            {/* Item Content row 3 end*/}
            {/* Item Content row-4 start*/}
            <div className="grid grid-cols-5 w-full items-start gap-[20px] px-3.5 pb-2.5 text-[#49454F]">
              {/* Item Content row-4 column-1 start*/}
              <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px]">
                <p className=" leading-5 tracking-tighter">Weight:</p>
                <p className="text-[22px] leading-7 text-[#1C1B1F]">67kg</p>
              </div>
              {/* Item Content row-4 column-1 end*/}
              {/* Item Content row-4 column-2 start*/}
              <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px]">
                <p className=" leading-5 tracking-tighter">Height:</p>
                <p className="text-[22px] leading-7 text-[#1C1B1F]">5 inches</p>
              </div>
              {/* Item Content row-4 column-2 end*/}
              {/* Item Content row-4 column-3 start*/}
              <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px]">
                <p className=" leading-5 tracking-tighter">Length:</p>
                <p className="text-[22px] leading-7 text-[#1C1B1F]">5 inches</p>
              </div>
              {/* Item Content row-4 column-3 end*/}
              {/* Item Content row-4 column-4 start*/}
              <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px]">
                <p className=" leading-5 tracking-tighter">Width:</p>
                <p className="text-[22px] leading-7 text-[#1C1B1F]">5 inches</p>
              </div>
              {/* Item Content row-4 column-4 end*/}
            </div>
            {/* Item Content row-4 end*/}

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
          <div className="flex flex-col align-items w-full">
            {/* Item Content row-8 start */}
            <div className="flex flex-row items-center py-2.5 px-3.5 self-stretch gap-[10px] w-full">
              <p className="text-[22px] leading-7 text-[#21005D] min-w-max">Country of purchase address</p>
              <div className="border-b border-[#21005D] border-dashed w-full text-[#21005D]"></div>
              <div className="flex flex-row items-center gap-[20px]">
                <div className="flex flex-row gap-[5px] items-center min-w-max">
                  <span>Default Currency:</span>
                  <span>USD</span>
                </div>
                <div>
                <Button className="btnBack !flex !h-10 !py-2.5 !pr-6 !pl-4 !justify-center !items-center !gap-2 !border !rounded-[20px] !text-[#6750A4] !text-center" > 
                  <IconChange />
                  <span className="text-sm font-medium leading-5 tracking-wide text-[#6750A4] min-w-max">Change currency</span>
                </Button>
                </div>
              </div>
            </div>
            {/* Item Content row-8 end*/}
            {/* Item Content row-9 start*/}
            <div className="grid grid-cols-5 w-full items-start gap-[20px] px-3.5 pb-2.5 text-[#6750A4]">
              {/* Item Content row-9 column-1 start*/}
              <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px] col-span-2 ">
                <p className=" leading-5 tracking-tighter">Urgent<br/> purchase fee:</p>
                <p className="text-[22px] leading-7 text-[#21005D]">$0.00</p>
              </div>
              {/* Item Content row-9 column-1 end*/}
              {/* Item Content row-9 column-2 start*/}
              <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px] col-span-2 ">
                <p className=" leading-5 tracking-tighter">Processing<br/> Fee:</p>
                <p className="text-[22px] leading-7 text-[#21005D]">$87,000.00</p>
              </div>
              {/* Item Content row-9 column-2 end*/}
            </div>
            {/* Item Content row-9 end*/}
            {/* Item Content row-10 start*/}
            <div className="grid grid-cols-5 w-full items-start gap-[20px] px-3.5 pb-2.5 text-[#6750A4]">
              {/* Item Content row-10 column-1 start*/}
              <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px]  col-span-2 ">
                <p className=" leading-5 tracking-tighter">Shop For Me<br /> Cost:</p>
                <p className="text-[22px] leading-7 text-[#21005D]">$87,000.00</p>
              </div>
              {/* Item Content row-10 column-1 end*/}
            </div>
            {/* Item Content row-10 end*/}
          </div>

        </div>
        {/* Item Content end*/}
      </div>
      {/* Item Container end*/}
    </div>
  );
}

export function Item2() {
  return (    
  <div className="flex flex-col flex-1 items-start gap-[10px] w-full">
  {/* Item Container start*/}

  {/* Item Container end*/}
  </div>
  );
}

export function ShippingDetails() {
  return (
    <div className="py-2.5 px-3.5 w-full flex items-start gap-[10px] flex-col text-[#49454F]">
      {/* Shipping Details Content start*/}
      <div className="flex flex-col items-start gap-[10px] self-stretch">
        {/* Shipping Details Content row 1 start*/}
        <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px] px-3.5 pb-2.5 w-full">
          <p className="text-[#49454F] leading-5 tracking-tighter">Destination:</p>
          <p className="text-[22px] leading-7 break-all">United States (Houston - warehouse)</p>
        </div>
        {/* Shipping Details Content row 1 end*/}

        {/* hr start*/}
        <div className="flex flex-row items-center py-2.5 px-3.5 self-stretch gap-[10px] w-full">
          <p className="text-[22px] leading-7 text-[#21005D] min-w-max">Destination address</p>
          <div className="border-b border-[#21005D] border-dashed w-full">
          </div>
        </div>
        {/* hr end*/}

        {/* Shipping Details Content row 2 start*/}
        <div className="grid grid-cols-5 items-start gap-5 px-3.5 pb-2.5 text-[#6750A4] w-full"> 
          {/* Shipping Details Content row-2 column-1 start*/}
          <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px] col-span-2 ">
            <p className=" leading-5 tracking-tighter">First Name:</p>
            <p className="text-[22px] leading-7 text-[#21005D]">Malibu</p>
          </div>
          {/* Shipping Details Content row-2 column-1 end*/}
          {/* Shipping Details Content row-2 column-2 start*/}
          <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px] col-span-2 ">
            <p className=" leading-5 tracking-tighter">Last Name:</p>
            <p className="text-[22px] leading-7 text-[#21005D]">SHedrack</p>
          </div>
          {/* Shipping Details Content row-2 column-2 end*/}
        </div>
        {/* Shipping Details Content row 2 end*/}
        {/* Shipping Details Content row-3 start*/}
        <div className="flex items-start gap-5 px-3.5 pb-2.5 text-[#6750A4] w-full">
          <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px] w-full ">
            <p className=" leading-5 tracking-tighter">Street Address:</p>
            <p className="text-[22px] leading-7 text-[#21005D]">No, 1osolo way, ikeja road, behind scaint merry</p>
          </div>
        </div>
        {/* Shipping Details Content row-3 end*/}
        {/* Shipping Details Content row-4 start*/}
        <div className="grid grid-cols-5 items-start gap-[20px] px-3.5 pb-2.5 text-[#6750A4] w-full">
          {/* Shipping Details Content row-4 column-1 start*/}
          <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px] ">
            <p className=" leading-5 tracking-tighter">Country:</p>
            <p className="text-[22px] leading-7 text-[#21005D]">Turkey</p>
          </div>
          {/* Shipping Details Content row-4 column-1 end*/}
          {/* Shipping Details Content row-4 column-2 start*/}
          <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px] ">
            <p className=" leading-5 tracking-tighter">State:</p>
            <p className="text-[22px] leading-7 text-[#21005D]">Istanbul</p>
          </div>
          {/* Shipping Details Content row-4 column-2 end*/}
          {/* Shipping Details Content row-4 column-3 start*/}
          <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px] ">
            <p className=" leading-5 tracking-tighter">City:</p>
            <p className="text-[22px] leading-7 text-[#21005D]">Cyprusic</p>
          </div>
          {/* Shipping Details Content row-4 column-3 end*/}
          {/* Shipping Details Content row-4 column-4 start*/}
          <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px] ">
            <p className=" leading-5 tracking-tighter">Zip/postal<br /> Code:</p>
            <p className="text-[22px] leading-7 text-[#21005D]">98765</p>
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

export function PaymentInformation() {
  return (
    <div className="py-2.5 px-3.5 w-full flex items-start gap-[10px] flex-col text-[#49454F]">
      {/* Billing details Content start*/}
      <div className="flex flex-col items-start gap-[10px] self-stretch">
        {/* Billing details Content row-1 start*/}
        <div className="flex items-start gap-5 px-3.5 pb-2.5">
          <div className="flex flex-col justify-between items-start gap-[5px] min-h-[73px] w-full ">
            <p className=" leading-5 tracking-tighter">Total Estimated<br /> Shop For Me Cost:</p>
            <p className="text-[22px] leading-7 text-[#1C1B1F]">$234,000.00</p>
          </div>
        </div>
        {/* Billing details Content row-1 end*/}
      </div>
      {/* Billing details Content end*/}
    </div>
  );
}

export default function ShopForMeOrderRequest() {

  return (
    <div className="p-[30px] absolute w-full flex flex-col gap-[30px] items-start">
      <div className="px-[30px] py-5 border rounded-[20px] border-dashed flex items-start gap-[10px] self-stretch border-[#CAC4D0] w-full">
        <p className="text-[#6750A4] text-[28px] leading-9">Shop For Me Order Request</p>
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

      {/* Package Origin start*/}
      <div className="flex flex-col flex-1 items-start gap-[10px] w-full">
        {/* Arrow-Circle-right start*/}
        <div className="flex flex-row gap-[10px] items-center">
          <span><IconArrowCircleRight /></span>
          <span className="text-3.5 text-[#1D192B] text-sm font-medium leading-5 tracking-wide">Confirm that the items below are the items in your package</span>
        </div>
        {/* Arrow-Circle-right end*/}
        {/* Package Origin Container start*/}
        <Collapse
          items={[{ key: '1', label: (<p className='text-[22px] text-[#49454F] !pl-3.5'>Package Origin</p>), children: <PackageOrigin /> }]}
          expandIcon={({ isActive }) => isActive ? <IconExpand /> : <IconExpand />}
          expandIconPosition='end'
          className='w-full !bg-white !rounded-xl'
        />
        {/* Package Origin Container end*/}
        {/* hr start */}
        <div className="flex w-full">
          <div className="border-b border-dashed mx-5 border-[#21005D] w-full "></div>
        </div>
        {/* hr end */}
        {/* Item1 start*/}
        <Collapse
          items={[{ key: '1', label: (<p className='text-[22px] text-[#49454F] !pl-3.5'>Item - #1</p>), children: <Item1 /> }]}
          expandIcon={({ isActive }) => isActive ? <IconExpand /> : <IconExpand />}
          expandIconPosition='end'
          className='w-full !bg-white !rounded-xl'
        />
        {/* Item1 end*/}
        {/* Item2 start*/}
        <Collapse
          items={[{ key: '1', label: (<p className='text-[22px] text-[#49454F] !pl-3.5'>Item - #2</p>), children: <Item2 /> }]}
          expandIcon={({ isActive }) => isActive ? <IconExpand /> : <IconExpand />}
          expandIconPosition='end'
          className='w-full !bg-white !rounded-xl'
        />
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
        <Collapse
          items={[{ key: '1', label: (<p className='text-[22px] text-[#49454F] !pl-3.5'>Destination/Shipping Address</p>), children: <ShippingDetails /> }]}
          expandIcon={({ isActive }) => isActive ? <IconExpand /> : <IconExpand />}
          expandIconPosition='end'
          className='w-full !bg-white !rounded-xl'
        />
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
        <Collapse
          items={[{ key: '1', label: (<p className='text-[22px] text-[#49454F] leading-7 !pl-3.5'>Billing Address</p>), children: <BillingDetails /> }]}
          expandIcon={({ isActive }) => isActive ? <IconExpand /> : <IconExpand />}
          expandIconPosition='end'
          className='w-full !bg-white !rounded-xl'
        />
        {/* Billing details Container end*/}
      </div>
      {/* Billing details end*/}
      {/* Payments Information start */}
      <div className="flex flex-col flex-1 items-start gap-[10px] w-full">
        {/* Payments Information Container start*/}
        <Collapse
          items={[{ key: '1', label: (<p className='text-[22px] text-[#49454F] leading-7 !pl-3.5'>Payment Information</p>), children: <PaymentInformation /> }]}
          expandIcon={({ isActive }) => isActive ? <IconExpand /> : <IconExpand />}
          expandIconPosition='end'
          className='w-full !bg-white !rounded-xl'
        />
        {/* Payments Information Container end*/}
      </div>
      {/* Payments Information end */}
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