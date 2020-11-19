<template>
<div style="padding:10px 10px 50px 10px;">
    详见 util 文件夹 的 http,js 相关文件内的封装方式 有使用类来封装的，或者 是注册为插件吧
    <div> 封装为插件时，需要这样子操作下import pluginAxios from "./http3_1"; //插件 封装axios     Vue.use(pluginAxios);</div>
    <div class="box">
        <div class="bold">1、下面讲解下 http 协议相关的基本知识</div>
        <div>
            最简单的例子：1、输入URL打开网页   2、AJAX数据获取   3、img 标签加载图片（在路径写入地址后加载到图片，也是经过一个 http 协议加载图片的资源）以及前端数据资源的加载均是通过http协议
            <div>
                再如 http 缓存（web服务中性能提升最大的一环）,Cache-Control，一般会设置 Cache-Control：max-age = 100 即对应的静态资源缓存100秒就可以了，但其实可以通过给 Cache-Control 设置 public、private 来控制他是只能在客户端进行缓存，还是可以通过代理服务器进行缓存，我们还可以通过设置 must-revalidate，让我们在缓存过期之后，不需要到服务端验证过才能继续使用缓存，又比如设置 no-cache、no-store可以控制我们是否使用缓存。涉及到缓存的话就需要考虑缓存的验证，因为缓存是存储在客户端的，客户端并不知道服务端是否会有改变，就需要进行一个验证，我们可以通过 last-modified 配合 if-modified-since 来进行验证，还可以通过 etag 配合 if-none-match 来进行验证，这些验证方法也会比较有用的。
                <div>   
                    更多有意义的头：Content-Type、Content-Encoding 等用来约束数据类型 、cookie保持会话信息、cors 来实现跨域并保持安全性限制
                </div>   
            </div> 
            <div class="bold">以上是对 http 的简单介绍，下面附图一张，示例 浏览器输入 URL 后 HTTP 请求返回的完整过程</div>
            <div>
                <img src="./img/http.png" alt="" width="100%">
            </div>
            <div>上图是通过 浏览器 API performance 记录 每一个时间点，时间过程的消耗，下面大概讲解下 http 输入内容到请求的整一个过程的大致情况</div>
            <div>比如现在在浏览器输入一个 URL 并且按下了一个回车，最开始要做一个 redirect（定向） ，因为我们的浏览器可能记录了你这个地址已经永久跳转成一个新的地址，所以一开始浏览器就要去判断一下，我需不需要 redirect ，以及我要 redirect 到哪里？那么接下来，第二步是要去看缓存，因为你请求的资源可能已经缓存过了，所以要去 App cache里面看缓存是否有，如果没有缓存，就需要去实际的服务器那边请求资源了，那么又因为我们输入的是域名，域名要对应成 IP 之后，我们才能真正的访问到服务器，这时要先去查找一个域名对应的IP地址，这叫 DNS解析，然后有了 IP 之后，我们就要去创建 TCP 连接，那么创建 TCP 连接我们要经过 TCP 的 三次握手之后才能真正的把连接创建起来，同时，如果连接是 https 的，那么要创建一个 https 的连接，他跟 TCP 的三次握手又不一样，因为他中间要有一个保证数据传输安全的过程，如果此时连接创建好了之后，才真正发送 http 请求的数据包，请求数据包发送完成之后，服务器接收到这个数据，服务端进行数据操作之后，返回我们这个请求想要的内容（返回数据之后）这个 http 请求才真正完成</div>
        </div>
        <div class="bold">2、网络协议分层</div>
        <div>
            如图下图，经典五层模型
        </div>
        <img src="./img/five.png" alt="" width="50%">
        <div>
            如图左在客户端（每一台电脑，服务端），都是这样子一个相应的层级的关系的，来维护整一个数据传输的过程的，一台 web服务器，的经典的计算机模型都会有的网络的过程
            <div class="bold mar">http协议是在应用层实现的，所以会主要介绍应用层，但是，http协议他要基于传输层中的一个非常重要的协议 -- TCP ip ；平时常见的 http 服务 或者 ftp 服务 再或者 email 服务，都是基于TCP ip 协议实现的，接下来的 三层 网络层、数据链路层，物理层，web端 基本不会触碰到</div>
                接下来讲一下，低三层（下面三层主要做的事情）
            <div class="bold">
                物理层：主要的作用就是定义物理设备如何传输数据 （简单来说就是电脑的硬件，网卡，端口，网线）
            </div>
            <div class="bold">
                数据链路层：在通信的实体间建立数据链路连接 ( 那么物理是可以连接在一起了把两台机器，还需要一个软件服务通过物理的设备去创建一个电路的连接，两边就可以传输数据 )
            </div>
            <div class="bold">
                网络层：是为数据节点之间的传输创建逻辑链路 （比如我们从我的电脑去访问百度服务器，如何寻找那台服务器，是一个逻辑关系，是网络层为我们创建的 ）
            </div>
            <div class="bold">
                传输层：主要有两个协议，1、TCP IP  2、UDP协议 更多的情况下会使用 TCP ip 协议，传输层为我们提供了可靠的端到端（End-to-End）服务，传输层向高层屏蔽了下层数据通信的细节
            </div>
            <div class="bold">
                应用层：为应用软件提供了很多服务，是构建于TCP协议之上的，屏蔽了网络传输相关细节
            </div>            
        </div>
        <div class="bold">3、http 1.1 与 http 2.0</div>
        <div>
            http1.1 : 相较之前版本，持久连接，pipeline 增加了 host 和其他一些命令 
            <div> 
                http2：所有数据都是二进制传输，在 1x里是以字符串传输的；同一个链接里面发送多个请求不再需要按照顺序来；头信息压缩以及推送等提高效率的功能，在1x中如果请求 html页面，那么，需要先请求到html 解析后，再去请求相关的引入的 css 和 js 文件，那 http2 中有了推送的功能后，我们在请求html 的同时我们可以主动把其里面引入的css 和js文件推送到客户端 ，发送顺序是并行的，而不是 串行的 
            </div>
        </div>
        <div class="bold">4、http 三次握手</div>
        <img src="./img/woshou.png" alt="" width="50%">
        <div>
            先理解一个概念：就是在客户端和我们的服务器之间进行一个http请求发送和返回的过程当中，我们是需要去创建一个 叫 TCP connection 的东西的，因为http 是不存在连接这么一个概念的，他只有请求和响应的概念，请求和响应都是数据包，他们之间需要一个传输的通道的，传输的通道就在 TCP 里面创建的， 这个从客户端发起和服务端接收的一个连接，这个连接可以一直保持在那边的，http请求实在这个连接的基础上发布的，在 TCP 连接上是可以发送多个 http 请求的，（1.1版本通过某种方式声明，此链接是可以一直保持着的），TCP连接在创建时是有三次握手消耗的，（三次握手就是 代表着有三次网络传输，即客户端发送过去一次，服务端返回一次，然后客户端再发送一次，这个时候，才创建了这个TCP连接，往后才能发送 http 请求）那么如果创建 TCP 后把连接保持在那边，下次也就没有握手三次的开销。
        </div>
        <div class="bold">那么上面大概是介绍了 http 和 TCP 连接的关系，下面讲一下 三次握手</div>
        <img src="./img/sanci.png" alt="" width="50%">
        <div>
            在 http 的三次握手当中呢，首先客户端发起一个我要创建一个连接的一个数据包的请求，他发送到服务端，这里面会有一个标志位，叫做 SYN = 1,SYN是一个标志位，这时一个创建请求的数据包，后面会发送一个 Seq = X  一般 seq  = 0，然后服务端接收到了这个数据包之后，就知道了 有人要和他创建连接了，创建了连接之后呢，服务端就会开启 TCP的一个 端口，端口开启之后呢，返回给客户端，返回的客户端数据里面 也是一个 SYN（第一个标志位），会返回一个 ACK 就等于第一次 发送过来的 seq 的值 加 1，再发送一个 seq（服务端的seq），然后客户端拿到系列数据后，就知道了服务端允许他连接，最后，客户端再发送ACK 和 Seq， ACK 就等于，服务端发送过来的 ACK 加 1 Seq 是一个新的值，这就是创建一个 Tcp 连接的过程
            <div class="bold">那么为什么要进行三次的握手呢？这是为了防止服务端这边开启一些无用的连接，因为我们知道，网络传输是有延时的，数据包有肯能丢失，客户端也不会知道服务端到底有没有接收到其返回的信息，规避一些因为服务器延时导致的开销问题</div>
        </div>
        <div class="bold">5、URI、URL、URN</div>
        <div>
            在 http 协议中，我们用的基本是 URL，先看下三者的区别
            <div>
                <div class="bold"> （1）URI ：其实是一个 包含 URL、URN 他们统一的定义， Uniform Resource Identifier / 统一资源标志符,用来标识互联网上的信息资源，包括URL和URN </div>
                <div class="bold"> （2）URL ：Uniform Resource Locator  / 统一资源定位器</div>                
                <div class="bold"> （3）URN ：永久统一资源定位符，在资源被移动以后，还能被找到，目前还没有非常成熟的使用方案</div>       
                 这些名词主要是为了识别资源所在的地方，用这种方式来标记了某一个资源之后，我们就可以通过一个连接的方式，去找到某个资源，在网洛中，http 协议或者 ftp 协议，目的就是为了找到某一个资源，并且通过某种方式去获得资源，比如网页，其实就是 html ，我们通过 url 去访问到了地址之后，指代的就是 那个 html 代码的地方，然后就返回 html 代码，并且显示出页面的内容。
            </div>
        </div>
        <div class="bold">6、HTTP报文</div>
        <img src="./img/baowen.png" alt="" width="50%">
        <div>
            http的报文，基本长上面的样子，http 是请求和响应的形式，就是说发起请求的一方永远是主动的，我们发起了请求之后，服务端才会给我们一个响应，请求报文的格式如上图左边的样子。首先，http请求都有一个首行，并不属于http的header，header是另外一个部分。那么在报文里面，首行会包含 method（请求类型）请求资源地址，协议版本
        </div>
        <div class="bold">7、搭建最简单的 web 服务器</div>
        <div>
           具体操作看下： H:\前端修仙\http_text -- 原生node 创建服务器的写法 -- 搭建一台服务器 从浏览器输入 localhost：8888访问 
           curl -v www.baidu.com
        </div>
        <div class="bold">8、cors 跨域请求的限制与解决</div> 
        <div>
            具体操作看下： H:\前端修仙\http_text
            <div> 
                浏览器在发送请求时并不知道服务是否跨域，还是会发送请求，并且接受返回内容，只不过在浏览器接收到数据的时候，看到返回的里面没有 'Access-Control-Allow-Origin':'*' （为允许跨域），他就会把请求返回的内容忽略掉，并且在命令行报错（浏览器提供的功能，拦截跨域请求到的内容）
                <div>'Access-Control-Allow-Origin':'http://127.0.0.1:8888' 设置为特定访问能拿到数据，替代*号</div> 
                <div class="bold">
                    另外，浏览器是允许跨域请求 link 标签，img 标签 script 标签去请求资源的， 也就是在一些 html 上面写标签加载内容资源的做法，不会跨域拦截
                </div>
            </div>
        </div>	    
        <div class="bold">9、cors 预请求</div> 
        <div>
            在跨域的时候，允许的请求方法有 ：GET \ HEAD \ POST 
            <div>put \ delete 是默认不允许的</div>
            <div>允许的 Content-Type 也是有限制的；允许的值：text/plain,  multipart/form-data,  application/x-www-form-urlencoded 这三个也是 element form表单使用时可以设置的内容</div>
            <div>请求头限制：XMLHttpRequestUpload对象均没有注册任何事件监听器，请求中没有使用 ReadableStream对象</div>
            <div class="bold">
                什么是预请求：控制台看一下：Request Method: OPTIONS   
                <div>Request Method 值如果是 post 那个不是预请求了，预请求因该是发送请求前，先进行一次请求把，服务端根据不同的 method 做出不同的处理，通过得到的OPTIONS ，得到服务端的认可，然后再实际发送post请求</div>
                <div>
                    为什么浏览器会有如此之多的限制呢？因为他希望的是我们在网页里面，去进行一些跨域操作的时候，这个操作是保证服务端的安全的，他不允许任何人随便人或者方法跨域，
                    也不希望一个跨域的请求导致服务端的某个数据被篡改
                    <pre>
                    http.createServer(function(req,res){    // 分别对应，发送、返回内容的操作
                        console.log('reqest come',req.url);
                        res.writeHead(200,{
                            'Access-Control-Allow-Origin':'*', // * 表示所有网站都可以来访问到这里的东西
                            //'Access-Control-Allow-Origin':'http://127.0.0.1:8888'
                            'Access-Control-Allow-Headers':'X-Test-Cors',  // 设置哪些头是允许的
                            'Access-Control-Allow-Methods':'POST,PUT,Delete', // 允许他们三种发送预请求
                            'Access-Control-Max-Age':'1000', // 以 此种方式跨域请求的最长时间
                            // 1000 秒以内，不需要再发送预请求来验证了
                        })
                        res.end('123')
                    }).listen(8887)
                    console.log('server listen 7888')
                    </pre>
                </div>
            </div>
        </div>
        <div class="bold">10、缓存 Cache-Control</div> 
        <div>
        特性：（1）可缓存性 
        可选值：<pre>
                    public ：是指在这个http请求返回的过程当中，在Cache-Control里面设置了 public这个值，代表这个 http 请求他返回的内容，
                    经过的任何路径当中，包括中间的http代理服务器，以及我们发出这个请求的客户端浏览器，都可以进行对我这个返回内容的缓存
                        （public 即是任何地方）
                    private ：代表只有发起该请求的浏览器他才可以进行缓存
                    no-cache ：每一次发送请求时都需要去服务器验证，是否可以使用本地缓存

                    max-age = seconds 缓存到期时间 单位应该是秒，过期以后，浏览器，才会再次发送请求到服务端请求一个新的内容
                    s-maxage = seconds 他会代替 max-age，只有在代理服务器才会生效  在浏览器端还是会读取 max-age作为过期时间，
                    但是在代理服务器，如果设置了 max-age和s-maxage，会读取 s-maxage
                    max-stale = second （发起请求的一方主动带的头，意为，即便缓存已经过期了，但是只要在 max-stale这个时间内，还可以使用过期的缓存）
                    max-stale在浏览器中是使用不到的
                </pre>

                  （2）从新验证：
                <pre>
                    must-revalidate : 在设置了 max-age 的缓存当中，如果他已经过期了，必须去原服务端发送请求从新获取这部分数据，
                    再来验证是否已经真的过期了，而不能直接使用本地的缓存
                    proxy-revalidate ：是用在缓存服务器之中，指定缓存服务器过期之后需要到原服务器请求一遍数据
                    no-store：任何地方都不可以存储缓存，永远都要去服务端拿新的内容使用
                    no-transform ：主要用在 proxy 服务器那边 不能随意改动返回的内容
                    <p class="bold">
                        这些个头，只是限制性的声明性的作用,没有任何强制的约束力 
                    </p>
                </pre>
                <div class="bold">11、数据验证</div> 
                <div>资源验证 -- 下图，缓存是如何进行操作的  -- 命中即是找到已缓存资源，就不会去请求数据，未命中，则去服务器请求资源</div>
                <img src="./img/huancun.png" alt="" width="50%">
                <pre class="bold">
                    数据如何验证？在http协议中有两个验证 http 头的方法，
                    （1）Last-Modified (服务端设置的字段名)： 上次修改时间，配合 If-Modified-Since（前端带上的字段名） 或者 If-Unmodified-Since 使用 ；
                    对比上次修改时间来验证资源是否需要更新
                    （2）Etag (服务端设置的字段名)：更加严格地验证，数据签名，配合 if-Match 或者 if-Non-Match （前端带上的字段名）使用
                    对比资源的签名判断是否使用缓存
                    由于http 会把请求头都带上，所以会自动带上请求的头
                </pre>
        </div>
        <div class="bold">11、Cookie 和 Session</div> 
        <pre>
            （1）cookie ：通过 Set-Cookie 设置 到浏览器里面，下次在同域的请求当中，发送请求时会自动带上这个cookie ，cookie是键值对，可以设置多个
                cookie 属性：max-age 和 expires 设置过期时间
                secure 只在 https 的时候发送
                设置了 HttpOnly 之后无法通过 JavaScript 的 document.cookie 访问到 cookie 了 （安全性的考虑）
                如果服务端设置的 cookie 由同名的 ，会被替换掉
                在设置了过期时间以后，到期cookie 将会自动清除掉

                一般在当前域设置的 cookie 其他域是访问不到的 比如 在 a.com 设置的，在 b.com 是访问不到的 再比如 a.com 有一个二级域名
                 叫 text.a.com 那么可以有办法让其访问到 a.com 里面存的 cookie  
                例如在 原生 node 里面 设置：         res.writeHead(200,{
                                                    'Content-type':'text/html',  
                                                    'Set-Cookie':['id=123666;max-age=10;domain=test.com']
                                                    })   设置 domain 属性
        </pre>
        <div class="bold">12、http 长连接</div> 
        <pre>
            之前讲到过，http 的请求，是在 TCP 连接上面进行发送的，那么TCP连接分为长链接，短连接的概念
            什么叫长连接？：http 请求发送的时候，要先去创建一个 TCP 的连接，然后再 TCP请求的连接上面，
            把 http 请求的内容发送，并且接受完返回，在这时，因为一次http请求已经结束了，浏览器和服务端就会商量，
            要不要把这个 TCP 连接关闭掉，如果不关闭，该连接一直开着，会有一定的消耗，但是接下来如果还有请求，
            直接在此连接上发送即可，就不需要经过三次握手这样的连接创建的消耗了，而如果直接关闭了之后，
            下次有请求的时候，又要从新创建一个链接，这是又会有网络延迟上面的开销，但能提供一个好处就是，
            客服端和服务端可以减少并发的连接数，但是，在实际当中，网站的并发量可能很大，长连接才是相对好一点的做法，
            长连接可以设置 timeout 就是 过多少时间没有在这个 TCP 连接 上有新的请求，他就会自动关闭掉，所以现在一般的情况，都是
            会去保持长连接的  即 connection ： keep-alive(保持长连接) /  close(关闭)
            res.writeHead(200,{
                'Content-type':'text/html',  
                'connection':'close'       // 写到头部
            }) 
        </pre>
        <div class="bold">13、数据协商</div> 
        <pre>
            概念：在客户端发送给服务端一个请求的时候，客户端会声明希望拿到的数据的 格式，以及数据相关的一些限制，服务端会更具请求头信息作出判断，
            请求： Accept(指定想要的数据类型)  、 Accept-Encoding(数据是怎么样的编码方式) 、Accept-Language(展示语言)
            、userAgent(浏览器信息，判断返回的是pc端还是移动端的页面) 
            服务端用 Content-Type  对应  Accept   Content-Encoding  对应  Accept-Encoding    等等以此类推
        </pre>
        <div class="bold">14、redirect</div> 
        <pre>
            概念：通过 url 去访问一个路径的时候，请求一个资源的时候，发现该资源已经不在这个 url 指定的位置了，这时服务器要告诉浏览器，
            你请求的资源在哪个地方，然后浏览器再去请求那个地方，这样就可以拿到这个资源。

            那么当我们把服务器之前的某个资源 从新搬到另外的地方的时候，不应该立刻就把 之前对应的 url 给废弃掉，如果直接废弃掉的话，
            就会返回 404 说资源不存在，正常来讲，你应该告诉客户端要去哪个地方拿那个数据 'Location' 头设置 值就位新地址
            res.writeHead(302,{     // 这是最简单的用法，只有 302 的头才代表了他要进行跳转到新地址 ；302的语义是临时跳转  301 是永久跳转
                'Location':'/new'
            }) 
        </pre>
        <div class="bold">15、Content-Security-Policy（内容安全策略）</div> 
        <pre>
            作用：（1）限制资源获取
                  （2）报告资源获取越权

            限制方式：default-src 限制全局      
                    指定限定资源类型 ，资源类型有哪些呢？：（ connect-src、manifest-src、img-src、style-src、font-src、script-src 。。。。。等等）

            在返回的头里面写入：        
            res.writeHead(200,{
                'Content-Security-Policy':'default-src http: https:; report-url / report'    // 只能通过 http或者 https加载，不能直接写在 html 里面
            }) 
                report-url / report   在出现意外情况，发送消息到浏览器
            response.end(html)  此 返回，显示在页面上的 html 文件中的 只能通过 http或者 https加载，不能直接写在 html 里面

            还可以在 html 中用 meta 标签来处理 ：'  《meta http-equiv="Content-Security-Policy" content="default-src"》  '

        </pre>
        <div class="bold">16、nginx</div> 
        <pre>
            到 nginx.org 下载后，解压，到其目录 文件所在位置，有 nginx.exe 的地方，
            使用 git bash 运行  ./nginx.exe  在浏览器里面 输入 localhost 出现提示 Welcome to nginx!，即是运行成功了 
        </pre>
        <div class="bold">17、https</div> 
        <pre>
            http相对不安全，会被拦截包 
            公钥 和 私钥  传输数据时，公钥加密，服务器 私钥解密  公钥私钥主要是握手的时候进行传输，

            <div class="bold">
                大概过程（握手时发生）：首先 客户端先生成一个随机数，然后传输到服务端，中间会带上客户端支持的一个加密套件，
                因为会有很多不同的加密方法，服务端拿到这个随机数之后，先存着，服务端也生成一个随机数，这个
                随机数会伴随着服务端的证书（公钥）一起传输给客户端，客户端拿服务端随机数后也先存着，通过服务端传给的公钥，生成一个预主秘钥，
                这过程当做也会有一个新的随机数生成（那么总共是三个随机数），然后最后生成的这个随机数（客户端生成）用公钥加密了，
                这时候传输给服务器这边，（这是没办法被中间人解析的过程）服务器通过私钥解密，拿到了预主秘钥（随机字符串），
                客服端和服务端同时对着三个随机数进行一个算法的操作，生成一个主秘钥，（这边会涉及到一个加密套件，
                服务端会选择一个加密套件，客户端也要支持，两边同时使用该加密套件对这三个随机数进行算法操作，生成一个主秘钥）
                那么，最后一个随机数，是只有客户端和服务端知道，中间人更本拿不到，生成的主秘钥也是中间人没法破解的，有了主密钥以后，
                后面传输的内容全都是经过主密钥进行加密的，此时，客服端和服务端都有主密钥，且都是一样的，都能进行加密，并且
                解密，中间人没有不知道，主密钥，也就无法解密，这中间的数据传输，就变成了安全的传输

            </div>
        </pre>
        <img src="./img/https.png" alt="" width="80%">
        <div class="bold">18、http2</div> 
        <div>
            介绍：  信道复用 
                    分帧传输
                    server push
                    
        </div>
    </div>
</div>
</template>    
<style scoped>
.box{
    padding: 10px;
}
.mar{
    margin-top: 10px;
}
.box div{
    margin-top: 8px;
}
.bold{
    font-weight: bold;
}
</style>