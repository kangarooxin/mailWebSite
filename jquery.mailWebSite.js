/*!
 * jQuery Mail Plugin v0.1.0
 * 
 * Copyright 2014 
 * 
 * @author Pangxin
 * @mail   pangxin001@163.com
 *
 * $('#content').mailWebSite();
 * 
 */
;(function($) {
    $.fn.mailWebSite = function(options) {
    	var webSiteData = {
            '163.com':'http://mail.163.com',
            '126.com':'http://mail.126.com',
            'qq.com':'http://mail.qq.com',
            'sina.com':'http://mail.sina.com.cn',
            'sohu.com':'http://mail.sohu.com',
        	'gmail.com':'https://mail.google.com/',
            'hotmail.com':'http://www.hotmail.com',
            'msn.com':'http://mail.msn.com',
            'live.com':'http://mail.live.com',
            'yahoo.com':'https://cn.overview.mail.yahoo.com/',
            'yahoo.com.cn':'https://cn.overview.mail.yahoo.com/',
            'chinaren.com':'http://mail.chinaren.com',
            'sogou.com':'http://mail.sogou.com/',
            '163.net':'http://mail.163.net',
            '21cn.com':'http://mail.21cn.com/',
            'tom.com':'http://mail.tom.com/',
            'x.cn':'http://mail.x.cn/',
            'citiz.com':'http://citiz.online.sh.cn/',
            'eyou.com':'http://www.eyou.com/',
            '56.com':'http://www.56.com/',
            'aim.com':'http://www.mail.aim.com/',
            'aol.com':'http://mail.aol.com',
            'mail.com':'http://www.mail.com/',
            'walla.com':'http://mail.walla.com',
            'inbox.com':'http://email.inbox.com'
        };

        var mailRegex = /[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*/g;

        var $opts = $.extend({}, $.fn.mailWebSite.defaults, options);

        function getMailHref(mail) {
        	var suffix = /[^@]+$/.exec(mail);
        	if(suffix) {
                return webSiteData[suffix];
            }
            return "###";
        }

        return this.each(function() {
            var $this = $(this);
            var opts = $.meta ? $.extend({}, $opts, $this.data()) : $opts;
            var content = $this.html();
            if(content) {
            	var mails = content.match(mailRegex);
            	if(mails) {
            		for(var i = 0; i < mails.length; i ++) {
            			content = content.replace(mails[i], '<a href="' + getMailHref(mails[i]) + '" class="' + opts.aClass + '" target="' + opts.aTarget + '">' + mails[i] + '</a>');	
            		}
            	}
            	$this.html(content);
            }
        });
    };
    $.fn.mailWebSite.defaults = {
     	aTarget : '_blank',
     	aClass: 'mail'
    };
})(jQuery);