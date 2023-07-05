<template>

  <div class="navbar bg-gray-800">
    <div class="flex-1">
      <a class="btn btn-ghost normal-case text-xl">
        <label for="my-drawer-2" class="drawer-button lg:hidden">

          <svg class="swap-off fill-current bg-white" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
            viewBox="0 0 512 512">
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>
        </label>
      </a>
      <a class="btn btn-ghost normal-case text-white text-xl">Dashboard</a>
    </div>
    <div class="flex-none gap-2">
      <div class="form-control">
        <input type="text" placeholder="Search" class="input input-bordered w-24 md:w-auto" />
      </div>
      <div class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0jtDbncOJbB0LcAGjTsY2VFJt7t0Us_Ud24KfmbaS7ofHmAjMNXGy58TIs6N1Hh1jqKg&usqp=CAU" />
          </div>
        </label>
        <ul tabindex="0" class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-gray-800 rounded-box w-52">
          <li>
            <a class="justify-between">
              Profile
              <span class="badge">New</span>
            </a>
          </li>
          <li><a>Settings</a></li>
          <li><a>Logout</a></li>
        </ul>
      </div>
    </div>
  </div>




  <div class="drawer lg:drawer-open">
    <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col items-start justify-start">
      <div>

        <h1 class="bg-blue-500 text-center font-serif text-3xl m-3" > this is the dashboard part </h1>
      </div>


    </div>
    <div class="drawer-side">
      <label for="my-drawer-2" class="drawer-overlay"></label>
      <ul class="menu p-4 w-56 h-full text-base-content bg-gray-800	">
        <!-- Sidebar content here -->
        <li><a class="text-white hover:text-blue-500"> Sidebar Item 1</a></li>
        <li><a class="text-white hover:text-blue-500">Sidebar Item 1</a></li>
        <li><a class="text-white hover:text-blue-500">Sidebar Item 1</a></li>
        <li><a class="text-white hover:text-blue-500">Sidebar Item 1</a></li>
        <li><a class="text-white hover:text-blue-500">Sidebar Item 1</a></li>
       
      </ul>

    </div>
  </div>
</template>