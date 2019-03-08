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
    }
}