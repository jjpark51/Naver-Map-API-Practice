$(function() {
    

    initMap();
    
  });
  

  let _BASE = new naver.maps.LatLng(37.2939419, 126.9754234);
    let _ZOOM = 16;
  
  
  
    // Map Options
    var mapOptions = {
      center: _BASE, //지도 시작 지점
      zoom: _ZOOM,
      zoomControl: true,
      zoomControlOptions: {
              position: naver.maps.Position.TOP_LEFT,
              style: naver.maps.ZoomControlStyle.SMALL
          },
      scaleControl: true,
      scaleControlOptions: {position: naver.maps.Position.BOTTOM_RIGHT},
    };
    // Here we render Naver Map 
    var map = new naver.maps.Map('map', mapOptions)
    
  let markers = new Array(); // 마커 정보를 담는 배열
  let infoWindows = new Array(); // 정보창을 담는 배열
  let areaArr = new Array();  // 지역을 담는 배열 ( 지역명/위도경도 )
  
  let hangoutList = []
  areaArr.push(
    /*지역구 이름*/         /*위도*/               /*경도*/            
 {location : '본찌돈까스' , lat : '37.2971523' , lng : '126.9715006', description: '율전에서 이색적인 음식을 먹고싶다면!', imageTag: 'img/test0.png', type: 'Food'},  // 강남구 중심좌표
 {location : '벨라튀니지' , lat : '37.2972199' , lng : '126.9713739', description: '율전에서 이색적인 음식을 먹고싶다면!', imageTag: 'img/test1.png', type: 'Food'},  // 강동구 중심좌표
 {location : '알촌' , lat : '37.297476' , lng : '126.9717054', description: '율전에서 이색적인 음식을 먹고싶다면!', imageTag: 'img/test2.png', type: 'Food'},  // 강북구 중심좌표
 {location : '무대포핫도그' , lat : '37.2969972' , lng : '126.9712576', description: '율전에서 이색적인 음식을 먹고싶다면!', imageTag: 'img/test3.png', type: 'Food'},  // 강서구 중심좌표
 {location : '힌카쿠' , lat : '37.2979467' , lng : '126.9721954', description: '율전에서 이색적인 음식을 먹고싶다면!', imageTag: 'img/test4.png', type: 'Food'},
 {location : '깡우동' , lat : '37.2984079' , lng : '126.9704937', description: '율전에서 이색적인 음식을 먹고싶다면!', imageTag: 'img/test5.png', type: 'Food'},
 {location : '무대포핫도그' , lat : '37.2981136' , lng : '126.9706376', description: '율전에서 이색적인 음식을 먹고싶다면!', imageTag: 'img/test6.png', type: 'Food'},
 {location : '독산성 족발&순대국' , lat : '37.2982302' , lng : '126.9712576', description: '율전에서 이색적인 음식을 먹고싶다면!', imageTag: 'img/test7.png', type: 'Food'},
 {location : '충만치킨' , lat : '37.2985579' , lng : '126.9696108', description: '율전에서 이색적인 음식을 먹고싶다면!', imageTag: 'img/test8.png', type: 'Food'},
 {location : '자명문' , lat : '37.2992317' , lng : '126.9699131', description: '율전에서 이색적인 음식을 먹고싶다면!', imageTag: 'img/test9.png', type: 'Cafe'},
 {location : '먹깨비김밥' , lat : '37.2986624' , lng : '126.971376', description: '율전에서 이색적인 음식을 먹고싶다면!', imageTag: 'img/test10.png', type: 'Food'},
 {location : '국제식당' , lat : '37.2979487' , lng : '126.9732216', description: '율전에서 이색적인 음식을 먹고싶다면!', imageTag: 'img/test11.png', type: 'Food'},
 {location : '성대목장' , lat : '37.2969672' , lng :'126.9692569', description: '율전에서 이색적인 음식을 먹고 싶다면!', imageTag: 'img/test12.png',type:'Food'},
 {location : '성대찌개고을' , lat : '37.2971789' , lng :'126.96936', description: '율전에서 이색적인 음식을 먹고 싶다면!', imageTag: 'img/test13.png',type:'Food'},
 {location : '명가양꼬치' , lat : '37.2967229' , lng :'126.9691429', description: '율전에서 이색적인 음식을 먹고 싶다면!', imageTag: 'img/test14.png',type:'Food'},
 {location : '커피트리' , lat : '37.2968783' , lng :'126.9701243', description: '율전에서 이색적인 음식을 먹고 싶다면!', imageTag: 'img/test15.png',type:'Cafe'},
 {location : '카페더쉐어' , lat : '37.2971137' , lng :'126.9682585', description: '율전에서 이색적인 음식을 먹고 싶다면!', imageTag: 'img/test16.png',type:'Cafe'},
 {location : '카페로브' , lat : '37.296911' , lng :'126.968156', description: '율전에서 이색적인 음식을 먹고 싶다면!', imageTag: 'img/test17.png',type:'Cafe'},
 {location : '사거리다방' , lat : '37.2971214' , lng :'126.9682363', description: '율전에서 이색적인 음식을 먹고 싶다면!', imageTag: 'img/test18.png',type:'Cafe'},
 {location : '섬세한남자' , lat : '37.2977115' , lng :'126.9685395', description: '율전에서 이색적인 음식을 먹고 싶다면!', imageTag: 'img/test19.png',type:'Cafe'},
 {location : '태영생막창' , lat : '37.297833' , lng :'126.9685266', description: '율전에서 이색적인 음식을 먹고 싶다면!', imageTag: 'img/test20.png',type:'Food'},
 {location : '칼국수여행' , lat : '37.2977383' , lng :'126.9688166', description: '율전에서 이색적인 음식을 먹고 싶다면!', imageTag: 'img/test21.png',type:'Food'},
 {location : '포동이네' , lat : '37.2979313' , lng :'126.9689787', description: '율전에서 이색적인 음식을 먹고 싶다면!', imageTag: 'img/test22.png',type:'Food'},
 {location : '경기수산' , lat : '37.2980763' , lng :'126.968677', description: '율전에서 이색적인 음식을 먹고 싶다면!', imageTag: 'img/test23.png',type:'Food'},
 {location : '바다참치' , lat : '37.2985145' , lng :'126.9712435', description: '율전에서 이색적인 음식을 먹고 싶다면!', imageTag: 'img/test24.png',type:'Food'},
 {location : '독도참치' , lat : '37.2991013' , lng :'126.9711644', description: '율전에서 이색적인 음식을 먹고 싶다면!', imageTag: 'img/test25.png',type:'Food'},
 {location : '짬뽕타임' , lat : '37.2985426' , lng :'126.9693008', description: '율전에서 이색적인 음식을 먹고 싶다면!', imageTag: 'img/test26.png',type:'Food'},
 {location : '르디망슈' , lat : '37.2988341' , lng :'126.968734', description: '율전에서 이색적인 음식을 먹고 싶다면!', imageTag: 'img/test27.png',type:'Cafe'},
 {location : '정성가득찬' , lat : '37.2979929' , lng :'126.9678454', description: '율전에서 이색적인 음식을 먹고 싶다면!', imageTag: 'img/test28.png',type:'Food'},
 {location : '또봉이통닭' , lat : '37.2984338' , lng :'126.9676702', description: '율전에서 이색적인 음식을 먹고 싶다면!', imageTag: 'img/test29.png',type:'Food'},
 {location : '회좋아' , lat : '37.2982738' , lng :'126.9676137', description: '율전에서 이색적인 음식을 먹고 싶다면!', imageTag: 'img/test30.png',type:'Food'},
 {location : '모닝꼬마김밥' , lat : '37.2979471' , lng :'126.9673452', description: '율전에서 이색적인 음식을 먹고 싶다면!', imageTag: 'img/test31.png',type:'Food'},
 {location : '롤랑까페' , lat : '37.2977069' , lng :'126.9673613', description: '율전에서 이색적인 음식을 먹고 싶다면!', imageTag: 'img/test32.png',type:'Food'},
 {location : '미스꼬꼬' , lat : '37.2988094' , lng :'126.967656', description: '율전에서 이색적인 음식을 먹고 싶다면!', imageTag: 'img/test33.png',type:'Food'},
 {location : '미쳐라' , lat : '37.2989657' , lng :'126.9677024', description: '율전에서 이색적인 음식을 먹고 싶다면!', imageTag: 'img/test34.png',type:'Food'},
 {location : '모수밀면' , lat : '37.2988341' , lng :'126.968734', description: '율전에서 이색적인 음식을 먹고 싶다면!', imageTag: 'img/test35.png',type:'Food'},
 {location : '한둘분식' , lat : '37.2986997' , lng :'126.9692276', description: '율전에서 이색적인 음식을 먹고 싶다면!', imageTag: 'img/test36.png',type:'Food'},
 {location : '채움거진코다리네' , lat : '37.2988185' , lng :'126.9694155', description: '율전에서 이색적인 음식을 먹고 싶다면!', imageTag: 'img/test37.png',type:'Food'},
 {location : '어반그레이' , lat : '37.2989143' , lng :'126.9693341', description: '율전에서 이색적인 음식을 먹고 싶다면!', imageTag: 'img/test38.png',type:'Cafe'},
 {location : '오디디' , lat : '37.2987629' , lng :'126.9698674', description: '율전에서 이색적인 음식을 먹고 싶다면!', imageTag: 'img/test39.png',type:'Cafe'},
 {location : '피자스쿨' , lat : '37.2987629' , lng :'126.9698674', description: '율전에서 이색적인 음식을 먹고 싶다면!', imageTag: 'img/test40.png',type:'Food'},
 {location : '자명문' , lat : '37.2992317' , lng :'126.9699131', description: '율전에서 이색적인 음식을 먹고 싶다면!', imageTag: 'img/test41.png',type:'Food'},
 {location : '인더비엣' , lat : '37.2988669' , lng :'126.9705375', description: '율전에서 이색적인 음식을 먹고 싶다면!', imageTag: 'img/test42.png',type:'Food'},
 {location : '대동집' , lat : '37.2989289' , lng :'126.9700998', description: '율전에서 이색적인 음식을 먹고 싶다면!', imageTag: 'img/test43.png',type:'Food'},
 {location : '김씨화로' , lat : '37.2994117' , lng :'126.9701733', description: '율전에서 이색적인 음식을 먹고 싶다면!', imageTag: 'img/test44.png',type:'Food'},
 {location : '옥집' , lat : '37.2986458' , lng :'126.9707803', description: '율전에서 이색적인 음식을 먹고 싶다면!', imageTag: 'img/test45.png',type:'Food'},
 {location : '황금족발' , lat : '37.2983174' , lng :'126.9710333', description: '율전에서 이색적인 음식을 먹고 싶다면!', imageTag: 'img/test46.png',type:'Food'},
 {location : '빽다방' , lat : '37.2987735' , lng :'126.971322', description: '율전에서 이색적인 음식을 먹고 싶다면!', imageTag: 'img/test47.png',type:'Cafe'},
 {location : '명륜진사갈비' , lat : '37.298892' , lng :'126.971302', description: '율전에서 이색적인 음식을 먹고 싶다면!', imageTag: 'img/test48.png',type:'Food'},
 {location : '북한산조개구이' , lat : '37.2990396' , lng :'126.9712832', description: '율전에서 이색적인 음식을 먹고 싶다면!', imageTag: 'img/test49.png',type:'Food'},
 {location : '스타벅스' , lat : '37.2988351' , lng :'126.9715664', description: '율전에서 이색적인 음식을 먹고 싶다면!', imageTag: 'img/test50.png',type:'Cafe'},
 {location : '이라부' , lat : '37.2990353' , lng :'126.9717586', description: '율전에서 이색적인 음식을 먹고 싶다면!', imageTag: 'img/test51.png',type:'Food'},
 {location : '요거베리' , lat : '37.2996087' , lng :'126.9717982', description: '율전에서 이색적인 음식을 먹고 싶다면!', imageTag: 'img/test52.png',type:'Cafe'},
 {location : '엉터리생고기' , lat : '37.2993022' , lng :'126.9711594', description: '율전에서 이색적인 음식을 먹고 싶다면!', imageTag: 'img/test53.png',type:'Food'},
 {location : '오르카커피룸' , lat : '37.2996845' , lng :'126.9706692', description: '율전에서 이색적인 음식을 먹고 싶다면!', imageTag: 'img/test54.png',type:'Cafe'},
 {location : '택이네조개전골' , lat : '37.2991652' , lng :'126.9701895', description: '율전에서 이색적인 음식을 먹고 싶다면!', imageTag: 'img/test55.png',type:'Food'},
 {location : '수코미치' , lat : '37.2991485' , lng :'126.9706186', description: '율전에서 이색적인 음식을 먹고 싶다면!', imageTag: 'img/test56.png',type:'Food'},
 {location : '사우스스트릿' , lat : '37.2981546' , lng :'126.9689075', description: '율전에서 이색적인 음식을 먹고 싶다면!', imageTag: 'img/test57.png',type:'Food'},
 {location : '썬더치킨' , lat : '37.298132' , lng :'126.9690739', description: '율전에서 이색적인 음식을 먹고 싶다면!', imageTag: 'img/test58.png',type:'Food'},
 {location : '한입닭강정' , lat : '37.2981378' , lng :'126.9689589', description: '율전에서 이색적인 음식을 먹고 싶다면!', imageTag: 'img/test59.png',type:'Food'},
 {location : '오스트리아우노' , lat : '37.2981548' , lng :'126.9692553', description: '율전에서 이색적인 음식을 먹고 싶다면!', imageTag: 'img/test60.png',type:'Food'},
 {location : 'CafeDeManuale' , lat : '37.2980499' , lng :'126.9692184', description: '율전에서 이색적인 음식을 먹고 싶다면!', imageTag: 'img/test61.png',type:'Cafe'},
 {location : '가장맛있는족발' , lat : '37.2980261' , lng :'126.9692339', description: '율전에서 이색적인 음식을 먹고 싶다면!', imageTag: 'img/test62.png',type:'Food'},
 {location : '자장수전주콩나물국밥' , lat : '37.2983027' , lng :'126.9693116', description: '율전에서 이색적인 음식을 먹고 싶다면!', imageTag: 'img/test63.png',type:'Food'},
 {location : '한둘분식' , lat : '37.2986997' , lng :'126.9692276', description: '율전에서 이색적인 음식을 먹고 싶다면!', imageTag: 'img/test64.png',type:'Food'},
 {location : '채움거진코다리네' , lat : '37.2988185' , lng :'126.9694155', description: '율전에서 이색적인 음식을 먹고 싶다면!', imageTag: 'img/test65.png',type:'Food'},
 {location : '슈가블랑' , lat : '37.294569' , lng :'126.9677094', description: '율전에서 이색적인 음식을 먹고 싶다면!', imageTag: 'img/test66.png',type:'Cafe'},
 {location : '디아카페' , lat : '37.2944595' , lng :'126.9679365', description: '율전에서 이색적인 음식을 먹고 싶다면!', imageTag: 'img/test67.png',type:'Cafe'},
 {location : '율전동미미' , lat : '37.2962057' , lng :'126.9682937', description: '율전에서 이색적인 음식을 먹고 싶다면!', imageTag: 'img/test68.png',type:'Cafe'},
 {location : '베베' , lat : '37.2962899' , lng :'126.9678518', description: '율전에서 이색적인 음식을 먹고 싶다면!', imageTag: 'img/test69.png',type:'Cafe'},
 {location : '금자만두' , lat : '37.2962512' , lng :'126.9677451', description: '율전에서 이색적인 음식을 먹고 싶다면!', imageTag: 'img/test70.png',type:'Food'},
 {location : '예감쪽갈비' , lat : '37.2965356' , lng :'126.9687496', description: '율전에서 이색적인 음식을 먹고 싶다면!', imageTag: 'img/test71.png',type:'Food'},
 {location : '콤마' , lat : '37.2966372' , lng :'126.968614', description: '율전에서 이색적인 음식을 먹고 싶다면!', imageTag: 'img/test72.png',type:'Cafe'},
 {location : '생각나는순대국' , lat : '37.296755' , lng :'126.9682785', description: '율전에서 이색적인 음식을 먹고 싶다면!', imageTag: 'img/test73.png',type:'Food'},
 {location : '카페로브' , lat : '37.296911' , lng :'126.968156', description: '율전에서 이색적인 음식을 먹고 싶다면!', imageTag: 'img/test74.png',type:'Cafe'},
 {location : '빨간석쇠구이' , lat : '37.2969535' , lng :'126.9684989', description: '율전에서 이색적인 음식을 먹고 싶다면!', imageTag: 'img/test75.png',type:'Food'},
 {location : '카와마루아지' , lat : '37.2969036' , lng :'126.968736', description: '율전에서 이색적인 음식을 먹고 싶다면!', imageTag: 'img/test76.png',type:'Food'},
 {location : '반갑다친구야' , lat : '37.2968932' , lng :'126.9690425', description: '율전에서 이색적인 음식을 먹고 싶다면!', imageTag: 'img/test77.png',type:'Food'},
 {location : '안서동야곱집' , lat : '37.2970303' , lng :'126.9690541', description: '율전에서 이색적인 음식을 먹고 싶다면!', imageTag: 'img/test78.png',type:'Food'},
 {location : '선참치' , lat : '37.2970303' , lng :'126.9690541', description: '율전에서 이색적인 음식을 먹고 싶다면!', imageTag: 'img/test79.png',type:'Food'},
 {location : '순' , lat : '37.2971518' , lng :'126.9688273', description: '율전에서 이색적인 음식을 먹고 싶다면!', imageTag: 'img/test80.png',type:'Cafe'},
 {location : '홍추곱창카페' , lat : '37.2972039' , lng :'126.9686988', description: '율전에서 이색적인 음식을 먹고 싶다면!', imageTag: 'img/test81.png',type:'Food'},
 {location : 'intensecoffee' , lat : '37.2972745' , lng :'126.9688977', description: '율전에서 이색적인 음식을 먹고 싶다면!', imageTag: 'img/test82.png',type:'Cafe'},
 {location : '뎅과꼬치로' , lat : '37.2972348' , lng :'126.9691551', description: '율전에서 이색적인 음식을 먹고 싶다면!', imageTag: 'img/test83.png',type:'Food'},
 {location : 'Manda' , lat : '37.2970833' , lng :'126.9695785', description: '율전에서 이색적인 음식을 먹고 싶다면!', imageTag: 'img/test84.png',type:'Food'},
 {location : '항아리보쌈' , lat : '37.2970011' , lng :'126.9698686', description: '율전에서 이색적인 음식을 먹고 싶다면!', imageTag: 'img/test85.png',type:'Food'},
 {location : '차돌풍' , lat : '37.297088' , lng :'126.9698846', description: '율전에서 이색적인 음식을 먹고 싶다면!', imageTag: 'img/test86.png',type:'Food'},
 {location : '정든닭발' , lat : '37.2970518' , lng :'126.9701761', description: '율전에서 이색적인 음식을 먹고 싶다면!', imageTag: 'img/test87.png',type:'Food'},
 {location : '미가라멘' , lat : '37.2971985' , lng :'126.9701616', description: '율전에서 이색적인 음식을 먹고 싶다면!', imageTag: 'img/test88.png',type:'Food'},
 {location : '영희네고기' , lat : '37.2972913' , lng :'126.9702631', description: '율전에서 이색적인 음식을 먹고 싶다면!', imageTag: 'img/test89.png',type:'Food'},
 {location : '한마리정육식당' , lat : '37.2975258' , lng :'126.9700526', description: '율전에서 이색적인 음식을 먹고 싶다면!', imageTag: 'img/test90.png',type:'Food'},
 {location : '목구멍' , lat : '37.2976242' , lng :'126.9701391', description: '율전에서 이색적인 음식을 먹고 싶다면!', imageTag: 'img/test91.png',type:'Food'},
 {location : '육회독존' , lat : '37.297693' , lng :'126.9701437', description: '율전에서 이색적인 음식을 먹고 싶다면!', imageTag: 'img/test92.png',type:'Food'},
 {location : '마포구이촌' , lat : '37.2975555' , lng :'126.9703847', description: '율전에서 이색적인 음식을 먹고 싶다면!', imageTag: 'img/test93.png',type:'Food'},
 {location : '블랙스미스' , lat : '37.2976624' , lng :'126.970452', description: '율전에서 이색적인 음식을 먹고 싶다면!', imageTag: 'img/test94.png',type:'Food'},
 {location : '한창희천하일면' , lat : '37.2977394' , lng :'126.9702223', description: '율전에서 이색적인 음식을 먹고 싶다면!', imageTag: 'img/test95.png',type:'Food'},
 {location : '백령도생바지락칼국수' , lat : '37.2975303' , lng :'126.9703644', description: '율전에서 이색적인 음식을 먹고 싶다면!', imageTag: 'img/test96.png',type:'Food'},
 {location : '1인자감자탕뼈해장국' , lat : '37.2977889' , lng :'126.9704898', description: '율전에서 이색적인 음식을 먹고 싶다면!', imageTag: 'img/test97.png',type:''},
 {location : '롯데리아' , lat : '37.297892' , lng :'126.9708526', description: '율전에서 이색적인 음식을 먹고 싶다면!', imageTag: 'img/test98.png',type:'Food'},
 {location : '두미르퓨전포차' , lat : '37.2979023' , lng :'126.9705852', description: '율전에서 이색적인 음식을 먹고 싶다면!', imageTag: 'img/test99.png',type:'Food'},
 {location : '청년다방' , lat : '37.2981136' , lng :'126.9706376', description: '율전에서 이색적인 음식을 먹고 싶다면!', imageTag: 'img/test100.png',type:'Food'},
 {location : '화락바베큐치킨' , lat : '37.2980187' , lng :'126.9702896', description: '율전에서 이색적인 음식을 먹고 싶다면!', imageTag: 'img/test101.png',type:'Food'},
 {location : '사랑해' , lat : '37.2979248' , lng :'126.9701665', description: '율전에서 이색적인 음식을 먹고 싶다면!', imageTag: 'img/test102.png',type:'Food'},
 {location : '감스시' , lat : '37.2981617' , lng :'126.9702535', description: '율전에서 이색적인 음식을 먹고 싶다면!', imageTag: 'img/test103.png',type:'Food'},
 {location : '홍매스시' , lat : '37.2982238' , lng :'126.9696266', description: '율전에서 이색적인 음식을 먹고 싶다면!', imageTag: 'img/test104.png',type:'Food'},
 {location : '보영만두' , lat : '37.2983513' , lng :'126.970473', description: '율전에서 이색적인 음식을 먹고 싶다면!', imageTag: 'img/test105.png',type:'Food'},
 {location : '커피볶는J2M' , lat : '37.2983694' , lng :'126.970307', description: '율전에서 이색적인 음식을 먹고 싶다면!', imageTag: 'img/test106.png',type:'Cafe'},
 {location : '퓨전포차포차' , lat : '37.298542' , lng :'126.970457', description: '율전에서 이색적인 음식을 먹고 싶다면!', imageTag: 'img/test107.png',type:'Food'},
 {location : '제주도식당' , lat : '37.2977341' , lng :'126.9695335', description: '율전에서 이색적인 음식을 먹고 싶다면!', imageTag: 'img/test108.png',type:'Food'},
 {location : '마포갈비' , lat : '37.2978563' , lng :'126.9699188', description: '율전에서 이색적인 음식을 먹고 싶다면!', imageTag: 'img/test109.png',type:'Food'},
 {location : '보리네주먹고기' , lat : '37.2977199' , lng :'126.9691362', description: '율전에서 이색적인 음식을 먹고 싶다면!', imageTag: 'img/test110.png',type:'Food'},
 {location : '고기굽는교실' , lat : '37.2980876' , lng :'126.9694063', description: '율전에서 이색적인 음식을 먹고 싶다면!', imageTag: 'img/test111.png',type:'Food'},
 {location : '처갓집양념치킨' , lat : '37.2979471' , lng :'126.9673452', description: '율전에서 이색적인 음식을 먹고 싶다면!', imageTag: 'img/test112.png',type:'Food'},
 {location : '만리향' , lat : '37.2985395' , lng :'126.9662004', description: '율전에서 이색적인 음식을 먹고 싶다면!', imageTag: 'img/test113.png',type:'Food'},
 {location : '페리카나' , lat : '37.2985951' , lng :'126.9660616', description: '율전에서 이색적인 음식을 먹고 싶다면!', imageTag: 'img/test114.png',type:'Food'},
 {location : '포명천천' , lat : '37.298846' , lng :'126.9658633', description: '율전에서 이색적인 음식을 먹고 싶다면!', imageTag: 'img/test115.png',type:'Food'},
 {location : '일구오삼' , lat : '37.2992653' , lng :'126.9651684', description: '율전에서 이색적인 음식을 먹고 싶다면!', imageTag: 'img/test116.png',type:'Cafe'},
 {location : '청춘핫도그' , lat : '37.2997419' , lng :'126.9666067', description: '율전에서 이색적인 음식을 먹고 싶다면!', imageTag: 'img/test117.png',type:'Food'},
 {location : '달콤한쌈이야기' , lat : '37.2997917' , lng :'126.9679955', description: '율전에서 이색적인 음식을 먹고 싶다면!', imageTag: 'img/test118.png',type:'Food'},
 {location : '오늘도족발' , lat : '37.2959789' , lng :'126.9667958', description: '율전에서 이색적인 음식을 먹고 싶다면!', imageTag: 'img/test119.png',type:'Food'},
 {location : '하얀집' , lat : '37.2965344' , lng :'126.969376', description: '율전에서 이색적인 음식을 먹고 싶다면!', imageTag: 'img/test120.png',type:'Food'},
 {location : '마포화곱창' , lat : '37.2966388' , lng :'126.9697328', description: '율전에서 이색적인 음식을 먹고 싶다면!', imageTag: 'img/test121.png',type:'Food'},
 {location : '월드오징어바다' , lat : '37.296715' , lng :'126.9695879', description: '율전에서 이색적인 음식을 먹고 싶다면!', imageTag: 'img/test122.png',type:'Food'},
 {location : '춘천닭갈비칡냉면' , lat : '37.2969566' , lng :'126.9698712', description: '율전에서 이색적인 음식을 먹고 싶다면!', imageTag: 'img/test123.png',type:'Food'},
 {location : '인생삼겹' , lat : '37.2971782' , lng :'126.9702071', description: '율전에서 이색적인 음식을 먹고 싶다면!', imageTag: 'img/test124.png',type:'Food'},

);
  
  
  function initMap() {   
    

    for (var i = 0; i < areaArr.length; i++) {
  
        var marker = new naver.maps.Marker({
            map: map,
            title: areaArr[i].location, // 지역구 이름 
            position: new naver.maps.LatLng(areaArr[i].lat , areaArr[i].lng), // 지역구의 위도 경도 넣기
            type: areaArr[i].type,
            draggable: false 
        });
        console.log("Marker check")
        
        /* 정보창 */
         var infoWindow = new naver.maps.InfoWindow({
             content: `<div class="infoTab" style="width:200px;text-align:center;padding:10px;border-radius:5px;"><b><div class="imageplace" style="background-image: url(${areaArr[i].imageTag})"></div>`
               + areaArr[i].location + '</b><br>' + areaArr[i].description +
               `<br><button class="submit" onclick=listAdd(${i})>Add</button>`
  
         }); // 클릭했을 때 띄워줄 정보 HTML 작성
        
         markers.push(marker); // 생성한 마커를 배열에 담는다.
         infoWindows.push(infoWindow); // 생성한 정보창을 배열에 담는다.
    }
    

    console.log(markers)
    console.log(infoWindows);
    // This displays all of the markers when the map loads
    
     
    // This opens up the info when we click on the marker
    function getClickHandler(seq) {
        
            return function(e) {  // 마커를 클릭하는 부분
                var marker = markers[seq], // 클릭한 마커의 시퀀스로 찾는다.
                    infoWindow = infoWindows[seq]; // 클릭한 마커의 시퀀스로 찾는다
  
                if (infoWindow.getMap()) {
                    infoWindow.close(); // We close the info tab if we already clicked on it
                } else {
                    infoWindow.open(map, marker); // 표출
                }
            }
      }
  
       // naver.maps.Event.addListener(map, 'click', newMarker(seq))
  
    
        // This function pops up the info when we click on the according marker
    for (var i=0, ii=markers.length; i< ii; i++) { 
        console.log(markers[i] , getClickHandler(i));
        naver.maps.Event.addListener(markers[i], 'click', getClickHandler(i)); // 클릭한 마커 핸들러
    }
  
    var polyline = new naver.maps.Polyline({
      map: map,
      path: [
          new naver.maps.LatLng(37.298868, 126.975896),
          new naver.maps.LatLng(37.300494, 126.965057),
          new naver.maps.LatLng(37.298898, 126.964843),
          new naver.maps.LatLng(37.294574, 126.967658),
          new naver.maps.LatLng(37.294321, 126.970024),
          new naver.maps.LatLng(37.290828, 126.969879),
          new naver.maps.LatLng(37.288200, 126.977581),
          new naver.maps.LatLng(37.288855, 126.979122),
          new naver.maps.LatLng(37.290626, 126.983955),
          new naver.maps.LatLng(37.296923, 126.978348),
          new naver.maps.LatLng(37.298868, 126.975896),
  
          ]
      });
  
  
      
  }
  
  
  function maskerCluster(){
      var htmlMarker1 = {
          content: '<div style="cursor:pointer;width:40px;height:40px;line-height:42px;font-size:10px;color:white;text-align:center;font-weight:bold;background:url(https://navermaps.github.io/maps.js.ncp/docs/img/cluster-marker-1.png);background-size:contain;"></div>',
          size: N.Size(40, 40),
          anchor: N.Point(20, 20)
      },
      htmlMarker2 = {
          content: '<div style="cursor:pointer;width:40px;height:40px;line-height:42px;font-size:10px;color:white;text-align:center;font-weight:bold;background:url(https://navermaps.github.io/maps.js.ncp/docs/img/cluster-marker-2.png);background-size:contain;"></div>',
          size: N.Size(40, 40),
          anchor: N.Point(20, 20)
      },
      htmlMarker3 = {
          content: '<div style="cursor:pointer;width:40px;height:40px;line-height:42px;font-size:10px;color:white;text-align:center;font-weight:bold;background:url(https://navermaps.github.io/maps.js.ncp/docs/img/cluster-marker-3.png);background-size:contain;"></div>',
          size: N.Size(40, 40),
          anchor: N.Point(20, 20)
      },
      htmlMarker4 = {
          content: '<div style="cursor:pointer;width:40px;height:40px;line-height:42px;font-size:10px;color:white;text-align:center;font-weight:bold;background:url(https://navermaps.github.io/maps.js.ncp/docs/img/cluster-marker-4.png);background-size:contain;"></div>',
          size: N.Size(40, 40),
          anchor: N.Point(20, 20)
      },
      htmlMarker5 = {
          content: '<div style="cursor:pointer;width:40px;height:40px;line-height:42px;font-size:10px;color:white;text-align:center;font-weight:bold;background:url(https://navermaps.github.io/maps.js.ncp/docs/img/cluster-marker-5.png);background-size:contain;"></div>',
          size: N.Size(40, 40),
          anchor: N.Point(20, 20)
      };
  
  
      var markerClustering = new MarkerClustering({
          minClusterSize: 2,
          maxZoom: 13,
          map: map,
          markers: markers,
          disableClickZoom: false,
          gridSize: 120,
          icons: [htmlMarker1, htmlMarker2, htmlMarker3, htmlMarker4, htmlMarker5],
          indexGenerator: [10, 100, 200, 500, 1000],
          stylingFunction: function(clusterMarker, count) {
              $(clusterMarker.getElement()).find('div:first-child').text(count);
          }
      });
  }
  
  function listAdd(index) {
  
    console.log(index)
    
    let wrapper = document.getElementById('currentList')
    $('#currentList').empty()
    
    
    
    hangoutList.push(areaArr[index].location)
    console.log(areaArr[index].location)
    
    let mapList = document.createElement("div");
    mapList.setAttribute("class", "mapList")
    
    hangoutList.forEach((e) =>
        mapList.innerHTML = e,
        mapList.innerHTML = " , "
    )
    mapList.innerHTML = hangoutList
    
    wrapper.appendChild(mapList)
  
  }

  function Remove() {
    
    let wrapper = document.getElementById('currentList')
    $('#currentList').empty()
    
    
    
    hangoutList.pop()
    console.log(hangoutList)
    
    let mapList = document.createElement("div");
    mapList.setAttribute("class", "mapList")
    
    hangoutList.forEach((e) =>
        mapList.innerHTML = e,
        mapList.innerHTML = " ,"
    )
    mapList.innerHTML = hangoutList
    
    wrapper.appendChild(mapList)
  }

  function Confirm() {
    let schedule = document.getElementById('schedule')

    let final = document.createElement("h3")
    final.innerHTML = hangoutList

    schedule.appendChild(final)


  }

  function markerDisplay(define) {
 
    console.log("we put map as global")

    /*for(let i = 0; i < markers.length; i++) { // markers를 초기화하는 부분
        console.log("We hide the markers on map")
        markers[i].setMap(null) // We make sure that markers doesn't appear on the map
    }*/

    if(define == "All") {
        for(let i = 0; i < markers.length; i++) {
            console.log("We show all markers")
            console.log(markers[i])
            markers[i].setMap(map);
        }      
    }
    else {
        for(let i =0 ; i < markers.length; i++) {
            console.log(markers[i].type)
            if(define == markers[i].type) {
                console.log("show" + markers[i].type)
                markers[i].setMap(map);
            }
            else {
                console.log("hide" + markers[i].type)
                markers[i].setMap(null)
            }
        }
    }

    map.setZoom(15)
  }