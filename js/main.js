'use string';

var tabs = function ($tabsParent, $contentParent, options) {
	var options = options || {};
	var tabClass = options.tabsItemClass || 'tabs__item';
	var tabActiveClass = options.contentClass || 'tabs__item_active';
	var contentClass = options.contentClass || 'tabs-table-content';
	var contentActiveClass = options.contentActiveClass || 'tabs-table-content_active';
	var contents = {};

	var $tabs = $tabsParent.children('.' + tabClass);
	var initContent = $tabs.eq(0).data('content');
	
	activateTab($tabs, initContent, tabActiveClass);
	showContent($contentParent, initContent, contents);

	$tabsParent.on('click', '.' + tabClass, onTabClick);

	function onTabClick (e) {
		var $this = $(this);
		var contentName = $this.data('content');
		activateTab($tabs, contentName, tabActiveClass);
		showContent($contentParent, contentName, contents);
	}
	var onTabClick = function (e) {
		var target = e.target;
		var current = e.currentTarget;
		var contentName; 
		
		while (target !== current) {
			if (target.className === 'tabs__item') {
				contentName = target.dataset.content;
				activateTab(contentName);
				showContent(contentName);
				return;
			}
			target = target.parentElement;
		}
	};

	function activateTab ($tabs, content, activeClass) {
		$tabs.each(function () {
			var $this = $(this);
			var currentContent = $this.data('content');
			if (currentContent !== content) {
				$this.removeClass(activeClass);
				return;
			}
			$this.addClass(activeClass);
		})
	}
	function showContent ($parent, content, contents) {
			var $content;
			if (!contents[content]) {
				$.ajax({
					method: 'GET',
					url: ['api/lorem', content].join('/')
				})
				.then(function (data, status) {
					var res = data.data;
					if (status === 'success') {
						$content = $parent
							.append('div')
							.addClass(contentClass)
							.html('<header class="tabs-table-content__header"><h2 class="text_large text_black">'+ res.head +'</h2></header><p class="tabs-table-content__row"><span class="text_small text_gray">' + res.body + '</span></p>')
							.data('content', content)
					}
					contents[content] = res;
					$parent
						.find('.' + contentClass)
						.removeClass(contentActiveClass)
					$content.addClass(contentActiveClass)
				});
				return;
			}
			$parent
				.find('.' + contentClass)
				.each(function () {
					var $this = $(this);
					var currentContent = $this.data('content');
					if (currentContent !== content) {
						$this.removeClass(contentActiveClass);
						return;
					}
					$this.addClass(contentActiveClass);
				})
		}
	}

tabs($('#tabs'), $('#contents'));



















var a;
setTimeout(function(){
	a = 5;
}, 2000);

asyncF()

function toConsole (p) {
	console.log(p);
}

function asyncF (cb) {
	setTimeout(function (){
		var b = 5;
		cb(b);
	}, 1000)
}
