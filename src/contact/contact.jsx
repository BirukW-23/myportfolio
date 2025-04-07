import React from 'react'
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { Linkedin ,Github, Instagram ,Facebook } from 'lucide-react';
function contact() {
    const contacts =[
        {
            id:1,
            icon:<EnvelopeIcon className="w-6 h-6 text-emerald-700 dark:text-cyan-300" />,
            title:'Email',
            description:'birukwondmeneh@gmail.com'
        },
        {
            id:2,
            icon:<PhoneIcon className="w-6 h-6 text-emerald-700 dark:text-cyan-300" />,
            title:'Phone',
            description:'+251948822471'
        },
        {
            id:3,
            icon:<MapPinIcon className="w-6 h-6 text-emerald-700 dark:text-cyan-300" />,
            title:'Location',
            description:'Addis Ababa, Ethiopia'
        },
        {
            id:1,
            icon:<Linkedin className="w-6 h-6 text-emerald-700 dark:text-cyan-300" />,
            title:'Linkedin',
            description:'Biruk Wondmeneh'
        },
    ]
  return (
    <div id='contact' className="flex flex-col  justify-center items-center gap-10 mb-10 px-4">
    <div className="grid gap-6 text-center">
    <h2 className=" text-black dark:text-white text-7xl">
          Get In <span className="bg-gradient-to-r from-cyan-600 to-emerald-600 bg-clip-text text-transparent"> Touch</span>
        </h2>
      <span className="border-b-4 border-emerald-600 w-1/3 mx-auto rounded-sm"></span>
    </div>
  
    <p className="text-center text-gray-600 text-lg md:text-1xl max-w-1xl">
      Feel free to reach out for collaborations or just a friendly hello
    </p>
    <div className="flex gap-8">
  <a href="#" className="text-gray-400 hover:text-emerald-700 dark:hover:text-cyan-300 transition duration-300 transform hover:scale-110">
    <Github />
  </a>
  <a href="#" className="text-gray-400 hover:text-emerald-700 dark:hover:text-cyan-300 transition duration-300 transform hover:scale-110">
    <Linkedin />
  </a>
  <a href="#" className="text-gray-400 hover:text-emerald-700 dark:hover:text-cyan-300 transition duration-300 transform hover:scale-110">
    <Facebook />
  </a>
  <a href="#" className="text-gray-400 hover:text-emerald-700 dark:hover:text-cyan-300 transition duration-300 transform hover:scale-110">
    <Instagram />
  </a>
</div>

    <div className="w-full max-w-6xl">
      <div className=" grid grid-cols-1 sm:grid-cols-2 gap-6 p-4">
        {contacts.map((contact) => (
          <div
            key={contact.id}
            className="bg-white dark:bg-[#000813] flex items-center transition-transform duration-300 hover:-translate-y-1 shadow-xl rounded-lg p-4 gap-4"
          >
            <div className="p-4 bg-cyan-100 dark:bg-gray-800 rounded-full ">
              {contact.icon}
            </div>
            <div className="flex flex-col">
              <h3 className="text-black font-medium text-center text-lg dark:text-white">{contact.title}</h3>
              <p className="text-gray-500">{contact.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className='flex flex-col bg-white dark:bg-[#000813] rounded-lg  shadow-md mt-4 px-5 py-8'>
    <form action=""  >
        <h2 className='text-black font-semibold text-center text-2xl mb-5 dark:text-white'>Send Me a Message</h2>
        <div className='flex flex-col gap-2 mb-5'>
            <label htmlFor="" className='text-center dark:text-white'>Name</label>
            <input type="text" className='border rounded-lg px-3 py-3 dark:bg-[#000813]' placeholder='Your name' required/>
        </div>
        <div className='flex flex-col gap-2 mb-5'>
            <label className='text-center dark:text-white' htmlFor="">Email</label>
            <input type="text" className='border rounded-lg px-3 py-3 dark:bg-[#000813] ' placeholder='Your email' required />
        </div>
        <div className='flex flex-col gap-2 mb-5'>
            <label className='text-center dark:text-white' htmlFor="">Message</label>
            <textarea type="text" className='border w-[450px] rounded-lg px-3 py-6 dark:bg-[#000813]' placeholder='Your message' />
        </div>
        <button className='bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-lg hover:bg-gradient-to-l bg-emerald-900 w-full py-2 text-white'>Send Message</button>
    </form>
    </div>
  </div>
  
  )
}

export default contact