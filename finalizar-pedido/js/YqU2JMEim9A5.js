
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/runtime.latest.pt-BR.eeaf8ac33477d1182d99.js","../../cdn.shopify.com/shopifycloud/checkout-web/assets/960.latest.pt-BR.b4fd7fd6ea8aa952eb60.js","../../cdn.shopify.com/shopifycloud/checkout-web/assets/361.latest.pt-BR.a61722cb92409da659d2.js","../../cdn.shopify.com/shopifycloud/checkout-web/assets/706.latest.pt-BR.f2f0d53efc1f5b054632.js","../../cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.pt-BR.e368d5c334eb4960327c.js","../../cdn.shopify.com/shopifycloud/checkout-web/assets/751.latest.pt-BR.c93e6a6b8624ef406214.js","../../cdn.shopify.com/shopifycloud/checkout-web/assets/836.latest.pt-BR.c052446010af61bd7aa9.js","../../cdn.shopify.com/shopifycloud/checkout-web/assets/78.latest.pt-BR.93037259d77deea16aa3.js","../../cdn.shopify.com/shopifycloud/checkout-web/assets/100.latest.pt-BR.313e243f59663328b7ae.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/OnePage.latest.pt-BR.49e4bbd24e86a392aa38.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/960.latest.pt-BR.5ab7c1df0c745fc2f90e.css","../../cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.pt-BR.5e52d9ec000e6dcd2cd6.css","../../cdn.shopify.com/shopifycloud/checkout-web/assets/836.latest.pt-BR.6e0fd6af0121f716b925.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/268.latest.pt-BR.5b7df247927464b44fee.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = [];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res[0], next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET.html', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        })();
      }

      function onLoaded() {
        preconnectAssets();
        prefetchAssets();
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  