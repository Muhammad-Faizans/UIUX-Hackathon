import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="bg-[#f6f7f9] min-h-screen p-4 sm:p-6 lg:p-20 flex flex-col gap-10 font-[family-name:var(--font-geist-sans)]">
     
      <section className="first  w-full flex flex-wrap sm:flex-nowrap gap-5 sm:gap-8  justify-center">
        <Image src={"/Ads 1.png"} alt="" width={640} height={360} className="max-w-full" />
        <Image src={"/Ads 2.png"} alt="" width={640} height={360} className="max-w-full" />
      </section>

    
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
        <div className="first w-full flex items-center justify-between">
          <h1 className="text-gray-500 text-lg sm:text-xl">Popular Car</h1>
          <Link href={"/categories"}>
            <h1 className="text-[#3563e9] font-bold hover:underline decoration-[#3563e9]">
              View All
            </h1>
          </Link>
        </div>
        <div className="sec grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                Koenigsegg <Image src={"/heart.png"} alt="" width={20} height={20} />
              </CardTitle>
              <CardDescription>Sport</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
              <Image src={"/car.png"} alt="" width={220} height={68} />
              <Image src={"/Spesification.png"} alt="" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p>
                $99.00/<span className="text-gray-500">day</span>
              </p>
              <Link href={'/payment'}><button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button></Link>
            </CardFooter>
          </Card>

         
          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                NissanGT - R <Image src={"/heart 2.png"} alt="" width={20} height={20} />
              </CardTitle>
              <CardDescription>Sport</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
              <Image src={"/car (1).png"} alt="" width={220} height={68} />
              <Image src={"/Spesification.png"} alt="" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p>
                $99.00/<span className="text-gray-500">day</span>
              </p>
              <Link href={'/payment'}><button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button></Link>
            </CardFooter>
          </Card>

        
          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                Rolls-Royce <Image src={"/heart.png"} alt="" width={20} height={20} />
              </CardTitle>
              <CardDescription>Sedan</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
              <Image src={"/car.png"} alt="" width={220} height={68} />
              <Image src={"/Spesification.png"} alt="" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p>
                $99.00/<span className="text-gray-500">day</span>
              </p>
            <Link href={'/payment'}><button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button></Link>
            </CardFooter>
          </Card>

     
          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                NissanGT - R <Image src={"/heart 2.png"} alt="" width={20} height={20} />
              </CardTitle>
              <CardDescription>Sport</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
              <Image src={"/car (1).png"} alt="" width={220} height={68} />
              <Image src={"/Spesification.png"} alt="" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p>
                $99.00/<span className="text-gray-500">day</span>
              </p>
            <Link href={'/payment'}><button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button></Link>
            </CardFooter>
          </Card>
        </div>
      </section>


      <section className="popular w-full flex flex-col gap-4">
        <h1 className="text-gray-500 text-lg sm:text-xl">Recommendation Car</h1>
        <div className="sec grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                All New Rush <Image src={"/heart.png"} alt="" width={20} height={20} />
              </CardTitle>
              <CardDescription>SUV</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
              <Image src={"/suv.png"} alt="" width={220} height={68} />
              <Image src={"/Spesification.png"} alt="" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p>
                $99.00/<span className="text-gray-500">day</span>
              </p>
            <Link href={'/payment'}><button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button></Link>
            </CardFooter>
          </Card>

          
          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                CR - V <Image src={"/heart 2.png"} alt="" width={20} height={20} />
              </CardTitle>
              <CardDescription>SUV</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
              <Image src={"/suv (4).png"} alt="" width={220} height={68} />
              <Image src={"/Spesification.png"} alt="" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p>
                $99.00/<span className="text-gray-500">day</span>
              </p>
            <Link href={'/payment'}><button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button></Link>
            </CardFooter>
          </Card>

          
          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                All New Terios <Image src={"/heart.png"} alt="" width={20} height={20} />
              </CardTitle>
              <CardDescription>SUV</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
              <Image src={"/suv (4).png"} alt="" width={220} height={68} />
              <Image src={"/Spesification.png"} alt="" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p>
                $99.00/<span className="text-gray-500">day</span>
              </p>
            <Link href={'/payment'}><button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button></Link>
            </CardFooter>
          </Card>

          
          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                CR - V <Image src={"/heart 2.png"} alt="" width={20} height={20} />
              </CardTitle>
              <CardDescription>SUV</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
              <Image src={"/suv (4).png"} alt="" width={220} height={68} />
              <Image src={"/Spesification.png"} alt="" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p>
                $99.00/<span className="text-gray-500">day</span>
              </p>
            <Link href={'/payment'}><button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button></Link>
            </CardFooter>
          </Card>
        </div>
        <div className="sec grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                MG ZX Exclusive <Image src={"/heart.png"} alt="" width={20} height={20} />
              </CardTitle>
              <CardDescription>SUV</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
              <Image src={"/suv.png"} alt="" width={220} height={68} />
              <Image src={"/Spesification.png"} alt="" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p>
                $99.00/<span className="text-gray-500">day</span>
              </p>
            <Link href={'/payment'}><button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button></Link>
            </CardFooter>
          </Card>

          
          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                NEW MG ZS <Image src={"/heart 2.png"} alt="" width={20} height={20} />
              </CardTitle>
              <CardDescription>SUV</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
              <Image src={"/suv.png"} alt="" width={220} height={68} />
              <Image src={"/Spesification.png"} alt="" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p>
                $99.00/<span className="text-gray-500">day</span>
              </p>
            <Link href={'/payment'}><button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button></Link>
            </CardFooter>
          </Card>

          
          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                MG ZX Excite <Image src={"/heart.png"} alt="" width={20} height={20} />
              </CardTitle>
              <CardDescription>SUV</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
              <Image src={"/suv (4).png"} alt="" width={220} height={68} />
              <Image src={"/Spesification.png"} alt="" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p>
                $99.00/<span className="text-gray-500">day</span>
              </p>
            <Link href={'/payment'}><button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button></Link>
            </CardFooter>
          </Card>

          
          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                New MG ZS<Image src={"/heart 2.png"} alt="" width={20} height={20} />
              </CardTitle>
              <CardDescription>SUV</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
              <Image src={"/suv (4).png"} alt="" width={220} height={68} />
              <Image src={"/Spesification.png"} alt="" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p>
                $99.00/<span className="text-gray-500">day</span>
              </p>
            <Link href={'/payment'}><button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button></Link>
            </CardFooter>
          </Card>
        </div>
      </section>

      <section className="button w-full text-center">
        <Link href={"/categories"}>
          <button className="bg-[#3563e9] px-4 py-2 text-white rounded-md mt-5">
            Show More Cars
          </button>
        </Link>
      </section>
    </div>
  );
}

