<template>
  <div>
    <header>
      <ul>
        <li><nuxt-link to="/">Home</nuxt-link></li>
        <li><nuxt-link to="/about">About</nuxt-link></li>
        <li class="loginBtn" style="float: right">
          <nuxt-link to="/login">Login</nuxt-link>
        </li>
      </ul>
    </header>
    <div class="mainContent">
      <slot></slot>
    </div>
    <footer>
      <h1>Footer</h1>
    </footer>
  </div>
</template>
