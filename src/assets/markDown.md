<!--split:basic-->

<p>asdfasdfasdfadsf</p>

# This is a H1
## This is a H2
### This is a H3
#### This is a H4
##### This is a H5
###### This is a H6

<!--split:test-->

| 값 | 의미 | 기본값 |
|---|:---:|---:|
| `static` | 유형(기준) 없음 / 배치 불가능 | `static` |
| `relative` | 요소 자신을 기준으로 배치 |  |
| `absolute` | 위치 상 부모(조상)요소를 기준으로 배치 |  |
| `fixed` | 브라우저 창을 기준으로 배치 |  |

<!--split:float-->

<p>asdfasdfasdfadsf</p>
<gtbutton indicator="primary">버튼(Primary)</gtbutton>

<!--split:hello-->
```html
<sm-number label="승인 요청 중" value="3" unit="명" :isShowBedge="true" />
```
<!--split:test1-->
### Props
| Property | Description | Type | Accepted Values | Default |
| — — — — — — — — — | — — — — — — — — -| — — — — — — — — | — — — — — — — — — — | — — — — — — -|
| size | size | String | Null / small | — |
| label | label | String | — | — |
| value `required` | value of number | Number,String | — | 0 |
| unit | unit | String | — | — |
| isShowBedge | whether bedge shown or not | Boolean | — | false |