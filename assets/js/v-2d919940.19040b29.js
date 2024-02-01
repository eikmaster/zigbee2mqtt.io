"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[66871],{223695:(e,t,o)=>{o.r(t),o.d(t,{data:()=>i});const i=JSON.parse('{"key":"v-2d919940","path":"/devices/TS130F_dual.html","title":"Lonsonho TS130F_dual control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Lonsonho TS130F_dual control via MQTT","description":"Integrate your Lonsonho TS130F_dual via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2024-01-01T12:47:02.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"Calibration","slug":"calibration","link":"#calibration","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Moving (enum, left endpoint)","slug":"moving-enum-left-endpoint","link":"#moving-enum-left-endpoint","children":[]},{"level":3,"title":"Moving (enum, right endpoint)","slug":"moving-enum-right-endpoint","link":"#moving-enum-right-endpoint","children":[]},{"level":3,"title":"Calibration time (numeric, left endpoint)","slug":"calibration-time-numeric-left-endpoint","link":"#calibration-time-numeric-left-endpoint","children":[]},{"level":3,"title":"Calibration time (numeric, right endpoint)","slug":"calibration-time-numeric-right-endpoint","link":"#calibration-time-numeric-right-endpoint","children":[]},{"level":3,"title":"Cover (left endpoint)","slug":"cover-left-endpoint","link":"#cover-left-endpoint","children":[]},{"level":3,"title":"Calibration (binary, left endpoint)","slug":"calibration-binary-left-endpoint","link":"#calibration-binary-left-endpoint","children":[]},{"level":3,"title":"Motor reversal (binary, left endpoint)","slug":"motor-reversal-binary-left-endpoint","link":"#motor-reversal-binary-left-endpoint","children":[]},{"level":3,"title":"Cover (right endpoint)","slug":"cover-right-endpoint","link":"#cover-right-endpoint","children":[]},{"level":3,"title":"Calibration (binary, right endpoint)","slug":"calibration-binary-right-endpoint","link":"#calibration-binary-right-endpoint","children":[]},{"level":3,"title":"Motor reversal (binary, right endpoint)","slug":"motor-reversal-binary-right-endpoint","link":"#motor-reversal-binary-right-endpoint","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1706731725000},"filePathRelative":"devices/TS130F_dual.md"}')},468842:(e,t,o)=>{o.r(t),o.d(t,{default:()=>g});var i=o(166252);const n=(0,i._)("h1",{id:"lonsonho-ts130f-dual",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#lonsonho-ts130f-dual","aria-hidden":"true"},"#"),(0,i.Uk)(" Lonsonho TS130F_dual")],-1),a=(0,i._)("thead",null,[(0,i._)("tr",null,[(0,i._)("th"),(0,i._)("th")])],-1),d=(0,i._)("tr",null,[(0,i._)("td",null,"Model"),(0,i._)("td",null,"TS130F_dual")],-1),r=(0,i._)("td",null,"Vendor",-1),l=(0,i._)("tr",null,[(0,i._)("td",null,"Description"),(0,i._)("td",null,"Dual curtain/blind module")],-1),c=(0,i._)("tr",null,[(0,i._)("td",null,"Exposes"),(0,i._)("td",null,"moving, calibration_time, cover (state, position), calibration, motor_reversal, linkquality")],-1),s=(0,i._)("tr",null,[(0,i._)("td",null,"Picture"),(0,i._)("td",null,[(0,i._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/TS130F_dual.jpg",alt:"Lonsonho TS130F_dual"})])],-1),h=(0,i.uE)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><p>The output is only driven once the input signal is released, hence making this device difficult to work with non-momentary switches.</p><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>Press on pair button for 10 seconds to enter pairing mode</p><h3 id="calibration" tabindex="-1"><a class="header-anchor" href="#calibration" aria-hidden="true">#</a> Calibration</h3><ul><li>Press the open button on the switch, wait until the curtains are completely open.</li><li>Press the same button on the switch again to &#39;stop&#39;.</li><li>Put the device into calibration mode, see <a href="#calibration-binary">below</a>.</li><li>Press the close button on the switch, wait until curtains are fully closed.</li><li>Press the same button on the switch.</li><li>Disable the calibration mode, see <a href="#calibration-binary">below</a>.</li></ul>',6),u=(0,i._)("h2",{id:"options",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,i.Uk)(" Options")],-1),p=(0,i.uE)('<ul><li><code>invert_cover</code>: Inverts the cover position, false: open=100,close=0, true: open=0,close=100 (default false). The value must be <code>true</code> or <code>false</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="moving-enum-left-endpoint" tabindex="-1"><a class="header-anchor" href="#moving-enum-left-endpoint" aria-hidden="true">#</a> Moving (enum, left endpoint)</h3><p>Value can be found in the published state on the <code>moving_left</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>UP</code>, <code>STOP</code>, <code>DOWN</code>.</p><h3 id="moving-enum-right-endpoint" tabindex="-1"><a class="header-anchor" href="#moving-enum-right-endpoint" aria-hidden="true">#</a> Moving (enum, right endpoint)</h3><p>Value can be found in the published state on the <code>moving_right</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>UP</code>, <code>STOP</code>, <code>DOWN</code>.</p><h3 id="calibration-time-numeric-left-endpoint" tabindex="-1"><a class="header-anchor" href="#calibration-time-numeric-left-endpoint" aria-hidden="true">#</a> Calibration time (numeric, left endpoint)</h3><p>Calibration time. Value can be found in the published state on the <code>calibration_time_left</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>s</code>.</p><h3 id="calibration-time-numeric-right-endpoint" tabindex="-1"><a class="header-anchor" href="#calibration-time-numeric-right-endpoint" aria-hidden="true">#</a> Calibration time (numeric, right endpoint)</h3><p>Calibration time. Value can be found in the published state on the <code>calibration_time_right</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>s</code>.</p><h3 id="cover-left-endpoint" tabindex="-1"><a class="header-anchor" href="#cover-left-endpoint" aria-hidden="true">#</a> Cover (left endpoint)</h3><p>The current state of this cover is in the published state under the <code>state_left</code> property (value is <code>OPEN</code> or <code>CLOSE</code>). To control this cover publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_left&quot;: &quot;OPEN&quot;}</code>, <code>{&quot;state_left&quot;: &quot;CLOSE&quot;}</code>, <code>{&quot;state_left&quot;: &quot;STOP&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value. To change the position publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;position_left&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>100</code>.</p><h3 id="calibration-binary-left-endpoint" tabindex="-1"><a class="header-anchor" href="#calibration-binary-left-endpoint" aria-hidden="true">#</a> Calibration (binary, left endpoint)</h3><p>Value can be found in the published state on the <code>calibration_left</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;calibration_left&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;calibration_left&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> calibration is ON, if <code>OFF</code> OFF.</p><h3 id="motor-reversal-binary-left-endpoint" tabindex="-1"><a class="header-anchor" href="#motor-reversal-binary-left-endpoint" aria-hidden="true">#</a> Motor reversal (binary, left endpoint)</h3><p>Value can be found in the published state on the <code>motor_reversal_left</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;motor_reversal_left&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;motor_reversal_left&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> motor reversal is ON, if <code>OFF</code> OFF.</p><h3 id="cover-right-endpoint" tabindex="-1"><a class="header-anchor" href="#cover-right-endpoint" aria-hidden="true">#</a> Cover (right endpoint)</h3><p>The current state of this cover is in the published state under the <code>state_right</code> property (value is <code>OPEN</code> or <code>CLOSE</code>). To control this cover publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_right&quot;: &quot;OPEN&quot;}</code>, <code>{&quot;state_right&quot;: &quot;CLOSE&quot;}</code>, <code>{&quot;state_right&quot;: &quot;STOP&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value. To change the position publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;position_right&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>100</code>.</p><h3 id="calibration-binary-right-endpoint" tabindex="-1"><a class="header-anchor" href="#calibration-binary-right-endpoint" aria-hidden="true">#</a> Calibration (binary, right endpoint)</h3><p>Value can be found in the published state on the <code>calibration_right</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;calibration_right&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;calibration_right&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> calibration is ON, if <code>OFF</code> OFF.</p><h3 id="motor-reversal-binary-right-endpoint" tabindex="-1"><a class="header-anchor" href="#motor-reversal-binary-right-endpoint" aria-hidden="true">#</a> Motor reversal (binary, right endpoint)</h3><p>Value can be found in the published state on the <code>motor_reversal_right</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;motor_reversal_right&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;motor_reversal_right&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> motor reversal is ON, if <code>OFF</code> OFF.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',24),b={},g=(0,o(983744).Z)(b,[["render",function(e,t){const o=(0,i.up)("RouterLink");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.kq)(" !!!! "),(0,i.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,i.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,i.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,i.kq)(" !!!! "),n,(0,i._)("table",null,[a,(0,i._)("tbody",null,[d,(0,i._)("tr",null,[r,(0,i._)("td",null,[(0,i.Wm)(o,{to:"/supported-devices/#v=Lonsonho"},{default:(0,i.w5)((()=>[(0,i.Uk)("Lonsonho")])),_:1})])]),l,c,s])]),(0,i.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),h,(0,i.kq)(" Notes END: Do not edit below this line "),u,(0,i._)("p",null,[(0,i._)("em",null,[(0,i.Wm)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.w5)((()=>[(0,i.Uk)("How to use device type specific configuration")])),_:1})])]),p])}]])}}]);