<template lang="pug">
  nav
    ul
      li
        router-link(to="/calendar") Календарь
      li
        router-link(to="/clientbase") База клиентов
      // li.space
      //   router-link(to="/") Статистика
      // li.space
      //   router-link(to="/") Скрипты
      // li
      //   router-link(to="/") Расписание
      li
        router-link(to="/subscriptions") Абонементы
      // li
      //   router-link(to="/") Направления
      // li
      //   router-link(to="/") Тренера
      // li
      //   router-link(to="/") Залы
      li.space
        router-link(to="/administrators") Администраторы
      // li
      //   router-link(to="/") Абонементы
</template>

<style lang="sass">
  nav
    position: absolute
    top: 50%
    right: 0
    transform: translate(-50%, -50%)
    ul
      margin: auto 0
      li
        .router-link-active 
          color: rgba(55, 56, 60, 0.4)
        font-family: 'Kelson Sans RU'
        font-weight: 700
        font-size: 18px
        &:not(:last-child)
          margin-bottom: 30px
        &.space 
          margin-bottom: 60px
</style>
