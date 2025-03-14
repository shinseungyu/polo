document.addEventListener(`DOMContentLoaded`, function () {
  new fullpage('#wrap', {
    // 새로고침시 상단으로 이동하는 부분 막아주기
    anchors: ['anchor1', 'anchor2', 'anchor3', 'anchor4'],
    // 스크롤바 생성(position:fixed; 처리해야한다면 꼭 설정)
    scrollBar: true,
    // 지정한 섹션에는 스크롤 정상값으로 돌려주기
    normalScrollElements: '.sec-5, .footer',
    // 높이값이 풀페이지가 아닌 경우 풀페이지 상단으로 올라가는 것 막아주기
    fitToSection: false,
    // 스크롤 속도 조정
    scrollingSpeed: 600,
    // 반응형 조절
    responsiveWidth: 551,
    // responsiveHeight: 700,
  });
  // 모바일 햄버거 클릭시 모바일 메뉴 출력 1000px 부터 출력
  const hamburger = document.querySelector(`#hamburger`)
  const mobile = document.querySelector(`.mb-menu`);
  hamburger.addEventListener(`click`, function () {
    mobile.classList.toggle(`go`)
  });
  // 배경누르면 햄버거 꺼짐



  // 배너 스와이퍼
  var swiper = new Swiper(".mySwiper1", {
    // loop: true,
    effect: "fade",
    speed: 2500,
    autoplay: {
      delay: 1500,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  // right menu 와 header 백그라운드 변경
  window.addEventListener(`scroll`, function () {
    const scrollTop = window.scrollY;
    const headerChoice = document.querySelectorAll(`.header, .right-menu`);
    const threshold = window.innerHeight * 0.5; // 화면 높이의 절반

    for (const headerChange of headerChoice) {
      if (scrollTop >= threshold) {
        headerChange.classList.add(`active`);
      } else {
        headerChange.classList.remove(`active`);
      }
    }
  });

  // sub-menu-box opacity
  const headerMenu = document.querySelectorAll(`.right-menu li`);
  const subMenuBox = document.querySelector(`.sub-menu-box`);
  for (const headMenu of headerMenu) {
    headMenu.addEventListener(`mouseenter`, function () {
      subMenuBox.classList.add(`on`);
    });
  }
  subMenuBox.addEventListener(`mouseleave`, function () {
    subMenuBox.classList.remove(`on`);

  });
  // 스와이퍼 큐브
  var swiper = new Swiper(".mySwiper", {
    effect: "cube",
    grabCursor: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
  });

  // sectio5 스와이퍼
  var swiper2 = new Swiper(".mySwiper2", {
    pagination: {
      el: ".swiper-pagination2",
    },
    slidesPerView: 2.5,    // 모든 화면에서 2.5개의 슬라이드가 보이도록 설정
    spaceBetween: 10,      // 모든 화면에서 슬라이드 간 간격을 10px로 설정
    slidesPerGroup: 1,     // 한 번에 하나씩 슬라이드 이동
    loop: true,            // 필요에 따라 무한 반복 설정 가능
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });





});