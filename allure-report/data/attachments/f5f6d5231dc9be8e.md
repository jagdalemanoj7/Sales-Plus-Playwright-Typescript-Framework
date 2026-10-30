# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\leads-page-test.spec.ts >> Leads Page Feature Test >> Verify create new lead and convert it
- Location: tests\ui\leads-page-test.spec.ts:25:9

# Error details

```
Error: locator.fill: Error: Element is not an <input>, <textarea> or [contenteditable] element
Call log:
  - waiting for locator('//select[contains(@id,\'lead-source-filter\')]')
    - locator resolved to <select aria-label="Source" class="field !w-auto" id="lead-source-filter" name="lead-source-filter" data-testid="lead-source-filter">…</select>
    - fill("LinkedIn")
  - attempting fill action
    - waiting for element to be visible, enabled and editable

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e3]:
      - link "PracticeQAAutomation logo PracticeQAAutomation" [ref=e4] [cursor=pointer]:
        - /url: /
        - img "PracticeQAAutomation logo" [ref=e5]
        - generic [ref=e6]: PracticeQAAutomation
      - navigation "Main" [ref=e7]:
        - button "Tools" [ref=e9]
        - button "Apps" [ref=e13]
        - button "Challenges" [ref=e17]
        - button "AI" [ref=e21]:
          - generic [aria-hidden] [ref=e22]: ✨
          - text: AI
        - button "Interview" [ref=e26]
        - link "What's new New release" [ref=e29] [cursor=pointer]:
          - /url: /releases
          - generic [ref=e30]:
            - text: What's new
            - generic "New release" [ref=e31]
        - link "About Me" [ref=e32] [cursor=pointer]:
          - /url: /about
      - generic [ref=e33]:
        - link "Support this site" [ref=e34] [cursor=pointer]:
          - /url: https://rzp.io/rzp/supportpracticeqaautomation
          - generic [aria-hidden] [ref=e35]: ☕
        - button "Switch to light theme" [ref=e36]
  - main [ref=e40]:
    - generic [ref=e41]:
      - generic [ref=e43]:
        - button "Go back" [ref=e44]
        - link "📈 SalesPulse" [ref=e47] [cursor=pointer]:
          - /url: /apps/crm
          - generic [ref=e48]: 📈
          - generic [ref=e49]: SalesPulse
        - navigation [ref=e50]:
          - link "Dashboard" [ref=e51] [cursor=pointer]:
            - /url: /apps/crm/dashboard
          - link "Leads" [ref=e52] [cursor=pointer]:
            - /url: /apps/crm/leads
          - link "Pipeline" [ref=e53] [cursor=pointer]:
            - /url: /apps/crm/pipeline
        - generic [ref=e54]:
          - button "🧑‍🏫 AI coach · paused" [ref=e55]:
            - text: 🧑‍🏫
            - generic [ref=e56]: AI coach · paused
          - generic [ref=e57]: Maya Chen
          - button "Log out" [ref=e58] [cursor=pointer]
      - generic [ref=e60]:
        - generic [ref=e61]:
          - generic [ref=e62]:
            - heading "Leads" [level=1] [ref=e63]
            - paragraph [ref=e64]:
              - generic [ref=e65]: 12 leads
          - button "+ New lead" [ref=e66] [cursor=pointer]
        - generic [ref=e67]:
          - searchbox "Search leads" [ref=e68]
          - combobox "Status" [ref=e69]:
            - option "All statuses" [selected]
            - option "New"
            - option "Contacted"
            - option "Qualified"
            - option "Unqualified"
            - option "Converted"
          - combobox "Source" [ref=e70]:
            - option "All sources" [selected]
            - option "Website"
            - option "Referral"
            - option "LinkedIn"
            - option "Event"
            - option "Cold call"
        - table [ref=e72]:
          - rowgroup [ref=e73]:
            - row [ref=e74]:
              - columnheader [ref=e75]:
                - checkbox "Select all" [ref=e76]
              - columnheader "Lead" [ref=e77]
              - columnheader "Company" [ref=e78]
              - columnheader "Source" [ref=e79]
              - columnheader "Status" [ref=e80]
              - columnheader "Owner" [ref=e81]
              - columnheader "Value" [ref=e82]
          - rowgroup [ref=e83]:
            - row [ref=e84]:
              - cell [ref=e85]:
                - checkbox "Select Owen Scott" [ref=e86]
              - cell "Owen Scott owen@oscorp.com" [ref=e87]:
                - link "Owen Scott" [ref=e88] [cursor=pointer]:
                  - /url: /apps/crm/leads/L-1012
                - generic [ref=e89]: owen@oscorp.com
              - cell "Oscorp Labs" [ref=e90]
              - cell "Referral" [ref=e91]
              - cell "Unqualified" [ref=e92]
              - cell "Omar Haddad" [ref=e94]
              - cell "$54,000" [ref=e95]
            - row [ref=e96]:
              - cell [ref=e97]:
                - checkbox "Select Ivy Nguyen" [ref=e98]
              - cell "Ivy Nguyen ivy@tyrell.com" [ref=e99]:
                - link "Ivy Nguyen" [ref=e100] [cursor=pointer]:
                  - /url: /apps/crm/leads/L-1011
                - generic [ref=e101]: ivy@tyrell.com
              - cell "Tyrell Robotics" [ref=e102]
              - cell "Website" [ref=e103]
              - cell "Qualified" [ref=e104]
              - cell "Nina Rossi" [ref=e106]
              - cell "$55,000" [ref=e107]
            - row [ref=e108]:
              - cell [ref=e109]:
                - checkbox "Select Ryan Patel" [ref=e110]
              - cell "Ryan Patel ryan@cyberdyne.com" [ref=e111]:
                - link "Ryan Patel" [ref=e112] [cursor=pointer]:
                  - /url: /apps/crm/leads/L-1010
                - generic [ref=e113]: ryan@cyberdyne.com
              - cell "Cyberdyne Systems" [ref=e114]
              - cell "Cold call" [ref=e115]
              - cell "Contacted" [ref=e116]
              - cell "Leo Park" [ref=e118]
              - cell "$56,000" [ref=e119]
            - row [ref=e120]:
              - cell [ref=e121]:
                - checkbox "Select Chloe Martin" [ref=e122]
              - cell "Chloe Martin chloe@pied.com" [ref=e123]:
                - link "Chloe Martin" [ref=e124] [cursor=pointer]:
                  - /url: /apps/crm/leads/L-1009
                - generic [ref=e125]: chloe@pied.com
              - cell "Pied Piper" [ref=e126]
              - cell "Event" [ref=e127]
              - cell "New" [ref=e128]
              - cell "Maya Chen" [ref=e130]
              - cell "$57,000" [ref=e131]
            - row [ref=e132]:
              - cell [ref=e133]:
                - checkbox "Select Lucas Meyer" [ref=e134]
              - cell "Lucas Meyer lucas@vandelay.com" [ref=e135]:
                - link "Lucas Meyer" [ref=e136] [cursor=pointer]:
                  - /url: /apps/crm/leads/L-1008
                - generic [ref=e137]: lucas@vandelay.com
              - cell "Vandelay Imports" [ref=e138]
              - cell "LinkedIn" [ref=e139]
              - cell "Unqualified" [ref=e140]
              - cell "Omar Haddad" [ref=e142]
              - cell "$58,000" [ref=e143]
            - row [ref=e144]:
              - cell [ref=e145]:
                - checkbox "Select Zoe Adams" [ref=e146]
              - cell "Zoe Adams zoe@soylent.com" [ref=e147]:
                - link "Zoe Adams" [ref=e148] [cursor=pointer]:
                  - /url: /apps/crm/leads/L-1007
                - generic [ref=e149]: zoe@soylent.com
              - cell "Soylent Foods" [ref=e150]
              - cell "Referral" [ref=e151]
              - cell "Qualified" [ref=e152]
              - cell "Nina Rossi" [ref=e154]
              - cell "$59,000" [ref=e155]
            - row [ref=e156]:
              - cell [ref=e157]:
                - checkbox "Select Ethan Kim" [ref=e158]
              - cell "Ethan Kim ethan@hooli.com" [ref=e159]:
                - link "Ethan Kim" [ref=e160] [cursor=pointer]:
                  - /url: /apps/crm/leads/L-1006
                - generic [ref=e161]: ethan@hooli.com
              - cell "Hooli Cloud" [ref=e162]
              - cell "Website" [ref=e163]
              - cell "Contacted" [ref=e164]
              - cell "Leo Park" [ref=e166]
              - cell "$60,000" [ref=e167]
            - row [ref=e168]:
              - cell [ref=e169]:
                - checkbox "Select Mia Lopez" [ref=e170]
              - cell "Mia Lopez mia@wayne.com" [ref=e171]:
                - link "Mia Lopez" [ref=e172] [cursor=pointer]:
                  - /url: /apps/crm/leads/L-1005
                - generic [ref=e173]: mia@wayne.com
              - cell "Wayne Retail" [ref=e174]
              - cell "Cold call" [ref=e175]
              - cell "New" [ref=e176]
              - cell "Maya Chen" [ref=e178]
              - cell "$61,000" [ref=e179]
            - row [ref=e180]:
              - cell [ref=e181]:
                - checkbox "Select Emma Wilson" [ref=e182]
              - cell "Emma Wilson emma@stark.com" [ref=e183]:
                - link "Emma Wilson" [ref=e184] [cursor=pointer]:
                  - /url: /apps/crm/leads/L-1004
                - generic [ref=e185]: emma@stark.com
              - cell "Stark Logistics" [ref=e186]
              - cell "Event" [ref=e187]
              - cell "Unqualified" [ref=e188]
              - cell "Omar Haddad" [ref=e190]
              - cell "$62,000" [ref=e191]
            - row [ref=e192]:
              - cell [ref=e193]:
                - checkbox "Select Noah Singh" [ref=e194]
              - cell "Noah Singh noah@umbrella.com" [ref=e195]:
                - link "Noah Singh" [ref=e196] [cursor=pointer]:
                  - /url: /apps/crm/leads/L-1003
                - generic [ref=e197]: noah@umbrella.com
              - cell "Umbrella Health" [ref=e198]
              - cell "LinkedIn" [ref=e199]
              - cell "Qualified" [ref=e200]
              - cell "Nina Rossi" [ref=e202]
              - cell "$63,000" [ref=e203]
            - row [ref=e204]:
              - cell [ref=e205]:
                - checkbox "Select Liam Carter" [ref=e206]
              - cell "Liam Carter liam@initech.com" [ref=e207]:
                - link "Liam Carter" [ref=e208] [cursor=pointer]:
                  - /url: /apps/crm/leads/L-1002
                - generic [ref=e209]: liam@initech.com
              - cell "Initech" [ref=e210]
              - cell "Referral" [ref=e211]
              - cell "Contacted" [ref=e212]
              - cell "Leo Park" [ref=e214]
              - cell "$64,000" [ref=e215]
            - row [ref=e216]:
              - cell [ref=e217]:
                - checkbox "Select Ava Brooks" [ref=e218]
              - cell "Ava Brooks ava@acme.com" [ref=e219]:
                - link "Ava Brooks" [ref=e220] [cursor=pointer]:
                  - /url: /apps/crm/leads/L-1001
                - generic [ref=e221]: ava@acme.com
              - cell "Acme Industries" [ref=e222]
              - cell "Website" [ref=e223]
              - cell "New" [ref=e224]
              - cell "Maya Chen" [ref=e226]
              - cell "$5,000" [ref=e227]
        - dialog "New lead" [ref=e229]:
          - generic [ref=e230]:
            - heading "New lead" [level=2] [ref=e231]
            - button "Close" [ref=e232]: ×
          - generic [ref=e234]:
            - generic [ref=e235]:
              - generic [ref=e236]: Contact name
              - textbox "Contact name" [ref=e237]: Rahul Sharma
            - generic [ref=e238]:
              - generic [ref=e239]: Company
              - textbox "Company" [ref=e240]: Tech Nova Solutions
            - generic [ref=e241]:
              - generic [ref=e242]: Email
              - textbox "Email" [ref=e243]: rahul.sharma@technova.com
            - generic [ref=e244]:
              - generic [ref=e245]: Phone
              - textbox "Phone" [active] [ref=e246]: +91-9876543210
            - generic [ref=e247]:
              - generic [ref=e248]: Source
              - combobox "Source" [ref=e249]:
                - option "Select source" [selected]
                - option "Website"
                - option "Referral"
                - option "LinkedIn"
                - option "Event"
                - option "Cold call"
            - generic [ref=e250]:
              - generic [ref=e251]: Est. value (USD)
              - textbox "Est. value (USD)" [ref=e252]
          - button "Save lead" [ref=e254] [cursor=pointer]
  - contentinfo [ref=e255]:
    - generic [ref=e256]:
      - generic [ref=e257]:
        - link "PracticeQAAutomation — home" [ref=e258] [cursor=pointer]:
          - /url: /
          - generic [ref=e259]: PracticeQAAutomation
        - paragraph [ref=e260]: A free sandbox of real apps and interactive elements for Selenium, Playwright and Cypress practice.
        - generic [ref=e261]:
          - link "Follow us on LinkedIn" [ref=e262] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/practice-qa-automation
          - link "Support this site" [ref=e265] [cursor=pointer]:
            - /url: https://rzp.io/rzp/supportpracticeqaautomation
            - generic [aria-hidden] [ref=e266]: ☕
            - text: Support this site
      - generic [ref=e267]:
        - generic [ref=e268]:
          - generic [ref=e269]: Tools
          - link "Selenium" [ref=e270] [cursor=pointer]:
            - /url: /selenium
          - link "Playwright" [ref=e271] [cursor=pointer]:
            - /url: /playwright
          - link "Cypress" [ref=e272] [cursor=pointer]:
            - /url: /cypress
        - generic [ref=e273]:
          - generic [ref=e274]: Apps
          - link "All domain apps" [ref=e275] [cursor=pointer]:
            - /url: /apps
          - link "📘 Project KT" [ref=e276] [cursor=pointer]:
            - /url: /projects
          - link "Nova Shop" [ref=e277] [cursor=pointer]:
            - /url: /shop
          - link "TrustBank" [ref=e278] [cursor=pointer]:
            - /url: /apps/bank
          - link "SecureLife" [ref=e279] [cursor=pointer]:
            - /url: /apps/insurance
        - generic [ref=e280]:
          - generic [ref=e281]: Practice
          - link "📄 Start-here guide (PDF)" [ref=e282] [cursor=pointer]:
            - /url: /downloads/practiceqa-start-guide.pdf
          - link "Challenges" [ref=e283] [cursor=pointer]:
            - /url: /challenges
          - link "🔥 Daily challenge" [ref=e284] [cursor=pointer]:
            - /url: /daily
          - link "Basic Auth" [ref=e285] [cursor=pointer]:
            - /url: /misc/basic-auth
          - link "✨ AI tools" [ref=e286] [cursor=pointer]:
            - /url: /ai
          - link "🔌 API practice" [ref=e287] [cursor=pointer]:
            - /url: /api-practice
          - link "🗄️ SQL Playground" [ref=e288] [cursor=pointer]:
            - /url: /sql-playground
          - link "📈 Performance testing" [ref=e289] [cursor=pointer]:
            - /url: /performance-testing
          - link "🥒 BDD & Cucumber" [ref=e290] [cursor=pointer]:
            - /url: /bdd
          - link "🧱 Framework & CI" [ref=e291] [cursor=pointer]:
            - /url: /framework-ci
          - link "Test case library" [ref=e292] [cursor=pointer]:
            - /url: /test-cases
          - link "🎯 Interview questions" [ref=e293] [cursor=pointer]:
            - /url: /interview
          - link "🧠 Interview quiz" [ref=e294] [cursor=pointer]:
            - /url: /interview/quiz
          - link "🤝 Share your interview" [ref=e295] [cursor=pointer]:
            - /url: /interview/share
          - link "🆕 What's new" [ref=e296] [cursor=pointer]:
            - /url: /releases
          - link "About Me" [ref=e297] [cursor=pointer]:
            - /url: /about
          - link "Report a bug" [ref=e298] [cursor=pointer]:
            - /url: /about#feedback
    - generic [ref=e300]:
      - paragraph [ref=e301]:
        - text: © 2026 PracticeQAAutomation. All rights reserved. ·
        - link "Privacy" [ref=e302] [cursor=pointer]:
          - /url: /privacy
      - paragraph [ref=e303]:
        - text: Made by
        - link "Amir" [ref=e304] [cursor=pointer]:
          - /url: /about
        - text: with
        - img "love" [ref=e305]: ❤️
  - alert [ref=e306]
```

