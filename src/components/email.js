var test={
sendEmail(email,body){

    /* SmtpJS.com - v3.0.0 */
    let Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };

    Email.send({
        SecureToken :"F24825E6162AB5248A252B16AD42FE4542089722762CF28DEB99D8012D2E37B40A2F06EC686025AD86927580973E5A6F", // write your secure token
        To : 'codegroup23@gmail.com', // to include multiple emails you need to mention an array
        From : email,
        Subject : 'Consulta Master Mind',
        Body : body,
    })
    .then(message=>{
        alert(message);
    })
    .catch(error=>{
        alert(error);
    });


}
}

 export default test;