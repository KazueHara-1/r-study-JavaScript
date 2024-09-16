三菱UFJ銀行のトップページを読み込むとgoogleへのGETリクエストが送られていた。  
（おそらく広告系のリクエストだと思われる）

```
URL: https://www.google.co.jp/ads/ga-audiences?v=1&t=sr&slf_rd=1&_r=4&dma=0&npa=0&gcd=13l3l3l3l1l1&tid=G-GYD0693X2Y&cid=315096728.1726453896&gtm=45j91e49c0h2v886707423z8831143272z9898785955za200zb831143272&tag_exp=0&aip=1&z=781440147

responseヘッダー

alt-svc
	h3=":443"; ma=2592000,h3-29=":443"; ma=2592000
cache-control
	no-cache, no-store, must-revalidate
content-length
	42
content-type
	image/gif
cross-origin-resource-policy
	cross-origin
date
	Mon, 16 Sep 2024 02:32:02 GMT
expires
	Fri, 01 Jan 1990 00:00:00 GMT
p3p
	policyref="https://www.googleadservices.com/pagead/p3p.xml", CP="NOI DEV PSA PSD IVA IVD OTP OUR OTR IND OTC"
pragma
	no-cache
server
	cafe
timing-allow-origin
	*
x-content-type-options
	nosniff
x-xss-protection
	0
```

www.bk.mufgからのリクエストなのでcross-originを設定し、リクエストを送信している。
