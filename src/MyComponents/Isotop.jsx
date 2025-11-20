import React, { useEffect } from 'react'
import "../MyComponents/Isotop.css";
import $ from "jquery";
const Isotop = () => {
    useEffect(() => {
        $(document).ready( function() {

            var itemSelector = '.grid-item'; 
        
            var $container = $('#container').isotope({
                itemSelector: itemSelector,
                masonry: {
                  columnWidth: itemSelector,
                  isFitWidth: true
                }
            });
        
            //Ascending order
            var responsiveIsotope = [
                [480, 4],
                [720, 6]
            ];
        
            var itemsPerPageDefault = 5;
            var itemsPerPage = defineItemsPerPage();
            var currentNumberPages = 1;
            var currentPage = 1;
            var currentFilter = '*';
            var filterAtribute = 'data-filter';
            var pageAtribute = 'data-page';
            var pagerClass = 'isotope-pager';
            function changeFilter(selector) {
                $container.isotope({
                    filter: selector
                });
            }
        
          function getFilterSelector() {
            var selector = itemSelector;
            if (currentFilter != '*') {
              selector += `[${filterAtribute}~="${currentFilter}"]`
            }
            return selector;
          }
        
            function goToPage(n) {
                currentPage = n;
        
            var selector = getFilterSelector();
            selector += `[${pageAtribute}="${currentPage}"]`;
        
                changeFilter(selector);
            }
        
            function defineItemsPerPage() {
                var pages = itemsPerPageDefault;
        
                for( var i = 0; i < responsiveIsotope.length; i++ ) {
                    if( $(window).width() <= responsiveIsotope[i][0] ) {
                        pages = responsiveIsotope[i][1];
                        break;
                    }
                }
                return pages;
            }
            function setPagination() {
                var SettingsPagesOnItems = function(){
                    var itemsLength = $container.children(itemSelector).length;
                    var pages = Math.ceil(itemsLength / itemsPerPage);
                    var item = 1;
                    var page = 1;
                    var selector = getFilterSelector();
                    $container.children(selector).each(function(){
                        if( item > itemsPerPage ) {
                            page++;
                            item = 1;
                        }
                        $(this).attr(pageAtribute, page);
                        item++;
                    });
                    currentNumberPages = page;
                }();
                var CreatePagers = function() {
        
                    var $isotopePager = ( $('.'+pagerClass).length == 0 ) ? $('<div class="'+pagerClass+'"></div>') : $('.'+pagerClass);
        
                    $isotopePager.html('');
                    
                    for( var i = 0; i < currentNumberPages; i++ ) {
                        var $pager = $('<a href="javascript:void(0);" class="pager" '+pageAtribute+'="'+(i+1)+'"></a>');
                            $pager.html(i+1);
                            
                            $pager.click(function(){
                                var page = $(this).eq(0).attr(pageAtribute);
                                goToPage(page);
                            });
                        $pager.appendTo($isotopePager);
                    }
                    $container.after($isotopePager);
                }();
            }
            setPagination();
            goToPage(1);
        
            //Adicionando Event de Click para as categorias
            $('.filters a').click(function(){
                var filter = $(this).attr(filterAtribute);
                currentFilter = filter;
        
                setPagination();
                goToPage(1);
            });
            //Evento Responsivo
            $(window).resize(function(){
                itemsPerPage = defineItemsPerPage();
                setPagination();
                goToPage(1);
            });
        });
        });  
    };
//     return (
//        <div>
// <ul class="filters">
// 		<li><a href="javascript:void(0);" data-filter="*">Todos</a></li>
// 		<li><a href="javascript:void(0);" data-filter="nature">Natureza</a></li>
// 		<li><a href="javascript:void(0);" data-filter="dog">Cachorro</a></li>
// 	</ul>
// 	<div id="container" class="isotope">
// 		<div class="grid-item" data-filter="nature"><img src="https://picsum.photos/id/1015/250/250"/></div>
// 		<div class="grid-item" data-filter="nature"><img src="https://picsum.photos/id/1016/250/250"/></div>
// 		<div class="grid-item" data-filter="nature"><img src="https://picsum.photos/id/1018/250/250"/></div>
// 		<div class="grid-item" data-filter="nature"><img src="https://picsum.photos/id/1021/250/250"/></div>
// 		<div class="grid-item" data-filter="nature dog"><img src="https://picsum.photos/id/1025/250/250"/></div>
// 		<div class="grid-item" data-filter="dog"><img src="https://picsum.photos/id/1012/250/250"/></div>
// 		<div class="grid-item" data-filter="nature"><img src="https://picsum.photos/id/10/250/250"/></div>
// 		<div class="grid-item" data-filter="nature"><img src="https://picsum.photos/id/1037/250/250"/></div>
// 		<div class="grid-item" data-filter="dog"><img src="https://picsum.photos/id/1062/250/250"/></div>
// 		<div class="grid-item" data-filter="dog"><img src="https://picsum.photos/id/237/250/250"/></div>
// 	</div>
//        </div>
//   )
// export default Isotop;