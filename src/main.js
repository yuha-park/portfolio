'use strict';

// header에 페이지 스크롤시 다크 스타일링 적용
const header = document.querySelector('.header');
const headerHeight = header.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  if(window.scrollY > headerHeight) {
    header.classList.add('header--dark');
  } else {
    header.classList.remove('header--dark');
  }
})

//  home 섹션 아래로 스크롤시 투명하게 처리
const home = document.querySelector('.home__container');
const homeHeight = home.offsetHeight;
document.addEventListener('scroll', () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
})

// scrollIntoView
const scrollIntoView = (selector) => {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({behavior: 'smooth'});
}

// home more click -> about
const homeContactBtn = document.querySelector('.home__more');
homeContactBtn.addEventListener('click' , () => {
  scrollIntoView('#about');
})

// header click -> 해당 link
const headerMenu = document.querySelector('.header__menu');
const headerMenuItem = document.querySelectorAll('.header__menu__item');
headerMenu.addEventListener('click' , (event) => {

  const target = event.target;
  const link = target.dataset.link;

  if(link == null) {
    return;
  }
  scrollIntoView(link);

  // //먼저 heaer item들 active 클래스 지우기
  // //queryselectorall은 선택한 요소들은 NodeList를 반환 -> 반복문을 사용 필요
  // headerMenuItem.forEach(item => item.classList.remove('active'));

  // //해당 header 요소 클릭시 active 클래스 추가하여 active 상태임을 보여주기
  // target.classList.add('active');
})

// header scroll -> 해당 header item active
const sections = document.querySelectorAll('section');
const headerItems = document.querySelectorAll('.header__menu__item');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          current = section.getAttribute('id');
      }
  });

  headerItems.forEach(item => {
    item.classList.remove('active');
      if (item.getAttribute('data-link') === `#${current}`) {
        item.classList.add('active');
      }
  });
});


// header logo link clcik -> home
const headerLogoLink = document.querySelector('.header__logo__title__link');
headerLogoLink.addEventListener('click' , () => {
  scrollIntoView('#home');
})

// Navbar 토글버튼 클릭 처리
const navbarMenu = document.querySelector('.header__menu');
const navbarToggle = document.querySelector('.header__toggle');
navbarToggle.addEventListener('click', () => {
  navbarMenu.classList.toggle('open');
});

// Navbar 메뉴 클릭시 메뉴를 자동으로 닫아줌
navbarMenu.addEventListener('click', () => {
  navbarMenu.classList.remove('open');
});

// work
document.addEventListener('DOMContentLoaded', function() {
  // 처음에 모든 div 보여주기
  const allDivs = document.querySelectorAll('.work__box');
  allDivs.forEach(div => {
      div.style.display = 'block'; // 처음에는 모든 div 보여줌
  });

  // 버튼 클릭 시 이벤트 리스너 추가
  const buttons = document.querySelectorAll('.work__box__btn');
  const wrap = document.querySelector('.work__wrap');
  buttons.forEach(button => {
      button.addEventListener('click', function() {
          const targetId = this.getAttribute('data-target');

          // 모든 div 숨기기
          allDivs.forEach(div => {
              div.style.display = 'none'; // 기본적으로 모든 콘텐츠 숨김
          });

          // 선택된 div만 보이기
          const targetDiv = document.getElementById(targetId);
          targetDiv.style.display = 'block'; // 클릭한 버튼에 해당하는 콘텐츠 보여줌
          wrap.style.display = 'flex'; // 해당 요소 하나이기때문에 wrap의 display를 flex로 변경
          wrap.style.justifyContent = 'center'; // justifycontent 활용하여 해당 요소 중앙에 위치

          // 모든 버튼의 active 클래스 제거
          buttons.forEach(btn => {
            btn.classList.remove('active'); 
        });

        // 클릭한 버튼에 active 클래스 추가
        this.classList.add('active'); 

      });
  });

  // Show All 버튼 클릭 시 모든 div 보이기
  const showAllButton = document.querySelector('.work__box__btn__all');
  showAllButton.addEventListener('click', function() {
      allDivs.forEach(div => {
          div.style.display = 'block'; // 모든 콘텐츠 보여줌
          wrap.style.display = 'grid';          
      });

      // 모든 버튼의 active 클래스 제거
      buttons.forEach(btn => {
        btn.classList.remove('active'); 
    });

    // 클릭한 버튼에 active 클래스 추가
    this.classList.add('active'); 
  });
});


