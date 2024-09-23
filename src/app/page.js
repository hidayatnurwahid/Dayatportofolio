export default function About() {
  return (
    <>
    <div className="flex mt-16">
      <div className="md:w-3/4">
    <h2 className="text-left text-7xl w-full font-bold mt-20">Hi,</h2>
    <h2 className="text-left text-7xl w-full font-bold mt-4">I'am <span class="text-orange-700">Hidayat</span></h2>
    <h2 className="text-left text-7xl w-full font-bold mt-4">Assistant Lab</h2>

    <button className="mt-10   mx-1 h-9 items-center justify-center px-4  rounded-md bg-orange-500">
                                <label>Contact</label>
                            </button>
    
                            </div>
      <img 
        src="/images/jajal.jpg" 
        alt="Hidayat Nurwahid" 
        layout="fill"
        objectFit="cover"
        width={256}
    height={256}
        className="rounded-full"
      />
      
    </div>
   
    </>
  );
}