import { Fot1, Fot2 } from "../Components/index";


export default ()=>{

  const footerNavs = [
    {
      href: "/",
      name: "Terms"
    },
    {
      href: "/",
      name: "License"
    },
    {
      href: "/",
      name: "Privacy"
    },
    {
      href: "/",
      name: "About us"
    }
  ]

  return(
    <footer className="pt-10">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="justify-between sm:flex">
          <div className="space-y-6">
            <img src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg" className="w-28" alt="" />
            <p className="max-w-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <ul className="flex flex-wrap items-center gap-4 text-sm sm:text-base">
              {footerNavs.map((item, idx)=>{
                <li className="text-gray-800 hover:text-gray-500 duration-150">
                  <a href={item.href} key={idx}>
                    {item.name}
                  </a>
                </li>
              })}
            </ul>

          </div>
          {/* <div className="mt-6">
            <p className="text-gray-700 font-semibold">Get the app</p>
            <div className="flex items-center gap-3 mt-3 sm:block">
              <a href="/">
                <Fot1/>
              </a>
              <a href="/" className="mt-0 block sm:mt-3">
                <Fot2/>
              </a>
            </div>
          </div> */}
        </div>
        <div className="mt-10 py-10 border-t md:text-center">
          <p>2023 BroCode. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}