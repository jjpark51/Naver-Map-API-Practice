$(function() {
  
    initMap();
    
  });
  
    
    
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
 {location : '국졔식당' , lat : '37.2979487' , lng : '126.9732216', description: '율전에서 이색적인 음식을 먹고싶다면!', imageTag: 'img/test11.png', type: 'Food'},

);
  
  
  function initMap() { 
    
    
  
  
    
  
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
  
    // Make an event for the map
  
  
    
    
   // 지역을 담은 배열의 길이만큼 for문으로 마커와 정보창을 채워주자 !
  
   // We are taking our predefined marker information into the markers, infoWindows array
  
    

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
             content: `<div class="infoTab" style="width:200px;text-align:center;padding:10px;"><b><div class="imageplace" style="background-image: url(${areaArr[i].imageTag})"></div>`
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

  function markerDisplay(define) {
    console.log("123")
    console.log(define)
    console.log("end")
    let newMarkers = []

    for(let i = 0; i < markers.length; i++) { // markers를 초기화하는 부분
        console.log("We hide the markers on map")
        markers[i].setMap(null) // We make sure that markers doesn't appear on the map
    }

    if(define == "All") {
        for(let i = 0; i < markers.length; i++) {
            console.log("We show all markers")
            console.log(markers[i])
            markers[i].setMap(map);
            newMarkers.push(markers[i])
        }      
    }
    else {
        for(let i =0 ; i < markers.length; i++) {
            console.log(markers[i].type)
            if(define == markers[i].type) {
                console.log("show" + markers[i].type)
                markers[i].setMap(map);
                newMarkers.push(markers[i]);
            }
            else {
                console.log("hide" + markers[i].type)
                markers[i].setMap(null)
            }
        }
    }
  }