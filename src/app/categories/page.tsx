'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Page() {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className='w-full flex'>
      <div className="first hidden sm:flex w-[20%]">
        <Image src={'/Nav Bar Side.png'} alt='' width={360} height={1600}/>
      </div>
      <div className="sec w-full sm:w-[80%] bg-[#f6f7f9] p-4 sm:p-6  flex flex-col gap-10 font-[family-name:var(--font-geist-sans)]">
        
      <section className="w-full flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 lg:gap-8">
        
        <div className="w-full md:w-[45%] lg:w-[40%]">
          <div className="bg-gray-50 border border-gray-300 rounded-lg shadow-md p-4 md:p-6 w-full">
            <div className="flex items-center gap-3 mb-4">
              <input 
                type="radio" 
                name="pick-drop" 
                className="h-5 w-5 text-blue-600 focus:ring-blue-500" 
              />
              <h1 className="text-2xl md:text-3xl font-bold">Pick-Up</h1>
            </div>
            
            <div className="space-y-4">
              {/* Location Selector */}
              <div>
                <h2 className="text-xl font-bold mb-2">Locations</h2>
                <select 
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                  defaultValue=""
                >
                  <option value="" disabled>Select your city</option>
                  <option value="1">Karachi</option>
                  <option value="1">Islamabad</option>
                  <option value="1">Lahore</option>
                  <option value="1">Faisalabad</option>
                  <option value="1">Gawadar</option>
                </select>
              </div>
              
              {/* Date Selector */}
              <div>
                <h2 className="text-xl font-bold mb-2">Date</h2>
                <select 
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                  defaultValue=""
                >
                  <option value="" disabled>Select your date</option>
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
              
              {/* Time Selector */}
              <div>
                <h2 className="text-xl font-bold mb-2">Time</h2>
                <select 
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                  defaultValue=""
                >
                  <option value="" disabled>Select time</option>
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
          </div>
        </div>


        <div className="">
        <Image src={"/Switch.png"} alt="" width={90} height={90} className="max-w-full" />

        </div>
     

        <div className="w-full md:w-[45%] lg:w-[40%]">
          <div className="bg-gray-50 border border-gray-300 rounded-lg shadow-md p-4 md:p-6 w-full">
            <div className="flex items-center gap-3 mb-4">
              <input 
                type="radio" 
                name="pick-drop" 
                className="h-5 w-5 text-blue-600 focus:ring-blue-500" 
              />
              <h1 className="text-2xl md:text-3xl font-bold">Drop-Off</h1>
            </div>
            
            <div className="space-y-4">
              {/* Location Selector */}
              <div>
                <h2 className="text-xl font-bold mb-2">Locations</h2>
                <select 
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                  defaultValue=""
                >
                  <option value="" disabled>Select your city</option>
                  <option value="1">Karachi</option>
                  <option value="1">Islamabad</option>
                  <option value="1">Lahore</option>
                  <option value="1">Faisalabad</option>
                  <option value="1">Gawadar</option>
                </select>
              </div>
              
              {/* Date Selector */}
              <div>
                <h2 className="text-xl font-bold mb-2">Date</h2>
                <select 
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                  defaultValue=""
                >
                  <option value="" disabled>Select your date</option>
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
              
              {/* Time Selector */}
              <div>
                <h2 className="text-xl font-bold mb-2">Time</h2>
                <select 
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                  defaultValue=""
                >
                  <option value="" disabled>Select time</option>
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
          </div>
        </div>

      
    </section>

        <section className="popular w-full flex flex-col gap-4">
          <div className="sec grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'Koenigsegg', image: '/car.png', desc: 'Sport' },
              { title: 'Nissan GT - R', image: '/car (1).png', desc: 'Luxury' },
              { title: 'Rolls-Royce', image: '/suv.png', desc: 'Sport' },
              { title: 'All New Rush', image: '/suv (4).png', desc: 'Luxury' },
              { title: 'CR - V', image: '/suv (4).png', desc: 'Luxury' },
              { title: 'ALLNEW TERIOS', image: '/suv.png', desc: 'SUV' },
              { title: 'MGZX Exclusive', image: '/suv (4).png', desc: 'Luxury' },
              { title: 'NEW MGZS', image: '/suv.png', desc: 'SUV' },
              { title: 'Koenigsegg', image: '/car.png', desc: 'Sport' },
              { title: 'Nissan GT - R', image: '/car (1).png', desc: 'Luxury' },
              { title: 'Rolls-Royce', image: '/suv.png', desc: 'Sport' },
              { title: 'NEW MGZS', image: '/suv.png', desc: 'SUV' },
              
            ].map((car, index) => (
              <Card key={index} className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
                <CardHeader>
                  <CardTitle className="w-full flex items-center justify-between">
                    {car.title} <Image src={"/heart.png"} alt="" width={20} height={20} />
                  </CardTitle>
                  <CardDescription>{car.desc}</CardDescription>
                </CardHeader>
                <CardContent className="w-full flex md:flex-col items-center justify-center gap-4">
                  <Image src={car.image} alt="" width={220} height={68} />
                  <Image src={"/Spesification.png"} alt="" width={256} height={24} className='hidden md:flex' />
                  <Image src={"/Spesification (1).png"} alt="" width={256} height={24} className='md:hidden' />
                </CardContent>
                <CardFooter className="w-full flex items-center justify-between">
                  <p>
                    $99.00/<span className="text-gray-500">day</span>
                  </p>
                  <Link href={'/details'}>
                  <button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button></Link>
                </CardFooter>
              </Card>
            ))}
          </div>
          {showMore && (
            <div className="sec grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: 'MG ZX Exclusive', image: '/suv.png', desc: 'SUV' },
                { title: 'NEW MG ZS', image: '/suv (4).png', desc: 'Sedan' },
                { title: 'New MG ZX Excite', image: '/suv.png', desc: 'Sport' },
                { title: 'NEW MG ZS', image: '/suv (4).png', desc: 'Sedan' },
                { title: 'Koenigsegg', image: '/car.png', desc: 'Sport' },
              { title: 'Nissan GT - R', image: '/car (1).png', desc: 'Luxury' },
              { title: 'Rolls-Royce', image: '/suv.png', desc: 'Sport' },
              { title: 'All New Rush', image: '/suv (4).png', desc: 'Luxury' },
              
             
              
              ].map((car, index) => (
                <Card key={index} className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
                  <CardHeader>
                    <CardTitle className="w-full flex items-center justify-between">
                      {car.title} <Image src={"/heart.png"} alt="" width={20} height={20} />
                    </CardTitle>
                    <CardDescription>{car.desc}</CardDescription>
                  </CardHeader>
                  <CardContent className="w-full flex md:flex-col items-center justify-center gap-4">
                    <Image src={car.image} alt="" width={220} height={68} />
                    <Image src={"/Spesification.png"} alt="" width={256} height={24} className='hidden md:flex' />
                    <Image src={"/Spesification (1).png"} alt="" width={256} height={24} className='md:hidden' />
                  </CardContent>
                  <CardFooter className="w-full flex items-center justify-between">
                    <p>
                      $99.00/<span className="text-gray-500">day</span>
                    </p>
                    <button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </section>

        <section className="button w-full text-center">
          <button 
            onClick={toggleShowMore} 
            className="bg-[#3563e9] px-4 py-2 text-white rounded-md mt-5"
          >
            {showMore ? "Show Less Cars" : "Show More Cars"}
          </button>
        </section>
      </div>
    </div>
  );
}