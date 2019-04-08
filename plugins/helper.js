export const helper = {
    decodeHtmlEntity: function (str) {
        var s = str.replace(/&#(\d+);/g, function(match, dec) {
            return String.fromCharCode(dec);
        });
        
        var s = s.replace("&amp;", "&");
        var s = s.replace("read more.", "");
        
        return s;
    },
    stripTags: function(str) {
        return str.replace(/<.+?>/g, ''); 
    },
    stripP: function(s){
        return s.replace(/(?!<)p(?=>)/g, "span class='p'")
    },
    linkify: function(s){
        var prefix1 = 'http://';
        var prefix2 = 'https://';
        if (s.substr(0, prefix1.length) !== prefix1 && s.substr(0, prefix2.length) !== prefix2){
            return prefix1 + s;
        }
        return s;
    },
    unlinkify: function(s){
        var prefix1 = 'http://';
        var prefix2 = 'https://';
        if (s.substr(0, prefix1.length) == prefix1){
            return s.splice(0, prefix1.length)
        }
        if (s.substr(0, prefix2.length) == prefix2){
            return s.splice(0, prefix2.length)
        }
        return s;
    }
}