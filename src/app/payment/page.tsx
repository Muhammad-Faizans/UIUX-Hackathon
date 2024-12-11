import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex gap-6">
    <div className="payment  bg-[#f6f7f9] p-4 sm:p-6  flex flex-wrap gap-6 justify-center font-[family-name:var(--font-geist-sans)]">
      <div className="cards w-full md:w-[70%] grid grid-cols-1 gap-6 order-2 lg:order-1">
        <Card className="w-full lg:w-[852px] h-auto lg:h-[336px] flex flex-col justify-around">
          <CardHeader>
            <CardTitle>Billing Info</CardTitle>
            <CardDescription className="w-full flex items-center justify-between">
              <h1>Please enter your billing info</h1>
              <h1>Step 1 of 4</h1>
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-6">
            <div className="w-full flex flex-wrap gap-4">
              <div className="name flex flex-col gap-3 w-full lg:w-[46%]">
                <label className="font-bold" htmlFor="name">Name</label>
                <Input placeholder="Your Name" className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl" />
              </div>
              <div className="num flex flex-col gap-3 w-full lg:w-[50%]">
                <label className="font-bold" htmlFor="num">Phone Number</label>
                <Input placeholder="Your Phone Number" className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl" />
              </div>
            </div>
            <div className="w-full flex flex-wrap gap-4">
              <div className="add flex flex-col gap-3 w-full lg:w-[46%]">
                <label className="font-bold" htmlFor="add">Address</label>
                <Input placeholder="Your Address" className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl" />
              </div>
              <div className="city flex flex-col gap-3 w-full lg:w-[50%]">
                <label className="font-bold" htmlFor="city">Town/City</label>
                <Input placeholder="Your City" className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl" />
              </div>
            </div>
          </CardContent>
        </Card>

    
        <Card className="w-full lg:w-[852px] h-auto lg:h-[664px] flex flex-col justify-around">
          <CardHeader>
            <CardTitle>Rental Info</CardTitle>
            <CardDescription className="w-full flex items-center justify-between">
              <h1>Please select your rental date</h1>
              <h1>Step 2 of 4</h1>
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-6">
            <div className="first">
              <span className="flex gap-4">

            <input type="radio" name="pick-drop" id="" /><h1 className="text-xl font-bold">Pick-Up</h1>
              </span>
            </div>
            <div className="sec w-full flex flex-wrap gap-4">
              <div className="add flex flex-col gap-3 w-full lg:w-[46%]">
                <label className="font-bold" htmlFor="add">Locations</label>
                <select title="city"  className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl">
                  <option value="">Select Your City</option>
                  <option value="1">Karachi</option>
                    <option value="1">Islamabad</option>
                    <option value="1">Lahore</option>
                    <option value="1">Faisalabad</option>
                    <option value="1">Gawadar</option>
                </select>
              </div>
              <div className="city flex flex-col gap-3 w-full lg:w-[50%]">
                <label className="font-bold" htmlFor="city">Date</label>
                <select title="cty"  className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl">
                  <option value="">Select Your Date</option>
                  <option value="" >1</option>
                    <option value="" >2</option>
                    <option value="" >3</option>
                    <option value="" >4</option>
                    <option value="" >5</option>
                    <option value="" >6</option>
                    <option value="" >7</option>
                    <option value="" >8</option>
                    <option value="" >9</option>
                    <option value="" >10</option>
                    <option value="" >11</option>
                    <option value="" >12</option>
                    <option value="" >13</option>
                    <option value="" >14</option>
                    <option value="" >15</option>
                    <option value="" >16</option>
                    <option value="" >17</option>
                    <option value="" >18</option>
                    <option value="" >19</option>
                    <option value="" >20</option>
                    <option value="" >21</option>
                    <option value="" >22</option>
                    <option value="" >23</option>
                    <option value="" >24</option>
                    <option value="" >25</option>
                    <option value="" >26</option>
                    <option value="" >27</option>
                    <option value="" >28</option>
                    <option value="" >29</option>
                    <option value="" >30</option>
                    <option value="" >31</option>
                </select>
              </div>
            </div>
            <div className=" w-full">
              <div className="flex flex-col gap-3 w-full lg:w-[45%]">
                <label className="font-bold" htmlFor="city">Time</label>
                <select   className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl">
                  <option value="">Select Your Time</option>
                  <option value="" >08:00 AM</option>
                    <option value="" >09:00 AM</option>
                    <option value="" >10:00 AM</option>

                    <option value="" >11:00 AM</option>
                    <option value="" >12:00 PM</option>
                    <option value="" >01:00 PM</option>
                    <option value="" >02:00 PM</option>
                    <option value="" >03:00 PM</option>
                    <option value="" >04:00 PM</option>
                    <option value="" >05:00 PM</option>
                    <option value="" >06:00 PM</option>
                    <option value="" >07:00 PM</option>
                    <option value="" >08:00 PM</option>
                    <option value="" >09:00 PM</option>
                    <option value="" >10:00 PM</option>
                    <option value="" >11:00 PM</option>
                    <option value="" >12:00 AM</option>
                    <option value="" >01:00 AM</option>
                    <option value="" >02:00 AM</option>
                    <option value="" >03:00 AM</option>
                    <option value="" >04:00 AM</option>
                    <option value="" >05:00 AM</option>
                    <option value="" >06:00 AM</option>
                    <option value="" >07:00 AM</option>
                </select>
              </div>
            </div>
            <span className="flex gap-4">

         <input type="radio" name="pick-drop" id="" /><h1 className="text-xl font-bold">Drop-Off</h1>
            </span>
            <div className="sec w-full flex flex-wrap gap-4">
              <div className="add flex flex-col gap-3 w-full lg:w-[46%]">
                <label className="font-bold" htmlFor="add">Locations</label>
                <select title="city"  className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl">
                  <option value="">Select Your City</option>
                  <option value="1">Karachi</option>
                    <option value="1">Islamabad</option>
                    <option value="1">Lahore</option>
                    <option value="1">Faisalabad</option>
                    <option value="1">Gawadar</option>
                </select>
              </div>
              <div className="city flex flex-col gap-3 w-full lg:w-[50%]">
                <label className="font-bold" htmlFor="city">Date</label>
                <select title="cty"  className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl">
                  <option value="">Select Your Date</option>
                  <option value="" >1</option>
                    <option value="" >2</option>
                    <option value="" >3</option>
                    <option value="" >4</option>
                    <option value="" >5</option>
                    <option value="" >6</option>
                    <option value="" >7</option>
                    <option value="" >8</option>
                    <option value="" >9</option>
                    <option value="" >10</option>
                    <option value="" >11</option>
                    <option value="" >12</option>
                    <option value="" >13</option>
                    <option value="" >14</option>
                    <option value="" >15</option>
                    <option value="" >16</option>
                    <option value="" >17</option>
                    <option value="" >18</option>
                    <option value="" >19</option>
                    <option value="" >20</option>
                    <option value="" >21</option>
                    <option value="" >22</option>
                    <option value="" >23</option>
                    <option value="" >24</option>
                    <option value="" >25</option>
                    <option value="" >26</option>
                    <option value="" >27</option>
                    <option value="" >28</option>
                    <option value="" >29</option>
                    <option value="" >30</option>
                    <option value="" >31</option>
                </select>
              </div>
            </div>
            <div className="third w-full">
              <div className="city flex flex-col gap-3 w-full lg:w-[45%]">
                <label className="font-bold" htmlFor="city">Time</label>
                <select title="cit"  className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl">
                  <option value="">Select Your Time</option>
                  <option value="" >08:00 AM</option>
                    <option value="" >09:00 AM</option>
                    <option value="" >10:00 AM</option>

                    <option value="" >11:00 AM</option>
                    <option value="" >12:00 PM</option>
                    <option value="" >01:00 PM</option>
                    <option value="" >02:00 PM</option>
                    <option value="" >03:00 PM</option>
                    <option value="" >04:00 PM</option>
                    <option value="" >05:00 PM</option>
                    <option value="" >06:00 PM</option>
                    <option value="" >07:00 PM</option>
                    <option value="" >08:00 PM</option>
                    <option value="" >09:00 PM</option>
                    <option value="" >10:00 PM</option>
                    <option value="" >11:00 PM</option>
                    <option value="" >12:00 AM</option>
                    <option value="" >01:00 AM</option>
                    <option value="" >02:00 AM</option>
                    <option value="" >03:00 AM</option>
                    <option value="" >04:00 AM</option>
                    <option value="" >05:00 AM</option>
                    <option value="" >06:00 AM</option>
                    <option value="" >07:00 AM</option>
                </select>
              </div>
            </div>
          </CardContent>
        </Card>


       
            {/* Payment Method Card */}
            <Card className="w-full">
              <CardHeader>
                <CardTitle className="text-lg md:text-xl">Payment Method</CardTitle>
                <CardDescription className="flex flex-col md:flex-row items-center justify-between">
                  <span className="mb-2 md:mb-0">Please enter your payment method</span>
                  <span>Step 3 of 4</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Credit Card Section */}
                <div className="border border-gray-300 rounded-xl p-4 space-y-4">
                  <div className="flex items-center gap-4">
                    <input type="radio" name="pay" id="creditcard" />
                    <label htmlFor="creditcard" className="text-xl font-bold">Credit Card</label>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-3">
                      <label className="font-bold">Card Number</label>
                      <input 
                        type="number" 
                        placeholder="Enter your card number" 
                        className="bg-[#f6f7f9] px-4 h-12 rounded-xl border border-gray-300" 
                      />
                    </div>
                    <div className="flex flex-col gap-3">
                      <label className="font-bold">Expiration Date</label>
                      <input 
                        type="text" 
                        placeholder="MM/YY" 
                        className="bg-[#f6f7f9] px-4 h-12 rounded-xl border border-gray-300" 
                      />
                    </div>
                    <div className="flex flex-col gap-3">
                      <label className="font-bold">Card Holder Name</label>
                      <input 
                        type="text" 
                        placeholder="Enter card holder name" 
                        className="bg-[#f6f7f9] px-4 h-12 rounded-xl border border-gray-300" 
                      />
                    </div>
                    <div className="flex flex-col gap-3">
                      <label className="font-bold">CVV</label>
                      <input 
                        type="number" 
                        placeholder="Enter CVV" 
                        className="bg-[#f6f7f9] px-4 h-12 rounded-xl border border-gray-300" 
                      />
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="flex items-center my-4">
                  <hr className="flex-grow border-t border-gray-300" />
                  <span className="px-4 text-gray-500">OR</span>
                  <hr className="flex-grow border-t border-gray-300" />
                </div>

                {/* PayPal Section */}
                <div className="border border-gray-300 rounded-xl p-4 space-y-4">
                  <div className="flex items-center gap-4">
                    <input type="radio" name="pay" id="paypal" />
                    <label htmlFor="paypal" className="text-xl font-bold">PayPal</label>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-3">
                      <label className="font-bold">Email</label>
                      <input 
                        type="email" 
                        placeholder="Enter your email" 
                        className="bg-[#f6f7f9] px-4 h-12 rounded-xl border border-gray-300" 
                      />
                    </div>
                    <div className="flex flex-col gap-3">
                      <label className="font-bold">Password</label>
                      <input 
                        type="password" 
                        placeholder="Enter your password" 
                        className="bg-[#f6f7f9] px-4 h-12 rounded-xl border border-gray-300" 
                      />
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="flex items-center my-4">
                  <hr className="flex-grow border-t border-gray-300" />
                  <span className="px-4 text-gray-500">OR</span>
                  <hr className="flex-grow border-t border-gray-300" />
                </div>

                {/* Bitcoin Section */}
                <div className="border border-gray-300 rounded-xl p-4 space-y-4">
                  <div className="flex items-center gap-4">
                    <input type="radio" name="pay" id="bitcoin" />
                    <label htmlFor="bitcoin" className="text-xl font-bold">Bitcoin</label>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-3">
                      <label className="font-bold">Email</label>
                      <input 
                        type="email" 
                        placeholder="Enter your email" 
                        className="bg-[#f6f7f9] px-4 h-12 rounded-xl border border-gray-300" 
                      />
                    </div>
                    <div className="flex flex-col gap-3">
                      <label className="font-bold">Password</label>
                      <input 
                        type="password" 
                        placeholder="Enter your password" 
                        className="bg-[#f6f7f9] px-4 h-12 rounded-xl border border-gray-300" 
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

      
        <Card className="w-full lg:w-[852px] h-auto lg:h-[484px] flex flex-col justify-around">
          <CardHeader>
            <CardTitle>Confirmation</CardTitle>
            <CardDescription className="w-full flex items-center justify-between">
              <h1>We are getting to the end. Just a few clicks and your rental is ready</h1>
              <h1>Step 4 of 4</h1>
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-8">
            <div>
              <span className="flex items-center gap-4">

              <input type="checkbox" name="" id="" /><h1 className=" text-xl">I Agree with sending an Marketing and newsletter Emails.No spam,Promissed!</h1>
              </span>
              <br />
              <span className="flex items-center gap-4">

              <input type="checkbox" name="" id="" /><h1 className=" text-xl">I Agree with our terms and conditions and privacy policy.</h1>
              </span>
            </div>
            <Link href={'/admin'}>
            <button className="bg-[#3563e9] p-2 text-white rounded-xl w-[140px] h-[56px]">
              Rent Now
            </button></Link>
            
            <Image src={"/Safe Data.png"} alt="Safe Data" width={548} height={100} />
          </CardContent>
        </Card>
      </div>
      <div className="details w-full h-auto flex-shrink-0 lg:w-[40%] order-1 lg:order-2 flex justify-center">
        <div className="border border-[#e0e0e0] rounded-xl p-4 w-[90%]">
            <h1 className="text-2xl text-bold">Rentel Summary</h1>
            <p className="text-xl text-gray-700">Prices may change depending on the length of rental and price of rental car.</p>

            <div className="flex justify-between items-center mt-4">
               <span>
                  <Image src={"/../../public/views.png"} alt="" height={108} width={132}/>
               </span>
               <span>
                  <h1 className="text-xl text-bold">Nissan GT-R</h1><br />
                  <p>⭐⭐⭐⭐✩  440+ Reveiwers</p>
               </span>
            </div>
            <hr />
            <div>
              <div>
                <br />
                <span className="flex justify-start items-center h-2">Subtotal</span>
                <span className="flex justify-end items-center h-2">$80.00</span>
                <br />
              </div>

              <div>
                <span className="flex justify-start items-center h-2">Tax</span>
                <span className="flex justify-end items-center h-2">$0</span>
                <br />
              </div>
              <div className="flex w-full p-2 rounded-lg items-center bg-gray-300">
                  <h1>Apply Promo Code</h1><button className="flex flex-end ml-auto rounded-md p-2 hover:bg-blue-500  bg-blue-600" type="button">Apply Now</button>
              </div>
              <br />
              
              <div>
                <div className="flex justify-start items-center p-4 pb-6 h-2">
                  <span>
                    <h1 className="text-xl">Total Rental Price</h1>
                    <p className="text-sm text-gray-400">Overall price and includes rental discount</p>
                    
                    </span>
                    <span className="flex  justify-end items-center pl-auto h-2">

                
                    <h1 className=" flex flex-end text-2xl">$80.00</h1>
                    </span>
                </div>
              </div>
              
            </div>
        </div>
      </div>
      </div>
    </div>
  );
}
