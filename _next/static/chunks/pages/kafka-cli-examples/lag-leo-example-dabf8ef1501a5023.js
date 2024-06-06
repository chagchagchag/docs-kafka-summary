(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[29],{6808:function(s,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/kafka-cli-examples/lag-leo-example",function(){return r(1654)}])},1654:function(s,e,r){"use strict";r.r(e),r.d(e,{__toc:function(){return k},default:function(){return p}});var l=r(5893),n=r(2673),a=r(373),i=r(8426);r(9128);var o=r(2643),t={src:"/docs-kafka-summary/_next/static/media/1.bf1ff5f4.png",height:148,width:2181,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAIAAABsYngUAAAAIUlEQVR42mMIj4p38fDz8PSPdvIICY8NDo32DQj19AkEAF7GB5PT749VAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:1},c={src:"/docs-kafka-summary/_next/static/media/2.d0d2d385.png",height:174,width:2161,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAIAAABsYngUAAAAIUlEQVR42mOIikmyd/eJdvNJtHf1D4kMDI709gv28A4AAF7+B4XJSw1PAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:1},h={src:"/docs-kafka-summary/_next/static/media/3.4ca1eb0c.png",height:146,width:2160,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAIAAABsYngUAAAAIUlEQVR42mMIj4x39fDz9A6McfIICY8JDov2DQj18g0CAF8rB5wSwIocAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:1},d={src:"/docs-kafka-summary/_next/static/media/4.c75abc4b.png",height:383,width:1030,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAIAAAAhqtkfAAAATElEQVR42gVAWwqAIBB0dte0B0F1gX67c2frBBIEBUHqBJj2496uPM0+nd8y2POWRsWMto5tDJSIzoJ6hJ6m4lFJsDjAkawZUNYCkR91sx0VP6+dhAAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:3};let k=[{depth:2,value:"Offset",id:"offset"}];function _createMdxContent(s){let e=Object.assign({p:"p",pre:"pre",code:"code",span:"span",img:"img",br:"br",ul:"ul",li:"li",h2:"h2"},(0,o.a)(),s.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.p,{children:"토픽생성"}),"\n",(0,l.jsx)(e.pre,{"data-language":"bash","data-theme":"default",children:(0,l.jsx)(e.code,{"data-language":"bash","data-theme":"default",children:(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"$"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"kafka-topics"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"--create"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"--topic"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"topic3"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"--bootstrap-server"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"kafka:9092"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"--partitions"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"3"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"--replication-factor"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"1"})]})})}),"\n",(0,l.jsx)(e.p,{children:"토픽 Listen (컨슈머 그룹명 : created-products)"}),"\n",(0,l.jsx)(e.pre,{"data-language":"bash","data-theme":"default",children:(0,l.jsx)(e.code,{"data-language":"bash","data-theme":"default",children:(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"$"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"kafka-console-consumer"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"--bootstrap-server"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"localhost:9092"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"--topic"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"topic3"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"--group"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"created-products"})]})})}),"\n",(0,l.jsx)(e.p,{children:"컨슈머 그룹 리스트 확인 (새로운 터미널 창에서)"}),"\n",(0,l.jsx)(e.pre,{"data-language":"bash","data-theme":"default",children:(0,l.jsxs)(e.code,{"data-language":"bash","data-theme":"default",children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"$"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"kafka-consumer-groups"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"--bootstrap-server"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"localhost:9092"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"--list"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"created-products"})})]})}),"\n",(0,l.jsxs)(e.p,{children:["컨슈머들 상태 확인 (",(0,l.jsx)(e.code,{children:"--describe"}),")"]}),"\n",(0,l.jsx)(e.pre,{"data-language":"bash","data-theme":"default",children:(0,l.jsxs)(e.code,{"data-language":"bash","data-theme":"default",children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"$"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"kafka-consumer-groups"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"--bootstrap-server"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"localhost:9092"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"--describe"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"--group"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"created-products"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"GROUP"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"            "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"TOPIC"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"           "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"PARTITION"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"CURRENT-OFFSET"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"LOG-END-OFFSET"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"LAG"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"             "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"CONSUMER-ID"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"..."}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"결과값은"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"캡처로"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"대체함"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" (가독성이 "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"떨어져서"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")"})]})]})}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{placeholder:"blur",src:t})}),"\n",(0,l.jsx)(e.br,{}),"\n",(0,l.jsx)(e.p,{children:"콘솔 프로듀서 구동"}),"\n",(0,l.jsx)(e.pre,{"data-language":"bash","data-theme":"default",children:(0,l.jsx)(e.code,{"data-language":"bash","data-theme":"default",children:(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"$"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"kafka-console-producer"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"--bootstrap-server"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"localhost:9092"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"--producer-property"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"partitioner.class=org.apache.kafka.clients.producer.RoundRobinPartitioner"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"--topic"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"topic3"})]})})}),"\n",(0,l.jsx)(e.br,{}),"\n",(0,l.jsx)(e.p,{children:"데이터 입력"}),"\n",(0,l.jsx)(e.pre,{"data-language":"bash","data-theme":"default",children:(0,l.jsxs)(e.code,{"data-language":"bash","data-theme":"default",children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"10"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"11"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"12"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"13"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"1111"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"111111"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"11111"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"1"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"1"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"1"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"1"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"1"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"1"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"1"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:">"})}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"1"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"1"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:">"})}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"1"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"1"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"1"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"1"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"1"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"1"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"1"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"1"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:">"})}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"1"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"1"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:">"})})]})}),"\n",(0,l.jsxs)(e.p,{children:["LAG 이 늘어나는 상황 확인해보기",(0,l.jsx)(e.br,{})]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"partition 은 3개인데 consumer 는 1개 구동 중인 상황"}),"\n",(0,l.jsx)(e.li,{children:"프로듀서에서 넣어주는 데이터의 양이 컨슈머에서 읽어들이는 데이터의 양보다 많을 경우 LAG 값이 커지는 현상 확인"}),"\n"]}),"\n",(0,l.jsx)(e.pre,{"data-language":"bash","data-theme":"default",children:(0,l.jsx)(e.code,{"data-language":"bash","data-theme":"default",children:(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"$"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"kafka-consumer-groups"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"--bootstrap-server"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"localhost:9092"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"--describe"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"--group"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"created-products"})]})})}),"\n",(0,l.jsx)(e.br,{}),"\n",(0,l.jsx)(e.p,{children:"데이터의 소비를 모두 하지 못한 상황에서는 LAG 항목에 1 이상의 값이 나타나게 됩니다."}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{placeholder:"blur",src:c})}),"\n",(0,l.jsx)(e.br,{}),"\n",(0,l.jsx)(e.p,{children:"컨슈머가 데이터를 모두 소모하고 나면 LAG 은 다시 0 으로 돌아옵니다."}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{placeholder:"blur",src:h})}),"\n",(0,l.jsx)(e.br,{}),"\n",(0,l.jsx)(e.h2,{id:"offset",children:"Offset"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{placeholder:"blur",src:d})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"Log-End-Offset (LEO) : Partition 데이터의 끝을 의미합니다. (생성되는 데이터의 가장 최신데이터)"}),"\n",(0,l.jsx)(e.li,{children:"Current Offset : Consumer 가 어디까지 메시지를 읽었는지를 의미합니다."}),"\n",(0,l.jsx)(e.li,{children:"Commit Offset : Consumer 가 어디까지 커밋을 했는지를 의미합니다. Consumer 에서 offset 을 처리했다는 Offset Commit 을 요청하면 업데이트 됩니다."}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"LAG 란?"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"LEO 와 Current Offset 의 차이를 의미합니다."}),"\n",(0,l.jsx)(e.li,{children:"LAG 값이 0 보다 크다는 것은 그 만큼 컨슈머가 처리를 못했다는 의미입니다."}),"\n"]})]})}let x={MDXContent:function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,o.a)(),s.components);return e?(0,l.jsx)(e,{...s,children:(0,l.jsx)(_createMdxContent,{...s})}):_createMdxContent(s)},pageOpts:{filePath:"pages/kafka-cli-examples/lag-leo-example.md",route:"/kafka-cli-examples/lag-leo-example",timestamp:171771489e4,pageMap:[{kind:"MdxPage",name:"index",route:"/"},{kind:"Folder",name:"kafka-cli-examples",route:"/kafka-cli-examples",children:[{kind:"MdxPage",name:"docker-compose",route:"/kafka-cli-examples/docker-compose"},{kind:"MdxPage",name:"kafka-cli",route:"/kafka-cli-examples/kafka-cli"},{kind:"MdxPage",name:"lag-leo-example",route:"/kafka-cli-examples/lag-leo-example"},{kind:"Meta",data:{"docker-compose":"Docker Compose","kafka-cli":"Kafka CLI","lag-leo-example":"Lag Leo Example"}}]},{kind:"MdxPage",name:"kafka-cli-examples",route:"/kafka-cli-examples"},{kind:"Folder",name:"kafka-concepts",route:"/kafka-concepts",children:[{kind:"MdxPage",name:"kafka-basic",route:"/kafka-concepts/kafka-basic"},{kind:"Meta",data:{"kafka-basic":"카프카 기본 개념"}}]},{kind:"MdxPage",name:"kafka-concepts",route:"/kafka-concepts"},{kind:"MdxPage",name:"kafka-java-examples",route:"/kafka-java-examples"},{kind:"MdxPage",name:"kafka-multi-module-example",route:"/kafka-multi-module-example"},{kind:"MdxPage",name:"search-list",route:"/search-list"},{kind:"MdxPage",name:"stream-processing-example-1",route:"/stream-processing-example-1"},{kind:"Meta",data:{index:"Introduction","kafka-concepts":"카프카 개념들","kafka-cli-examples":"Kafka CLI","kafka-java-examples":"카프카 Java 예제","kafka-multi-module-example":"Kafka 멀티모듈 예제","stream-processing-example-1":"스트림 프로세싱 예제 (1)",contact:{title:"Contact ↗",type:"page",href:"-",newWindow:!0},"search-list":"Search List"}}],flexsearch:{codeblocks:!0},title:"Lag Leo Example",headings:k},pageNextRoute:"/kafka-cli-examples/lag-leo-example",nextraLayout:a.ZP,themeConfig:i.Z};var p=(0,n.j)(x)},8426:function(s,e,r){"use strict";var l=r(5893);r(7294);let n={logo:(0,l.jsx)("span",{children:"Docs Kafka Summary"}),project:{link:"https://github.com/chagchagchag/docs-kafka-summary"},docsRepositoryBase:"https://github.com/chagchagchag/docs-kafka-summary",footer:{text:"Nextra Docs Template"}};e.Z=n},5789:function(){}},function(s){s.O(0,[774,796,888,179],function(){return s(s.s=6808)}),_N_E=s.O()}]);