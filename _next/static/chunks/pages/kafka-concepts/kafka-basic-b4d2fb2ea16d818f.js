(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[427],{8641:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/kafka-concepts/kafka-basic",function(){return s(7469)}])},7469:function(e,n,s){"use strict";s.r(n),s.d(n,{__toc:function(){return m},default:function(){return f}});var i=s(5893),r=s(2673),l=s(373),a=s(8426);s(9128);var c=s(2643),d={src:"/docs-kafka-summary/_next/static/media/kafka-broker-clustering-1.51853e63.png",height:2452,width:2972,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAMAAAACh/xsAAAAVFBMVEX////+/v79/f38/Pz7+/v5+fn39/f19fX08/Pz8/Pz8/Ly8vLw8PDv7+/t7e3q6urq6unm5eTe3t3c3Nra2djZ2djIyMbHxsTAwL23trWnpaF5dmzhlce1AAAANUlEQVR42gWAhRGAMBDAki9OcYf99+SQWJswgOLKAlNpX9HtPNl7ZPuANNcsL0E6WhVJ5yD8McABnDQxaqwAAAAASUVORK5CYII=",blurWidth:8,blurHeight:7},t={src:"/docs-kafka-summary/_next/static/media/message-format.5c1f847f.png",height:1020,width:906,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAAAAAAQb7raAAAALUlEQVR42iXHAQoAIAzDwP3/v8LSVlAnBI4U3a8CBCqll/KELxq3ybzlKxEOB9PvNrLaJ09rAAAAAElFTkSuQmCC",blurWidth:7,blurHeight:8},h={src:"/docs-kafka-summary/_next/static/media/what-is-topic.3d2cda11.png",height:404,width:1099,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAIAAAAhqtkfAAAAVElEQVR42mM4eeLY169f7969vW7tyvPnz3z48GHH9s3fvn1jePfu7Z8/v4H8e3fvvHr58tu3r08eP/r16xfDfzB4+fLF2jUrtm3duH/fbiD3379/ADL8P2XI0c9gAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:3},A={src:"/docs-kafka-summary/_next/static/media/key-with-partitioning.b3ce5c95.png",height:613,width:1302,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAEBAMAAABB42PDAAAAJFBMVEX////+/v79/f38/Pz7+/v6+vr5+fn4+Pj09PTy8vLg4N/Z2dhKVdsrAAAAG0lEQVR42mNgEHUxYVjh7mzKsNMcSDCohbgBACg0BB3Lus46AAAAAElFTkSuQmCC",blurWidth:8,blurHeight:4},x={src:"/docs-kafka-summary/_next/static/media/consumer-lag.f02885cc.png",height:484,width:1176,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAIAAAAhqtkfAAAATUlEQVR42iXKOw6AIBBFUfa/FQvjQnTw00pEIi2UTGYmTyO3vceFcLbWcn6OfVs91VoBiIiL8WLmlG5PC9Hch6o6/JVSpnH4IAAzA/ACmIVCXKGDXykAAAAASUVORK5CYII=",blurWidth:8,blurHeight:3},j={src:"/docs-kafka-summary/_next/static/media/partition-and-consumer-group.a1b7fe4c.png",height:1082,width:1360,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAIAAABxZ0isAAAAlElEQVR42i2LPQ7CIBhAOYVn8GhewMR7OOjgYjyCplo3059F7epPq0TQxrIQFihQ/KRN3/by8tCbEq11WX7y/F4UuZTSOWeMQc9H4UOWnbbBeh8GQggAsNYi6LhdL2kSp0lU19pre/w6qurLOVdKUkqUUr61R9O4yXg0n02z83E4QBjjPvgj3G3i6EDJa7VcMMYA4A/DW33suCO3AgAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:6},o={src:"/docs-kafka-summary/_next/static/media/consumer-numu-mana.4cc18ff7.png",height:1253,width:1360,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAIAAAC6O5sJAAAApklEQVR42mN48uTxz58/nz17evv2rbt3bn/79u3v37+/fv1iuHv3DlDi/Pmz27dv2bVz28ePH//////792+G/2Bw/frVI4cPHj1y6Pv3H0AuSMc/MHj16uX79++/fPkCNBMoChQB6fjz529Xc9Wi+XMP7N2VFhsAVAEUBEv8/VvSVjpx7pTt+3bYRtu8fvsGIbH20I69Z4+duXl59pYVH798/v//PwDw2ZD+SnwRNAAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:7},p={src:"/docs-kafka-summary/_next/static/media/message-handling-by-event-order-1.7e9200b0.png",height:609,width:2260,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAIAAADq9gq6AAAAPElEQVR42mN4+/btixfPL1++eOPGtStXLl27euXXr19//vxh+Pv37727d3bv3nFg/57z585+/vz5NxgAAB9GKnM/Eug0AAAAAElFTkSuQmCC",blurWidth:8,blurHeight:2},u={src:"/docs-kafka-summary/_next/static/media/message-handling-by-event-order-2.3820957d.png",height:731,width:2260,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAIAAAAhqtkfAAAATElEQVR42jXJMQ6AIAxAUe5/FRM9imGiQDWyg6Qdmk7VLvzxv9B7H2MAJFX9VmYWRARrOfYtxrPWUjJkSEQU3Od8W3vuC30jumZm/gGe0UDUqSL59wAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:3},b={src:"/docs-kafka-summary/_next/static/media/what-is-broker.384474f1.png",height:1546,width:918,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAIAAAC+k6JsAAAAa0lEQVR42i2MSwqAIBiEvf9ZCoqCzlFaf+0rXQq+UzPFNsN8M8MgrbUQwhjjnMuKjgOmaYRtfVPKEcqu7xq8zKkyo3Ql+DrPGKO1FjHG9h0ovX8GyPsW46Xuy984dIQULr1SinMupQwhev98Ak5sYj3+8HsAAAAASUVORK5CYII=",blurWidth:5,blurHeight:8},k={src:"/docs-kafka-summary/_next/static/media/kafka-broker-clustering-2.d6409f33.png",height:2452,width:2970,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAMAAAACh/xsAAAAZlBMVEX////+/v/+/v7//vv+/v3+/fz9/f3+/Pr8/Pz8+/r7+/r39/j39vb19fXz8/Py8vH18enx8fDv7+/z7eHt7e3q6unm5eTk5OTj3tXc29na2tjZ2djQyLrIyMbAwL67u7qnpqF4dmyxSkpTAAAAOklEQVR42gWAhRGAQAwElwNCsMfd+2+SwcjXNosMKM4hAZYybao47Dyd7pHtA3yqmV8MP4IkhF+94AdMuAJmRuJ8twAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:7};let m=[{depth:2,value:"kafka 의 주요 개념들",id:"kafka-의-주요-개념들"},{depth:2,value:"Kafka 의 주요 특징",id:"kafka-의-주요-특징"},{depth:2,value:"Message Format",id:"message-format"},{depth:2,value:"컨슈머 측면 : Pull Model vs Push Model",id:"컨슈머-측면--pull-model-vs-push-model"},{depth:3,value:"Pull Model",id:"pull-model"},{depth:3,value:"Push Model",id:"push-model"},{depth:2,value:"토픽",id:"토픽"},{depth:2,value:"파티션",id:"파티션"},{depth:2,value:"메시지, 프로듀서",id:"메시지-프로듀서"},{depth:2,value:"컨슈머, 컨슈머 랙 (LAG), 컨슈머 그룹, 컨슈머 오프셋",id:"컨슈머-컨슈머-랙-lag-컨슈머-그룹-컨슈머-오프셋"},{depth:3,value:"컨슈머",id:"컨슈머"},{depth:3,value:"컨슈머 랙",id:"컨슈머-랙"},{depth:3,value:"컨슈머 그룹",id:"컨슈머-그룹"},{depth:3,value:"컨슈머 오프셋 (Consumer Offset)",id:"컨슈머-오프셋-consumer-offset"},{depth:4,value:"__consumer_offset",id:"__consumer_offset"},{depth:4,value:"At Least Once",id:"at-least-once"},{depth:4,value:"At Most Once",id:"at-most-once"},{depth:4,value:"Exactly Once",id:"exactly-once"},{depth:2,value:"순서가 중요한 메시지일 경우",id:"순서가-중요한-메시지일-경우"},{depth:3,value:"1) 인프라 레벨에서 해결하는 방식",id:"1-인프라-레벨에서-해결하는-방식"},{depth:3,value:"2) 애플리케이션 레벨에서 해결하는 방식",id:"2-애플리케이션-레벨에서-해결하는-방식"},{depth:2,value:"카프카 브로커",id:"카프카-브로커"},{depth:2,value:"카프카 브로커 클러스터링",id:"카프카-브로커-클러스터링"},{depth:2,value:"카프카 브로커 장애 발생시 리더 파티션 재선출",id:"카프카-브로커-장애-발생시-리더-파티션-재선출"},{depth:2,value:"가용성(Availability)",id:"가용성availability"},{depth:2,value:"Partition, RF, ISR",id:"partition-rf-isr"},{depth:3,value:"Partition",id:"partition"},{depth:3,value:"RF (Replication Factor)",id:"rf-replication-factor"},{depth:3,value:"ISR (In-Sync Replica)",id:"isr-in-sync-replica"},{depth:2,value:"RabbitMQ",id:"rabbitmq"},{depth:2,value:"Kafka",id:"kafka"},{depth:2,value:"Kafka 도입에 대한 개인적인 의견",id:"kafka-도입에-대한-개인적인-의견"}];function _createMdxContent(e){let n=Object.assign({h2:"h2",p:"p",img:"img",blockquote:"blockquote",a:"a",ol:"ol",li:"li",strong:"strong",ul:"ul",h3:"h3",code:"code",h4:"h4"},(0,c.a)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"kafka-의-주요-개념들",children:"kafka 의 주요 개념들"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{placeholder:"blur",src:d})}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://cdn.educba.com/academy/wp-content/uploads/2021/05/Kafka-Replication-Factor-2-1.png.webp",alt:""})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["출처 : ",(0,i.jsx)(n.a,{href:"https://www.educba.com/kafka-replication-factor/",children:"https://www.educba.com/kafka-replication-factor/"})]}),"\n"]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://miro.medium.com/v2/resize:fit:828/format:webp/1*Sza0NeMLKrNFNC245mLzWw.jpeg",alt:""})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["출처 : ",(0,i.jsx)(n.a,{href:"https://medium.com/@_amanarora/replication-in-kafka-58b39e91b64e",children:"https://medium.com/@_amanarora/replication-in-kafka-58b39e91b64e"})]}),"\n"]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.h2,{id:"kafka-의-주요-특징",children:"Kafka 의 주요 특징"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"TODO: 필요한 것들만 추려서 다시 구체적인 내용들만 정리"}),"\n"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"분산 시스템:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Kafka는 여러 브로커(서버)로 구성된 분산 시스템입니다. 이는 확장성을 지원하며 높은 부하와 대량의 데이터를 처리할 수 있도록 합니다."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"고가용성 및 복제:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Kafka는 데이터의 고가용성을 보장하기 위해 데이터를 여러 브로커에 복제합니다. 따라서 하나의 브로커에 장애가 발생하더라도 데이터 손실 없이 서비스를 지속할 수 있습니다."}),"\n",(0,i.jsx)(n.li,{children:"데이터의 복제본을 여러 서버에 분산시켜서 저장하기에 서버하나가 실패하더라도 데이터 손실을 방지할 수 있다는 것은 장점입니다."}),"\n",(0,i.jsx)(n.li,{children:"고가용성은 시스템이 장애나 오류에 강건하게 대응하고 지속적으로 운영되며 사용가능한 상태를 유지하는 능력을 의미합니다. 고가용성이 높은 시스템은 사용자에게 지속적인 서비스를 제공할 수 있으며 장애 발생 시에도 데이터의 손실을 최소화 하고 빠른 회복을 할 수 있습니다."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"고성능:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Kafka는 대용량 데이터 처리를 목표로 하기 때문에 높은 성능을 제공합니다. 특히 디스크에 기록하면서도 낮은 지연 시간을 유지할 수 있습니다."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"스트림 처리:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Kafka는 데이터를 실시간으로 처리할 수 있도록 스트림 처리를 지원합니다. Kafka Streams API를 사용하면 데이터에 대한 복잡한 연산을 수행하고 결과를 생성할 수 있습니다."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"확장성:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"새로운 브로커를 추가함으로써 Kafka 클러스터의 용량을 쉽게 확장할 수 있습니다. 이는 시스템의 요구 사항이 변할 때 유연하게 대응할 수 있음을 의미합니다."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"유연한 보관 및 보존:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Kafka는 데이터를 보관하고 기간별로 데이터를 보존할 수 있습니다. 이는 영구적인 데이터 저장과 이력 추적에 유용합니다."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"토픽 기반 메시지 시스템:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Kafka는 토픽을 사용하여 메시지를 구분하고 구독하는 방식을 채택합니다. 이를 통해 데이터의 흐름을 조직화하고 특정 주제에 대한 데이터를 관리할 수 있습니다."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"다양한 클라이언트 지원:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Kafka는 다양한 언어로 구현된 클라이언트를 지원하며, 프로듀서 및 컨슈머를 통한 데이터 흐름을 구축하기 위한 다양한 라이브러리를 제공합니다."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.h2,{id:"message-format",children:"Message Format"}),"\n",(0,i.jsxs)(n.p,{children:["Kafka 의 Message Format 입니다. 가장 기본적인 방식은 Key, Value 를 binary type 으로 직렬화/역직렬화 하는 방식입니다.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsxs)(n.p,{children:["조금 더 복잡한 방식으로 진화하거나 서비스의 변경사항이 유연하게 반영되도록 할 경우에는 String, int, Avro, Protobuf 등과 같은 다양한 방식으로 데이터를 직렬화/역직렬화 합니다.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)(n.p,{children:"Avro 는 Schema Registry 가 운영되어야 사용 가능한 방식이며, 데이터의 변경사항에 조금 더 유연한 방식이지만 데이터 형식으로 시간타입등이 정수형으로 사용되어야 한다던가 하는 불편함이 있습니다. 카프카를 카프카 커넥트, 카프카 스트림즈 등 다양한 방식으로 사용하는 회사에서 사용되는 데이터 포맷 방식입니다."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://velog.io/@suhongkim98/Kafka-Connect-Avro-Converter-%EC%A0%81%EC%9A%A9%ED%95%98%EB%A9%B0-%EC%8A%A4%ED%82%A4%EB%A7%88-%EB%A0%88%EC%A7%80%EC%8A%A4%ED%8A%B8%EB%A6%AC-%EC%97%B0%EA%B2%B0%ED%95%98%EA%B3%A0-%EC%9D%B4%EB%A5%BC-%EC%B9%B4%ED%94%84%EC%B9%B4-%EC%8A%A4%ED%8A%B8%EB%A6%BC%EC%A6%88%EB%A1%9C-%EB%B0%9B%EC%95%84-%EC%B2%98%EB%A6%AC%ED%95%B4%EB%B3%B4%EA%B8%B0-2",children:"Kafka Connect Avro Converter 카프카 스트림즈 예제 2"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/avro-kotlin/avro4k",children:"avro-kotlin/avro4k"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{placeholder:"blur",src:t})}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.h2,{id:"컨슈머-측면--pull-model-vs-push-model",children:"컨슈머 측면 : Pull Model vs Push Model"}),"\n",(0,i.jsx)(n.h3,{id:"pull-model",children:"Pull Model"}),"\n",(0,i.jsxs)(n.p,{children:["카프카의 컨슈머는 topic 으로부터 데이터를 읽어들입니다. 브로커가 데이터를 Push 한 것을 받아들이는 방식이 아닙니다. 컨슈머가 장애 발생 또는 유지보수를 위해 정지했을 경우 브로커에게 미치는 영향이 적다는 것이 pull model 의 장점입니다.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)(n.h3,{id:"push-model",children:"Push Model"}),"\n",(0,i.jsxs)(n.p,{children:["RabbitMQ 와 같은 메시지 큐 시스템에서 사용되는 컨슈머 애플리케이션의 경우 Push Model 방식의 컨슈머입니다. 단건 데이터의 속도가 빠를 경우 여기에 대해 동시성 처리를 잘 해줘야 한다는 어려움이 존재합니다.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.h2,{id:"토픽",children:"토픽"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{placeholder:"blur",src:h})}),"\n",(0,i.jsxs)(n.p,{children:["메시지를 적재하거나 구독할 수 있는 하나의 메시지 대기열 입니다. 데이터를 읽었던 위치는 ",(0,i.jsx)(n.code,{children:"__consumer_offset"})," 이라고 하는 카프카 내부의 토픽에 저장됩니다. 카프카는 데이터를 영속화 할 수 있습니다."]}),"\n",(0,i.jsxs)(n.p,{children:["토픽은 파티션 1개로만 운영할 수도 있고 여러개의 파티션으로 나누어 운영할 수 도 있습니다. ",(0,i.jsx)("br",{})]}),"\n",(0,i.jsxs)(n.p,{children:["파티션을 1개로 구성할 경우 컨슈머 랙 증상이 발생할 수 있기 때문에 파티션을 여러개로 구성해서 사용하는 경우가 많습니다.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsxs)(n.p,{children:["일반적으로는 토픽 하나에 파티션을 여러 개 두어서 컨슈머 랙 증상을 방지하는 편입니다.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)(n.h2,{id:"파티션",children:"파티션"}),"\n",(0,i.jsxs)(n.p,{children:["파티션은 토픽을 여러개로 나누었을 때 나누어진 개별 영역을 파티션이라고 합니다.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsxs)(n.p,{children:["파티션은 프로듀서가 보내는 메시지의 메시지 키 값에 의해 파티션이 선택됩니다. 이 메시지 키 값을 지정하지 않고 메시지를 전송할 경우 내부적으로 라운드 로빈 방식으로 파티션을 선택해서 데이터를 전송하게 됩니다.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Key 가 존재할 경우 : 키를 Hash 값으로 변환 후 특정 파티션을 선택. 항상 같은 파티션이 선택 됨"}),"\n",(0,i.jsx)(n.li,{children:"Key 를 지정하지 않으면 : Round Robin 방식으로 파티션을 선택"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{placeholder:"blur",src:A})}),"\n",(0,i.jsx)(n.p,{children:"위의 그림은 메시지의 KEY:VALUE 가 아래와 같이 구성되었을 때 어떻게 파티션이 나타내는지를 표현한 그림입니다."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["1:안녕하세요","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"KEY 가 1일 때는 3으로 나눈 나머지가 1이기에 파티션 1번으로 분배"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["2:누구시죠?","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"KEY 가 2일 때는 3으로 나눈 나머지가 2이기에 파티션 2번으로 분배"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["3: 님은 누구신데요?","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"KEY 가 3일 때는 3으로 나눈 나머지가 0이기에 파티션 0번으로 분배"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.h2,{id:"메시지-프로듀서",children:"메시지, 프로듀서"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"메시지"}),(0,i.jsx)("br",{})]}),"\n",(0,i.jsxs)(n.p,{children:["토픽에 적재되는 개별 데이터를 메시지라고 합니다. 메시지는 key, value, timestamp 로 구성됩니다. ",(0,i.jsx)("br",{})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"프로듀서"}),(0,i.jsx)("br",{})]}),"\n",(0,i.jsxs)(n.p,{children:["토픽에 데이터를 적재하는 역할을 합니다.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsxs)(n.p,{children:["프로듀서는 여러가지 언어로 작성 가능합니다.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.h2,{id:"컨슈머-컨슈머-랙-lag-컨슈머-그룹-컨슈머-오프셋",children:"컨슈머, 컨슈머 랙 (LAG), 컨슈머 그룹, 컨슈머 오프셋"}),"\n",(0,i.jsx)(n.h3,{id:"컨슈머",children:"컨슈머"}),"\n",(0,i.jsxs)(n.p,{children:["컨슈머는 토픽을 구독해서 메시지를 읽어들이는 역할을 수행합니다. 보통 컨슈머의 개수는 파티션의 개수에 맞춰서 띄웁니다.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)(n.h3,{id:"컨슈머-랙",children:"컨슈머 랙"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{placeholder:"blur",src:x})}),"\n",(0,i.jsxs)(n.p,{children:["컨슈머는 토픽을 구독해서 메시지를 읽어들입니다.  그런데 프로듀서가 메시지를 발행하는 속도에 비해 컨슈머가 메시지를 읽어서 처리하는 속도가 느릴 경우 점점 컨슈머의 오프셋이 가장 최신 오프셋으로부터 멀어지게 됩니다. 이렇게 컨슈머의 읽기 속도가 메시지 발급속도를 따라가지 못하는 현상을 ",(0,i.jsx)(n.strong,{children:'"컨슈머 랙(Consumer Lag)"'})," 이라고 부릅니다.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"TODO : Current Offset 과 LEO 와의 간극을 터미널 cli 로 보여주는 캡처 추가"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"컨슈머 랙 증상은 토픽을 여러 개의 파티션으로 구성하고 각각의 파티션을 구독하는 컨슈머들을 파티션 갯수만큼 띄우는 것으로 해결이 가능합니다."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{placeholder:"blur",src:j})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"TODO 그림 수정 필요"}),"\n"]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.h3,{id:"컨슈머-그룹",children:"컨슈머 그룹"}),"\n",(0,i.jsxs)(n.p,{children:["보통 토픽을 파티션 1개로만 운영하는 경우가 없기때문에 여러개의 파티션으로 구성하는데, 이렇게 파티션을 여러개로 나누어 둔 경우 컨슈머 역시 파티션 갯수에 맞춰서 띄웁니다. 그리고 띄운 컨슈머들을 하나의 그룹으로 묶어서 하나의 그룹으로 인식하는데 이것을 컨슈머 그룹이라고 합니다..",(0,i.jsx)("br",{})]}),"\n",(0,i.jsxs)(n.p,{children:["만약 토픽 하나에 대한 파티션 개수보다 컨슈머 그룹내의 컨슈머 개수가 더 많다면 어떻게 될까요? 이런 경우 놀고 있는(유휴(Idle)) 상태의 컨슈머가 생기게 됩니다. 장애로 이어지지는 않지만 자원 낭비가 생기게 됩니다.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{placeholder:"blur",src:o})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"TODO : 헐 그림 잘못 그렸었네... 파티션에 offset 을 똑같은 번호로 지정을... 복붙의 폐해다!!!"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["여러 개의 파티션으로 나눌 경우 각 파티션을 바라봐야 할 컨슈머 개수도 파티션의 개수에 맞춰서 운영합니다. 그런데 파티션의 개수보다 컨슈머의 수가 더 많을 경우 일부 컨슈머는 파티션을 할당받지 못하고 대기 상태가 됩니다. 위의 그림에서는 초록색 배경으로 표시한 컨슈머가 유휴상태에 진입했습니다.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)(n.h3,{id:"컨슈머-오프셋-consumer-offset",children:"컨슈머 오프셋 (Consumer Offset)"}),"\n",(0,i.jsx)(n.h4,{id:"__consumer_offset",children:"__consumer_offset"}),"\n",(0,i.jsxs)(n.p,{children:["Kafka 는 Consumer Group 이 어떤 파티션의 어느 offset 까지 읽었는지 offset 정보를 저장합니다. offset 정보는 ",(0,i.jsx)(n.code,{children:"__consumer_offset"})," 이라는 topic 에 저장됩니다. Offset 이 커밋되는 방식은 아래와 같이 3종류이며 실무에서 많이 사용되는 방식은 ",(0,i.jsx)(n.code,{children:"At least once"})," 입니다.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)(n.h4,{id:"at-least-once",children:"At Least Once"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"실무에서 가장 많이 쓰는 방식입니다."}),"\n",(0,i.jsx)(n.li,{children:"적어도 1회는 전달되며 메시지는 중복될 수는 있어도 상실되지는 않습니다."}),"\n",(0,i.jsx)(n.li,{children:"재전송시도를 하며, 중복된 데이터를 삭제 하지 않습니다."}),"\n",(0,i.jsx)(n.li,{children:"Idempotent (멱등성) 해야 합니다. (중복된 메시지를 처리하는 것이 시스템에 영향을 미치지 않아야 합니다.)"}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"at-most-once",children:"At Most Once"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"1 회는 전달을 시도해보는 방식입니다."}),"\n",(0,i.jsx)(n.li,{children:"메시지는 중복되지 않지만 상실될 수 있습니다."}),"\n",(0,i.jsx)(n.li,{children:"재전송 시도를 안하고, 중복역시 삭제하지 않습니다."}),"\n",(0,i.jsx)(n.li,{children:"예를 들면 미디어 스트리밍 처럼 실시간 중계를 할 경우에 선택할 수 있는 방식입니다."}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"exactly-once",children:"Exactly Once"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"메시지를 정확히 1회만 전달합니다."}),"\n",(0,i.jsx)(n.li,{children:"모든 파티션에 복제를 해야 하기에 성능은 좋지 않습니다."}),"\n"]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsxs)(n.p,{children:["이래 저래 검색을 해본 결과 현업에서는 데이터 복제 시의 장애가 날 것이라는 가정 없이 내부적으로 복제를 할 것이라는 전제 하에 ",(0,i.jsx)(n.code,{children:"At Least Once"})," 를 선택한다고 합니다. 어차피 리더 파티션이 데이터를 받았다면, 그 이후의 복제 실패 상황에 대해 다른 파티션으로의 복제작업을 재개하는 작업 등은 L4 레벨에서의 메커니즘으로 간주하는 듯 보입니다.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsxs)(n.p,{children:["추측을 해보면, 대부분의 경우 애플리케이션 레벨에서 특정 키값이 있는지 없는지 체크하는 로직을 정의해두는 것으로 보입니다.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)(n.h2,{id:"순서가-중요한-메시지일-경우",children:"순서가 중요한 메시지일 경우"}),"\n",(0,i.jsx)(n.h3,{id:"1-인프라-레벨에서-해결하는-방식",children:"1) 인프라 레벨에서 해결하는 방식"}),"\n",(0,i.jsx)(n.p,{children:"순차적인 메시지 처리를 하게끔 해야 하는 경우가 있습니다. 이런 경우 어떻게 하면 문제를 해결할 수 있는지를 정리해봅니다."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{placeholder:"blur",src:p})}),"\n",(0,i.jsxs)(n.p,{children:["토픽을 여러 개의 파티션으로 파티셔닝하면 메시지가 순차적으로 처리는 것을 보장하지 못하게 됩니다. ",(0,i.jsx)("br",{})]}),"\n",(0,i.jsxs)(n.p,{children:["예를 들어서 ",(0,i.jsx)(n.strong,{children:"주문완료 → 결제완료 → 상품준비중"})," 의 순서로 메시지를 보내야 하는 경우가 있습니다.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsxs)(n.p,{children:["만약 파티션 알고리즘에 따라 처리하거나, 기본 설정인 라운드 로빈 방식으로 처리할 경우 주문완료 메시지는 파티션 1에, 결제완료는 파티션 2에, 상품 준비중 이벤트는 파티션1에 쌓이게 되어서 메시지가 순차적으로 전달되지 않을 수 있습니다.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{placeholder:"blur",src:u})}),"\n",(0,i.jsxs)(n.p,{children:["이런 경우 특정 상품을 장바구니에서 주문/결제 하는 기능에 대해서는 특정 파티션을 선택해서 메시지를 전송하게끔 하는 것으로 이런 문제를 해결 가능합니다.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.h3,{id:"2-애플리케이션-레벨에서-해결하는-방식",children:"2) 애플리케이션 레벨에서 해결하는 방식"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"TODO : 메시지의 킷값을 순서대로 정렬할 수 있는 킷값으로 지정. 다시 불러올 때는 오름차순으로 가장 오래된 메시지 중 읽어들이지 않은 메시지를 읽어들이는 방식. 데브원영님 책에서 이야기하는 방식. 애플리케이션 레벨을 이야기하는 것으로 보임."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"카프카-브로커",children:"카프카 브로커"}),"\n",(0,i.jsx)(n.p,{children:"카프카 브로커는 토픽들과 파티션들을 가지고 운영하고 있는 하나의 물리적인 서버를 의미합니다."}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"어쩌다 보니 그림이 너무 크게 추출되었는데 그림 사이즈 수정하는 도구를 찾아서 문제를 해결하겠습니다!!!"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{placeholder:"blur",src:b})}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.h2,{id:"카프카-브로커-클러스터링",children:"카프카 브로커 클러스터링"}),"\n",(0,i.jsxs)(n.p,{children:["몽고DB의 레플리카셋, 샤드 클러스터를 구성해보셨거나 k8s 앱을 작성해보신 분들이라면 클러스터링이라는 것이 무엇을 의미하는지 아실 겁니다. 카프카 브로커 역시 클러스터링이 가능합니다.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{placeholder:"blur",src:d})}),"\n",(0,i.jsxs)(n.p,{children:["위의 그림에서 보듯 주키퍼(zookeeper)를 통해서 브로커들의 상태를 관리하고, 리더파티션 선출, 메타데이터 관리 등의 역할을 합니다. 주키퍼(zookeeper) 역시 클러스터링이 가능합니다.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)(n.h2,{id:"카프카-브로커-장애-발생시-리더-파티션-재선출",children:"카프카 브로커 장애 발생시 리더 파티션 재선출"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{placeholder:"blur",src:k})}),"\n",(0,i.jsxs)(n.p,{children:["위의 그림에서는 1번 브로커 에서 장애가 생겼습니다. 브로커 1 에는 파티션 1을 리더 파티션으로 운영되고 있었습니다. 이렇게 장애가 생긴 경우 주키퍼(zookeeper)가 브로커들의 상태를 체크하고 있다가 장애를 파악하면 리더 파티션을 투표를 통해서 선출하게 되는데요. 위의 그림에서는 2번 브로커 내의 1번 파티션이 리더로 선출된 것을 확인 가능합니다.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsxs)(n.p,{children:["참고로 주키퍼(zookeeper) 역시 클러스터링이 가능합니다.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.h2,{id:"가용성availability",children:"가용성(Availability)"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"가용성(Availability) 라는 단어는 Available 해야 한다"}),"는 성격을 의미합니다. ",(0,i.jsx)(n.strong,{children:"어떤 노드나 커넥션 포인트가 계속해서 접근이 가능한 성격을 띄어야 한다"}),"는 이야기 입니다. 만약 노드 하나가 통신이 불가능한 상황이 되었을 때 같은 그룹 내의 다른 노드가 그 역할을 대신할 수 있어야 하는데, 이와 같은 용어를 가용성(Availability) 라고 부릅니다.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsxs)(n.p,{children:["가용성 이라는 한글,한문 단어는 흔히 자주 언급되는 개념이지만, 쉽게 와닿지 않는 답답한 단어 같습니다. 오히려 영어인 Availability 가 더 합리적인 단어로 느껴집니다. ",(0,i.jsx)("br",{})]}),"\n",(0,i.jsxs)(n.p,{children:["가용성(Availability)를 지원하는 순간 리소스를 어느 정도는 소모를 해야 합니다. 다른 노드 들에 데이터를 복제한다던가 healthcheck 를 한다던가 하는 동작이 필요합니다. 따라서 단순한 로컬 캐시에 비해서는 성능적으로 조금은 느려질 수 있지만, 크게 느려지는 수준은 아니며, 증분방식의 메트릭 수집등을 하기에 심각한 성능 소모는 없습니다.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsxs)(n.p,{children:["예를 들면 로컬 캐시를 구성하더라도 로컬 캐시가 노드마다 하나씩 복제되어 있다거나 하는 그런 안전한 대책이 필요하다면 EhCache 기반의 로컬 캐시를 사용하기 보다는 Hazelcast 를 기반으로 로컬 캐시 역할도 가능하면서 Clustering 이 가능하도록 인메모리 그리드로 구성하게 됩니다.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsxs)(n.p,{children:["레디스를 구성할 때 여러 노드 기반으로 클러스터링이 된 클러스터를 구성하는 것 역시 가용성(Availability) 를 제공하기 위한 개념 중 하나라고 할 수 있습니다.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)(n.h2,{id:"partition-rf-isr",children:"Partition, RF, ISR"}),"\n",(0,i.jsx)(n.h3,{id:"partition",children:"Partition"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"위에서 한번 정리했지만, 이번에는 RF, ISR 을 설명하기 위해 간단하게 요약해봅니다."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["하나의 토픽은 여러개의 파티션으로 분리될 수 있습니다. 파티션은 데이터가 저장될 위치를 의미합니다. 즉, 데이터에 대해 파티셔닝 알고리즘을 적용해서 특정 파티션으로만 데이터가 전달될 수 있도록 파티션의 위치를 지정해주는 것을 파티셔닝이라고 합니다.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsxs)(n.p,{children:["파티션이 많으면 성능은 향상되지만 절대적이지는 않습니다. 브로커 성능에는 한계가 있기 때문입니다.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)(n.h3,{id:"rf-replication-factor",children:"RF (Replication Factor)"}),"\n",(0,i.jsxs)(n.p,{children:["하나의 파티션은 1개 이상의 복제본 (Replica) 을 가질 수 있습니다. RF (Replication Factor) 는 복제본의 갯수를 의미합니다. RF가 1보다 크면 클수록 가용성(Availability)이 높아진다고 할 수 있습니다. 물론, 이때 브로커 갯수가 충분해야 합니다.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsxs)(n.p,{children:["RF 가 너무 크면 저장공간이 낭비된다는 단점이 있습니다. Produce 시에도 지연시간이 길어집니다. 복제해줘야 하는 노드가 많아지기 때문입니다.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsxs)(n.p,{children:["일반적으로 Replica 의 갯수는 Broker 의 갯수보다 적은 것이 권장됩니다. 그래야 안정적이고 성능 부하가 없습니다.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)(n.p,{children:"아래의 그림들을 참고해주시기 바랍니다."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://cdn.educba.com/academy/wp-content/uploads/2021/05/Kafka-Replication-Factor-2-1.png.webp",alt:""})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["출처 : ",(0,i.jsx)(n.a,{href:"https://www.educba.com/kafka-replication-factor/",children:"https://www.educba.com/kafka-replication-factor/"})]}),"\n"]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://miro.medium.com/v2/resize:fit:828/format:webp/1*Sza0NeMLKrNFNC245mLzWw.jpeg",alt:""})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["출처 : ",(0,i.jsx)(n.a,{href:"https://medium.com/@_amanarora/replication-in-kafka-58b39e91b64e",children:"https://medium.com/@_amanarora/replication-in-kafka-58b39e91b64e"})]}),"\n"]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.h3,{id:"isr-in-sync-replica",children:"ISR (In-Sync Replica)"}),"\n",(0,i.jsxs)(n.p,{children:["Replica 중 Sync 를 맞출 Replica 의 그룹을 ISR (In-Sync Replica) 그룹이라고 이야기합니다.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsxs)(n.p,{children:["Partition 의 복제본이 많아지면 가용성(Availability)가 늘어납니다. 그리고 'Produce' 시에도 복제해야 할 데이터가 늘어납니다. 이렇게 되면 Produce 시의 지연 시간이 길어질 수 있다는 단점이 생깁니다.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.p,{children:"ISR 그룹에 많은 파티션을 포함하고 있으면"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Produce 신뢰성/가용성 향상"}),"\n",(0,i.jsx)(n.li,{children:"but, 지연시간 증가"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"ISR 그룹에 적은 파티션을 포함하고 있으면"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Produce 신뢰성/가용성 하락"}),"\n",(0,i.jsx)(n.li,{children:"but, 지연시간 감소"}),"\n"]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.p,{children:'"적절하게 토픽에 Produce 되었다"'}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'→ "토픽 내의 파티션들의 모든 ISR 그룹에 복제가 잘 이뤄졌다."'}),"\n"]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsxs)(n.p,{children:["Produce 가 되었다는 의미에는 꼭 ISR 그룹에 복제하는 작업도 모두 완료되었다는 의미가 내포되어 있다는 사실을 기억해야 합니다.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.h2,{id:"rabbitmq",children:"RabbitMQ"}),"\n",(0,i.jsxs)(n.p,{children:["RabbitMQ 의 경우 데이터를 그대로 보냅니다. 전송 레벨에서의 commit, rollback 이 없습니다. 따라서 전송실패나 예외 상황에 대한 예외 처리를 직접 작성해줘야 합니다. 캐싱전략을 잘짜거나 등등 이런 전략을 잘 구현한다면 예외 상황에 대한 대응이 가능해집니다.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsxs)(n.p,{children:["컨슈머 입장에서는 Push 모델 방식으로 데이터를 받습니다. 따라서 컨슈머 측에서 부하를 처리하기 쉽지 않습니다. ",(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)(n.h2,{id:"kafka",children:"Kafka"}),"\n",(0,i.jsxs)(n.p,{children:["카프카의 경우 전송 레벨에서의 commit, rollback 이 지원됩니다. 메시지 큐 레벨에서의 메시지 트랜잭션이라는 것이 존재합니다. 그런데, 간혹 이것을 비즈니스 실패시의 실패와 혼동해서 사용할 경우가 가끔 있는데, 단순한 전송 기능의 실패와 비즈니스 로직 실패와는 구별해서 사용해야 합니다.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsxs)(n.p,{children:["카프카의 컨슈머 입장에서는 Pull 모델 방식으로 데이터를 구독합니다. 따라서 Consumer 의 부하 없이 데이터를 처리하는 것이 가능합니다. 다만 LAG 이 발생할 경우 별도의 처리가 필요합니다.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.h2,{id:"kafka-도입에-대한-개인적인-의견",children:"Kafka 도입에 대한 개인적인 의견"}),"\n",(0,i.jsxs)(n.p,{children:["토픽을 어떻게 설계할지 파티션은 몇개로 잡을지, 파티셔닝 알고리즘은 뭘로 할지 부터 모니터링은 뭘로 할지 등을 세부적으로 결정해야 합니다. 어떻게 하다보니 간접적으로 들은 이야기로는 일반적으로 현업에서 카프카 도입에 5개월을 잡고 프로젝트로 진행합니다. 한달 내에 카프카를 도입하는 경우는 내부에 체계가 없다거나, 팀장 위치가 없는 팀일 경우라고 합니다.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsxs)(n.p,{children:["혹시라도 Kafka 를 새로 도입하려는 팀이 있으시다면, 팀원들을 고생시키지 마시고, 신중하게 판단을 내려서 다른 운영업무와 병행하도록 프로세스를 마련하셨으면 합니다. 매번 잘못된 팀 의사 결정이 직원/팀원이 퇴사하게 되는 케이스를 낳는 다는 걸 꽤 많이 경험하셨을 팀장님들이 계시다면... 꼭 신중하게 생각하셔야 할 듯 합니다.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["저는 두번 다시 메시지 큐 쪽으로 더 경험해보고 싶지 않은데 어쩌다보니 ... 살짝 걸치게 되어서 시간을 내서 개념정리를 처음부터 다시 하고 있네요!! ㅋㅋ 얼른 발 떼고 어드민 + 스프링 시큐리티 + React 쪽 업무를 맡아보고 싶은데 말이죠...",(0,i.jsx)("br",{})]}),"\n",(0,i.jsxs)(n.p,{children:["덕분에 오랫만에 다시 개념 훓으면서 정리를 다시 할 수 있다는 건 좋았습니다.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)(n.p,{children:"혹시 모르니 언제 똥이 넘어올지 모르니 스터디 중입니다."}),"\n"]}),"\n",(0,i.jsx)("br",{})]})}let g={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,c.a)(),e.components);return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(_createMdxContent,{...e})}):_createMdxContent(e)},pageOpts:{filePath:"pages/kafka-concepts/kafka-basic.mdx",route:"/kafka-concepts/kafka-basic",timestamp:1716703053e3,pageMap:[{kind:"MdxPage",name:"index",route:"/"},{kind:"MdxPage",name:"kafka-cli-examples",route:"/kafka-cli-examples"},{kind:"Folder",name:"kafka-concepts",route:"/kafka-concepts",children:[{kind:"MdxPage",name:"kafka-basic",route:"/kafka-concepts/kafka-basic"},{kind:"Meta",data:{"kafka-basic":"카프카 기본 개념"}}]},{kind:"MdxPage",name:"kafka-concepts",route:"/kafka-concepts"},{kind:"MdxPage",name:"kafka-java-examples",route:"/kafka-java-examples"},{kind:"MdxPage",name:"kafka-multi-module-example",route:"/kafka-multi-module-example"},{kind:"Meta",data:{index:"Introduction","kafka-concepts":"카프카 개념들","kafka-cli-examples":"Kafka CLI","kafka-java-examples":"카프카 Java 예제","kafka-multi-module-examples":"Kafka 멀티모듈 예제",contact:{title:"Contact ↗",type:"page",href:"-",newWindow:!0},"kafka-multi-module-example":"Kafka Multi Module Example"}}],flexsearch:{codeblocks:!0},title:"Kafka Basic",headings:m},pageNextRoute:"/kafka-concepts/kafka-basic",nextraLayout:l.ZP,themeConfig:a.Z};var f=(0,r.j)(g)},8426:function(e,n,s){"use strict";var i=s(5893);s(7294);let r={logo:(0,i.jsx)("span",{children:"Docs Kafka Summary"}),project:{link:"https://github.com/chagchagchag/docs-kafka-summary"},docsRepositoryBase:"https://github.com/chagchagchag/docs-kafka-summary",footer:{text:"Nextra Docs Template"}};n.Z=r},5789:function(){}},function(e){e.O(0,[774,796,888,179],function(){return e(e.s=8641)}),_N_E=e.O()}]);