# Test source

```ts
  58  | 
  59  |     // common method to locate iframe
  60  |     /* async frameLocator(frameLocator: string, locator: string): Promise<Locator>{
  61  |       return this.page.frameLocator(frameLocator).locator(locator)
  62  |   } */
  63  | 
  64  |     // Scroll to specified element
  65  |     async scrollToElement(
  66  |     locator: string,
  67  |     locatorType: string,
  68  |     frameLocator?: string,
  69  |     role?: any,
  70  |   ): Promise<void> {
  71  |     const element = await this.element(locator, locatorType, frameLocator, role);
  72  |     await element.scrollIntoViewIfNeeded({ timeout: 60000 });
  73  |     }
  74  | 
  75  |     // Click to element
  76  |     async click(
  77  |         locator: string, 
  78  |         locatorType: string, 
  79  |         frameLocator?:string, 
  80  |         framelocatorType?: string, 
  81  |         role?: any
  82  |     ): Promise<void> {
  83  |     const element = await this.element(locator, locatorType, frameLocator, framelocatorType, role);
  84  |     await this.scrollToElement(locator, locatorType, frameLocator, framelocatorType, role);
  85  |     await element.click();
  86  |     }
  87  | 
  88  |     // Double Click
  89  |     async doubleClick(
  90  |     locator: string,
  91  |     locatorType: string,
  92  |     frameLocator?:string,
  93  |     role?: any,
  94  |   ): Promise<void> {
  95  |     const element = await this.element(locator, locatorType,frameLocator, role);
  96  |     await this.scrollToElement(locator, locatorType, frameLocator, role);
  97  |     await element.dblclick();
  98  |     }
  99  | 
  100 |     // Right click
  101 |     async rightClick(
  102 |     locator: string,
  103 |     locatorType: string,
  104 |     frameLocator?:string,
  105 |     role?: any,
  106 |   ): Promise<void> {
  107 |     const element = await this.element(locator, locatorType, frameLocator, role);
  108 |     await this.scrollToElement(locator, locatorType, frameLocator, role);
  109 |     await element.click({ button: "right" });
  110 |     }
  111 | 
  112 |     // Hover on an element
  113 |     async hoverElement(
  114 |     locator: string,
  115 |     locatorType: string,
  116 |     frameLocator?:string,
  117 |     role?: any,
  118 |   ): Promise<void> {
  119 |     const element = await this.element(locator, locatorType, frameLocator, role);
  120 |     await this.scrollToElement(locator, locatorType, frameLocator, role);
  121 |     await element.hover();
  122 |     }
  123 | 
  124 |     // Force Click to element
  125 |     async forceClick(
  126 |     locator: string,
  127 |     locatorType: string,
  128 |     frameLocator?:string,
  129 |     role?: any,
  130 |   ): Promise<void> {
  131 |     const element = await this.element(locator, locatorType, frameLocator, role);
  132 |     await this.scrollToElement(locator, locatorType, frameLocator, role);
  133 |     await element.click({ force: true });
  134 |     }
  135 | 
  136 |     // Clear to element
  137 |     async clearText(
  138 |     locator: string,
  139 |     locatorType: string,
  140 |     frameLocator?:string,
  141 |     role?: any,
  142 |   ): Promise<void> {
  143 |     const element = await this.element(locator, locatorType, frameLocator, role);
  144 |     await this.scrollToElement(locator, locatorType, frameLocator, role);
  145 |     await element.clear();
  146 |     }
  147 | 
  148 |     // Type text into the textbox element
  149 |     async enterText(
  150 |     locator: string,
  151 |     locatorType: string,
  152 |     text: string,
  153 |     frameLocator?:string,
  154 |     role?: any,
  155 |   ): Promise<void> {
  156 |     const element = await this.element(locator, locatorType, frameLocator, role);
  157 |     await this.scrollToElement(locator, locatorType, frameLocator, role);
> 158 |     await element.fill(text);
      |                   ^ Error: locator.fill: Error: Element is not an <input>, <textarea> or [contenteditable] element
  159 |     }
  160 | 
  161 |     // get the text provided in the textbox
  162 |     async getText(
  163 |     locator: string,
  164 |     locatorType: string,
  165 |     frameLocator?:string,
  166 |     role?: any,
  167 |   ): Promise<string> {
  168 |     const element = await this.element(locator, locatorType, frameLocator, role);
  169 |     await this.scrollToElement(locator, locatorType, frameLocator, role);
  170 |     return await element.inputValue();
  171 |     }
  172 | 
  173 |     // Press key on an element
  174 |     async pressKey(
  175 |     locator: string,
  176 |     locatorType: string,
  177 |     key: string,
  178 |     frameLocator?:string,
  179 |     role?: any,
  180 |   ): Promise<void> {
  181 |     const element = await this.element(locator, locatorType, frameLocator, role);
  182 |     await this.scrollToElement(locator, locatorType, frameLocator, role);
  183 |     await element.press(key);
  184 |     }
  185 | 
  186 |     // Select option from dropdown
  187 |     async selectOption(
  188 |     locator: string,
  189 |     locatorType: string,
  190 |     option: string,
  191 |     frameLocator?:string,
  192 |     role?: any
  193 |   ): Promise<void> {
  194 |     const element = await this.element(locator, locatorType, frameLocator, role);
  195 |     await this.scrollToElement(locator, locatorType, frameLocator, role);
  196 |     await element.selectOption(option);
  197 |     }
  198 | 
  199 |     // get the text from element using textContent() method
  200 |     async getElementText(
  201 |     locator: string,
  202 |     locatorType: string,
  203 |     frameLocator?:string,
  204 |     role?: any,
  205 |   ): Promise<string | null> {
  206 |     const element = await this.element(locator, locatorType, frameLocator, role);
  207 |     await this.scrollToElement(locator, locatorType, frameLocator, role);
  208 |     return await element.textContent();
  209 |     }
  210 | 
  211 |     // get the text from element using innerText() method
  212 |     async getElementInnerText(
  213 |     locator: string,
  214 |     locatorType: string,
  215 |     frameLocator?:string,
  216 |     role?: any,
  217 |   ): Promise<string | null> {
  218 |     const element = await this.element(locator, locatorType, frameLocator, role);
  219 |     await this.scrollToElement(locator, locatorType, frameLocator, role);
  220 |     return await element.innerText();
  221 |     }
  222 | 
  223 |     // Get element attribute
  224 |     async getElementAttribute(
  225 |     locator: string,
  226 |     locatorType: string,
  227 |     attribute: string,
  228 |     frameLocator?:string,
  229 |     role?: any,    
  230 |   ): Promise<string | null> {
  231 |     const element = await this.element(locator, locatorType, frameLocator, role);
  232 |     await this.scrollToElement(locator, locatorType, frameLocator, role);
  233 |     return await element.getAttribute(attribute);
  234 |     }
  235 | 
  236 |     // Upload an element
  237 |     async uploadFile(
  238 |     locator: string,
  239 |     locatorType: string,
  240 |     filePath: string,
  241 |     frameLocator?:string,
  242 |     role?: any,    
  243 |   ): Promise<void> {
  244 |     const element = await this.element(locator, locatorType, frameLocator, role);
  245 |     await this.scrollToElement(locator, locatorType, frameLocator, role);
  246 |     await element.setInputFiles(filePath);
  247 |     }
  248 | 
  249 |   // Verify element having text value
  250 |   async verifyElementText(
  251 |     locator: string,
  252 |     locatorType: string,
  253 |     expectedText: string,
  254 |     frameLocator?:string,
  255 |     role?: any,    
  256 |   ) {
  257 |     const element = await this.element(locator, locatorType, frameLocator, role);
  258 |     await expect(element).toHaveText(expectedText);
```