// Arrow up 버튼 아래로 스크롤시 투명하게 처리
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll' , () => {
  if( window.scrollY > homeHeight / 2 ) {
    arrowUp.style.opacity = 1;
  } else {
    arrowUp.style.opacity = 0;
  }
})

// Arrow btn - up
const headerHome = document.querySelector('#header__menu__home');
arrowUp.addEventListener('click' , () => {
  scrollIntoView('#home');

  // //먼저 heaer item들 active 클래스 지우기
  // //queryselectorall은 선택한 요소들은 NodeList를 반환 -> 반복문을 사용 필요
  // headerMenuItem.forEach(item => item.classList.remove('active'));

  // // header menu item 중 home에 active 클래스 추가
  // headerHome.classList.add('active');
})

// 현재 카테고리 추적 변수
let currentCategory = 'all';

// 링크 열기 함수들
function open_bsd() {
  window.open("bsd.html", "_blank", "width=700, height=700");
}

function open_readme_bsd() {
  window.open("https://uncovered-bonsai-1f5.notion.site/PROJECT-4f4f88cbc6ff4058b0141b6e56f3c2df?pvs=74", "_blank");
}

function open_genie() {
  window.open("https://github.com/blueneyes1/Genies_Lamp", "_blank");
}

function open_readme_genie() {
  window.open("https://uncovered-bonsai-1f5.notion.site/PROJECT-1309d64fae3d8060a853cc0981d62340", "_blank");
}

function open_yet() {
  window.open("yetflix.html", "_blank", "width=700, height=900");
}

function open_readme_yet() {
  window.open("https://github.com/yuha-park/react-movie-app?tab=readme-ov-file", "_blank");
}

// 모든 work__box 숨기기
const allDivs = document.querySelectorAll('.work__box');

// 비디오 버튼에 클릭 이벤트 추가
document.querySelectorAll('.work__btn input[type="button"]').forEach(button => {
  button.addEventListener('click', function(event) {
    event.stopPropagation(); // 이벤트 전파 방지

    // 클릭한 버튼의 부모 요소에서 work__box의 ID 찾기
    const targetId = this.closest('.work__box').id;

    // 새 창 열기
    if (this.value === "VIDEO") {
      if (targetId === "work__box__one") {
        open_bsd();
      } else if (targetId === "work__box__two") {
        open_genie();
      }
    }

    // 클릭 후 현재 카테고리 유지
    allDivs.forEach(div => {
      div.style.display = 'none'; // 모든 박스 숨김
    });

    if (currentCategory === 'all') {
      allDivs.forEach(div => {
        div.style.display = 'block'; // 모든 박스 보여줌
      });
    } else {
      const targetDiv = document.getElementById(currentCategory);
      targetDiv.style.display = 'block'; // 현재 카테고리만 보여줌
    }
  });
});

// work 버튼 클릭 시 현재 카테고리 설정
const buttons = document.querySelectorAll('.work__box__btn');
buttons.forEach(button => {
  button.addEventListener('click', function() {
    if (this.classList.contains('work__box__btn__all')) {
      currentCategory = 'all';
    } else {
      currentCategory = this.getAttribute('data-target');
    }
    
    // 선택된 카테고리에 따라 박스 보이기
    allDivs.forEach(div => {
      div.style.display = 'none'; // 모든 박스 숨김
    });

    if (currentCategory === 'all') {
      allDivs.forEach(div => {
        div.style.display = 'block'; // 모든 박스 보여줌
      });
    } else {
      const targetDiv = document.getElementById(currentCategory);
      targetDiv.style.display = 'block'; // 현재 카테고리만 보여줌
    }
    
    // 활성화된 클래스 관리
    buttons.forEach(btn => btn.classList.remove('active'));
    this.classList.add('active');
  });
});