<!--split:basic-->
--use-html--
<div class="group">        
  <table class="group-table">
    <colgroup>
      <col style="width: 20%" />
      <col style="width: 20%" />
      <col style="width: 20%" />
      <col style="width: 40%" />
    </colgroup>
    <thead>
      <tr>
        <th>OPTION</th>
        <th>TYPE</th>
        <th>DEFAULT</th>
        <th>DESCRIPTION</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>type</td>
        <td>String</td>
        <td>'primary'</td>
        <td>'primary','info','warning','danger'</td>
      </tr>
      <tr>
        <td>direction</td>
        <td>String</td>
        <td>'center-top'</td>
        <td>'right-top','left-top','right-bottom','left-bottom','center-top','center-bottom'</td>
      </tr>
      <tr>
        <td>message</td>
        <td>String</td>
        <td>''</td>
        <td>toast message</td>
      </tr>
    </tbody>
  </table>
</div>

<gtbutton indicator="primary">버튼(Primary)</gtbutton>

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