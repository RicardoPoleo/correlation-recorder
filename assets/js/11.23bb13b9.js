(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{404:function(e,t,r){"use strict";r.r(t);var a=r(8),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"the-flow"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#the-flow"}},[e._v("#")]),e._v(" The Flow")]),e._v(" "),r("p",[e._v("In the following sections, we will cover topics regarding how JMeter process and sends the Requests and Responses to the plugin, when and where this will be affected by the configured Correlation Rules, and how the order of the methods affects the results the user will see during the recording.")]),e._v(" "),r("h2",{attrs:{id:"the-steps"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#the-steps"}},[e._v("#")]),e._v(" The Steps")]),e._v(" "),r("p",[e._v("In General Terms, the recording follows this order, for the case that involves processing with the plugin:")]),e._v(" "),r("ol",[r("li",[e._v("One Request goes to the server")]),e._v(" "),r("li",[e._v("The server gives a Response")]),e._v(" "),r("li",[e._v("JMeter takes both and sends them to the plugin")]),e._v(" "),r("li",[e._v("The Proxy verifies and sends them to the CorrelationEngine (deliverSampler() method)")]),e._v(" "),r("li",[e._v("The Engine applies all the Rules to the Response, Request and Recorded Sampler (process() method)")]),e._v(" "),r("li",[e._v("The Proxy takes the processed values back to JMeter (super.deliverSampler() method)")]),e._v(" "),r("li",[e._v("JMeter sends the Recorded Sampler to the configured Recording Controller")])]),e._v(" "),r("h2",{attrs:{id:"the-explanation"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#the-explanation"}},[e._v("#")]),e._v(" The Explanation")]),e._v(" "),r("p",[e._v("Now, on a detailed point of view, let's talk about each one of the steps of processing the recorded Samplers")]),e._v(" "),r("h3",{attrs:{id:"proxy"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#proxy"}},[e._v("#")]),e._v(" Proxy")]),e._v(" "),r("h4",{attrs:{id:"deliver-recorded-sampler"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#deliver-recorded-sampler"}},[e._v("#")]),e._v(" Deliver Recorded Sampler")]),e._v(" "),r("p",[e._v("For the Correlation Recorder Plugin, the Proxy is handled by "),r("code",[e._v("CorrelationProxyControl.java")]),e._v(", who receives an HTTPSamplerBase (the recorded Sampler), and the SampleResult (the request and the response), process and sends it to the CorrelationEngine to be processed.")]),e._v(" "),r("p",[e._v("All that occurs in the deliverSampler method.")]),e._v(" "),r("div",{staticClass:"language-java extra-class"},[r("pre",{pre:!0,attrs:{class:"language-java"}},[r("code",[e._v("  "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("public")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("void")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("deliverSampler")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),r("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("HTTPSamplerBase")]),e._v(" sampler"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("TestElement")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" testElements"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("SampleResult")]),e._v(" result"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),r("h4",{attrs:{id:"context-reset"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#context-reset"}},[e._v("#")]),e._v(" Context Reset")]),e._v(" "),r("p",[e._v("The "),r("code",[e._v("CorrelationProxyControl.java")]),e._v(" also holds the responsibility of triggering the Contexts reset when a new recording starts, so each recorder flow starts from a clean base.")]),e._v(" "),r("h3",{attrs:{id:"engine"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#engine"}},[e._v("#")]),e._v(" Engine")]),e._v(" "),r("p",[e._v("The Engine contains, not only the configured Correlation Rules setup before starting the recording, but also each one of the Contexts (CorrelationContexts and any Custom Context) associated with then, in their updated form. This role is been handled by the "),r("code",[e._v("CorrelationEngine.java")])]),e._v(" "),r("h4",{attrs:{id:"responsibilities"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#responsibilities"}},[e._v("#")]),e._v(" Responsibilities")]),e._v(" "),r("p",[e._v("At this point, the only responsibilities of the Engine are:")]),e._v(" "),r("ol",[r("li",[e._v("Apply all the configured CorrelationReplacements to the HTTPSamplerBase (the record)")]),e._v(" "),r("li",[e._v("Update all the Contexts with the info that comes from the SampleResult (the result)")]),e._v(" "),r("li",[e._v("Filter the Recorder HTTPSamplerBase by the "),r("a",{attrs:{href:"https://github.com/Blazemeter/CorrelationRecorder/blob/master/README.md#filtering-your-requests",target:"_blank",rel:"noopener noreferrer"}},[e._v("Response Filter"),r("OutboundLink")],1),e._v("'s type")]),e._v(" "),r("li",[e._v("Apply all the configured CorrelationExtractors to the HTTPSamplerBase (in case this one matches the "),r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types",target:"_blank",rel:"noopener noreferrer"}},[e._v("Filter MIME Type"),r("OutboundLink")],1),e._v(" from Step 3)")])]),e._v(" "),r("p",[e._v("Anything that happens in the steps 1 and 4, will be handled by the "),r("code",[e._v("CorrelationRule")]),e._v(" (applyReplacements for the former, and addExtractors for the later), for each configured Rule.")]),e._v(" "),r("h4",{attrs:{id:"special-considerations"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#special-considerations"}},[e._v("#")]),e._v(" Special Considerations")]),e._v(" "),r("ol",[r("li",[e._v("Is important to mention that, because of the order of how the Correlation Components are applied and updated, the values that they extract or replace, only will be used after a future request. Because of this:")])]),e._v(" "),r("ul",[r("li",[e._v("Each value that is extracted from a Correlation Extractor, during the recording, will only be available for a Correlation Replacements in the next Request made")]),e._v(" "),r("li",[e._v("All the updated context values only will be considered, in the actual Sampler, by the Correlation Extractor but, the Correlation Replacements will need to wait for the next Sampler to be able to see it. The execution of the Correlation’s Flow is, as mentioned before:")])]),e._v(" "),r("blockquote",[r("p",[e._v("Receives a Request → Receives a Response → Applies Correlation Replacements → Update Correlation Contexts → Applies Correlation Replacements")])])])}),[],!1,null,null,null);t.default=s.exports}}]);