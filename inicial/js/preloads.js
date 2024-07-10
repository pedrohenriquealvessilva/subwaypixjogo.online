
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/runtime.latest.pt-BR.15e514e3aab2ffc393e0.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/707.latest.pt-BR.c0f3b88b4758b9949f2c.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/807.latest.pt-BR.09d4ad51f1a2ea359e7a.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/681.latest.pt-BR.56d182305131d44ffc4a.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.pt-BR.df68113b8a40d67fd554.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/751.latest.pt-BR.08105131cffb5e5f123d.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/836.latest.pt-BR.5aceb700a87f544d09b8.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/78.latest.pt-BR.7930eb638be8fdd8b4fe.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/100.latest.pt-BR.ce6eac4958bd25e9d6a6.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/OnePage.latest.pt-BR.0ebd2d612b2b3a56ccdd.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/707.latest.pt-BR.34782959764598a22da1.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.pt-BR.5e52d9ec000e6dcd2cd6.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/836.latest.pt-BR.6c87ea912612934ca7eb.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/268.latest.pt-BR.4cd8e356a870e605257f.css"];
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
          xhr.open('GET', url, true);
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
  