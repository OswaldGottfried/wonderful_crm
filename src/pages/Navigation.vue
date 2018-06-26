<template lang="pug">
  nav
    ul
      li
        router-link(to="/calendar") Календарь
      li
        router-link(to="/clientbase") Статистика
      li
        router-link(to="/clientbase") Расписание
      li
        router-link(to="/clientbase") База клиентов
      li
        router-link(to="/clientbase") Направление
      li
        router-link(to="/clientbase") Залы
      li
        router-link(to="/clientbase") Тренера
      li
        router-link(to="/clientbase") Администраторы
      li
        router-link(to="/clientbase") Абонементы
</template>

<style lang="sass">
  nav
    display: flex
    height: 50vh
    
    ul
      margin: auto 0
      li
        font-family: 'Kelson Sans RU'
        font-weight: 700
        font-size: 18px
        &:not(:last-child)
          margin-bottom: 30px

</style>
