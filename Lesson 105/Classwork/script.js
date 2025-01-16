// 5 kyu Extract the domain name from a URL

function domainName(url){
    url = url.split("//").pop();
    url = url.split("/")[0];
    if (url.includes("www.")) {
      url = url.split("www")[1];
    }
    let domain = url.split(".")[0];
    return domain || "xakep";
  };