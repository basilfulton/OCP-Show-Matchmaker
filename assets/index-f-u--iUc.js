(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function r(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(n){if(n.ep)return;n.ep=!0;const i=r(n);fetch(n.href,i)}})();const k=[{id:"dial-m",title:'Dial "M" for Murder',dates:"April 17 – May 10, 2026",startDate:"2026-04-17",endDate:"2026-05-10",venue:"Hawks Mainstage",venueCapacity:"560-seat proscenium theatre",venueDescription:"The Hawks Mainstage is a grand 560-seat proscenium theatre — OCP's primary stage for full-scale productions with a classic theatrical atmosphere.",description:`A perfect crime has been planned to the last detail... but something goes terribly wrong. Based on Frederick Knott's classic thriller, Dial "M" for Murder is a gripping tale of murder, deception, and one detective's relentless pursuit of the truth. Electrifying suspense from curtain up to curtain down.`,contentAdvisory:"Contains depictions of violence and adult themes. Recommended for ages 14+.",ticketUrl:"https://ticketomaha.com/",imageUrl:"https://omahaplayhouse.com/wp-content/uploads/2025/03/DialM_1250x965_keyart.jpg",specialEvents:["Talk Back Thursday (April 24)","Audio Described Performance (May 3)"],accessibility:["Audio Description","Assistive Listening","Accessible Seating"],genres:["Mystery","Thriller","Drama"],ageRating:"adult",isCurrentlyRunning:!0},{id:"weisenheimers",title:"The Weisenheimers",dates:"April 25, 2026 (Special Event)",startDate:"2026-04-25",endDate:"2026-04-25",venue:"Howard Drew Theatre",venueCapacity:"200-seat black box theatre",venueDescription:"The intimate Howard Drew Theatre is a 200-seat black box space perfect for up-close, immersive comedy and experimental performances.",description:"A one-night-only special event featuring OCP's beloved improv comedy troupe, The Weisenheimers. Expect rapid-fire scenes, sharp wit, audience participation, and non-stop laughs from start to finish.",contentAdvisory:"Family-friendly. May contain mild comedic adult content.",ticketUrl:"https://ticketomaha.com/",imageUrl:"https://omahaplayhouse.com/wp-content/uploads/2026/02/Weisenheimers_Apr26_1250x965.jpg",specialEvents:["Post-show meet & greet with performers"],accessibility:["Assistive Listening","Accessible Seating"],genres:["Comedy","Improv","Special Event"],ageRating:"family",isCurrentlyRunning:!0},{id:"mary-poppins",title:"Cameron Mackintosh and Disney's Mary Poppins",dates:"May 29 – June 28, 2026",startDate:"2026-05-29",endDate:"2026-06-28",venue:"Hawks Mainstage",venueCapacity:"560-seat proscenium theatre",venueDescription:"The Hawks Mainstage is a grand 560-seat proscenium theatre — the perfect stage for this full-scale Broadway-style musical spectacle.",description:"The beloved story of the world's most magical nanny comes to life in this spectacular musical. Featuring beloved songs from the classic film plus brand new ones from the original Broadway production. A truly supercalifragilistic experience for the entire family.",contentAdvisory:"Suitable for all ages. Contains theatrical special effects and flying sequences.",ticketUrl:"https://ticketomaha.com/",imageUrl:"https://omahaplayhouse.com/wp-content/uploads/2025/03/MaryPoppins_1250x965_KeyArt.jpg",specialEvents:["Sensory-Friendly Performance (June 7)","Relaxed Performance (June 14)","Stage & Story Discussion (June 20)"],accessibility:["Audio Description","Assistive Listening","Relaxed Performance","Accessible Seating"],genres:["Musical","Family","Comedy"],ageRating:"all-ages",isCurrentlyRunning:!1},{id:"newsies-jr",title:"Disney's Newsies Jr.",dates:"June 26–28, 2026",startDate:"2026-06-26",endDate:"2026-06-28",venue:"Hawks Mainstage",venueCapacity:"560-seat proscenium theatre",venueDescription:"The Hawks Mainstage provides an exciting backdrop for these young performers bringing a rousing Broadway musical to the Omaha community.",description:"Young performers bring this rousing musical to life! Set in New York City in 1899, Newsies Jr. tells the story of a band of brave young newsboys who stand up against an unfair publisher. Full of high-energy dancing, soaring vocals, and an inspiring message.",contentAdvisory:"Suitable for all ages. Features young performers.",ticketUrl:"https://ticketomaha.com/",imageUrl:"https://omahaplayhouse.com/wp-content/uploads/2026/01/NewsiesJr._1250x965.jpg",specialEvents:[],accessibility:["Assistive Listening","Accessible Seating"],genres:["Musical","Family","Youth Production"],ageRating:"all-ages",isCurrentlyRunning:!1}],h=[{id:"group",label:"Who are you bringing tonight?",hint:"Select the option that best describes your group",type:"single",options:[{value:"solo",label:"Just me",icon:"🎭"},{value:"date",label:"Date night",icon:"💑",sub:"Romantic evening for two"},{value:"family",label:"Family with kids",icon:"👨‍👩‍👧",sub:"Including children"},{value:"friends",label:"Friend group",icon:"👥",sub:"A fun night out"},{value:"corporate",label:"Corporate outing",icon:"💼",sub:"Work group or team"}]},{id:"mood",label:"What's the vibe you're going for?",hint:"Pick the mood that sounds most appealing",type:"single",options:[{value:"thriller",label:"Thrilled & on-edge",icon:"😱",sub:"Suspense and mystery"},{value:"comedy",label:"Laugh-out-loud fun",icon:"😂",sub:"Light and hilarious"},{value:"emotional",label:"Emotionally moved",icon:"🥺",sub:"Touching and heartfelt"},{value:"classic",label:"Something classic",icon:"🎩",sub:"Timeless storytelling"},{value:"surprise",label:"Surprise me",icon:"✨",sub:"I'm open to anything"}]},{id:"genres",label:"Any genre preferences?",hint:"Select all that appeal to you",type:"multi",options:[{value:"musical",label:"Musical",icon:"🎵"},{value:"mystery",label:"Mystery / Thriller",icon:"🔍"},{value:"drama",label:"Drama",icon:"🎭"},{value:"comedy",label:"Comedy",icon:"😄"},{value:"family",label:"Family-friendly",icon:"⭐"}]},{id:"ageRange",label:"What's the age range of your group?",type:"single",options:[{value:"all-adults",label:"All adults",icon:"👤"},{value:"mixed",label:"Mix of adults & kids",icon:"👨‍👧",sub:"Various ages"},{value:"mostly-kids",label:"Mostly kids",icon:"🧒",sub:"Child-focused outing"}]},{id:"availability",label:"When are you available?",hint:"Select all that work for you",type:"multi",options:[{value:"weeknight",label:"Weeknight",icon:"🌙"},{value:"weekend-evening",label:"Weekend evening",icon:"🎉"},{value:"matinee",label:"Weekend matinee",icon:"☀️",sub:"Afternoon show"}]},{id:"budget",label:"How are you thinking about budget?",type:"single",options:[{value:"value",label:"Value-conscious",icon:"💚",sub:"Looking for deals"},{value:"no-preference",label:"No preference",icon:"🎟️",sub:"Price isn't a factor"},{value:"splurge",label:"Special occasion splurge",icon:"✨",sub:"Going all out"}]},{id:"maturity",label:"Comfort with mature themes?",type:"single",options:[{value:"family-safe",label:"Family-safe only",icon:"🌟",sub:"All ages welcome"},{value:"mild",label:"Mild adult content OK",icon:"👍",sub:"Typical PG-13 fare"},{value:"no-preference",label:"No preference",icon:"🎭",sub:"Open to anything"}]}],S="https://api.openai.com/v1/chat/completions",$="gpt-4o-mini";function f(t,a){const r=JSON.stringify(t,null,2),s=JSON.stringify(a,null,2);return`You are a friendly and knowledgeable show recommender for the Omaha Community Playhouse (OCP), the largest community theatre in the United States, located at 6915 Cass St., Omaha, NE 68132.

Your job is to match the user to the single best show currently playing at OCP based on their preferences, then briefly compare all other current shows.

Current show data:
${r}

User's form answers:
${s}

Guidelines:
- Be warm, enthusiastic, and knowledgeable about live theatre — like a trusted friend who loves theatre
- Ask 1–2 focused follow-up questions before committing to a recommendation
- Keep responses concise and conversational (2–4 sentences unless it's the final pick)
- Use **bold** for show titles so they stand out
- When the user clicks "Get My Recommendation," the app handles the structured output separately — just continue the friendly conversation here
- If asked about anything unrelated to OCP shows, warmly redirect back to the theatre
- Always encourage attending live theatre`}function A(t,a,r){const s=JSON.stringify(t,null,2),n=JSON.stringify(a,null,2),i=r.map(o=>`${o.role}: ${o.content}`).join(`

`);return`You are a show recommender for the Omaha Community Playhouse. Based on the user's preferences and your conversation, produce a JSON recommendation.

Show data:
${s}

User form answers:
${n}

Conversation history:
${i}

Return ONLY a valid JSON object — no markdown fences, no extra text:
{
  "recommendedShowId": "<id from show data>",
  "reason": "<2–3 warm, personalized sentences explaining why this show is the perfect match>",
  "comparisons": [
    {
      "showId": "<other show id>",
      "note": "<one sentence: who this show would be a better fit for>"
    }
  ]
}`}async function b(t,a,r){var i,o,c;const s=await fetch(S,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${t}`},body:JSON.stringify({model:$,max_tokens:r,messages:a})});if(!s.ok){const d=await s.json().catch(()=>({}));throw new Error(((i=d.error)==null?void 0:i.message)??`API error ${s.status}`)}return((c=(o=(await s.json()).choices[0])==null?void 0:o.message)==null?void 0:c.content)??""}async function w(t,a,r){const s=[{role:"system",content:r},...a.map(n=>({role:n.role,content:n.content}))];return b(t,s,512)}async function C(t,a,r,s){const n=A(a,r,s),i=await b(t,[{role:"user",content:n}],1024);try{return JSON.parse(i)}catch{const o=i.match(/\{[\s\S]*\}/);if(o)return JSON.parse(o[0]);throw new Error("Could not parse recommendation. Please try again.")}}const e={view:"landing",formStep:0,formAnswers:{},messages:[],shows:k,apiKey:sessionStorage.getItem("ocp_api_key")??"",isLoading:!1,matchResult:null};function u(){const t=document.getElementById("app");switch(e.view){case"landing":t.innerHTML=x();break;case"apikey":t.innerHTML=M();break;case"form":t.innerHTML=E();break;case"chat":t.innerHTML=L();break;case"result":t.innerHTML=O();break}e.isLoading&&e.view!=="chat"&&t.insertAdjacentHTML("beforeend",P()),I()}function x(){return e.shows.filter(a=>a.isCurrentlyRunning),e.shows.filter(a=>!a.isCurrentlyRunning),`
    <nav class="nav">
      <div>
        <div class="nav__logo">Omaha Community Playhouse</div>
        <div class="nav__subtitle">Show Matchmaker</div>
      </div>
    </nav>

    <section class="landing">
      <div class="landing__curtain-left"></div>
      <div class="landing__curtain-right"></div>

      <div class="landing__content">
        <p class="landing__eyebrow">✦ Omaha Community Playhouse ✦</p>

        <h1 class="landing__title">
          Find Your <em>Perfect</em><br>Night at the Theatre
        </h1>

        <p class="landing__description">
          Answer a few quick questions and let our AI concierge guide you to the show
          that's just right for you — complete with everything you need to secure your seats.
        </p>

        <button class="landing__cta" id="start-btn">
          Find My Perfect Show
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5"
              stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>

        <div class="landing__divider">
          <span>Now Playing &amp; Coming Soon</span>
        </div>

        <div class="landing__show-grid">
          ${e.shows.map(a=>`
    <div class="landing__show-card">
      ${a.imageUrl?`<div class="landing__show-card-img" style="background-image:url('${a.imageUrl}')"></div>`:'<div class="landing__show-card-img landing__show-card-img--empty">🎭</div>'}
      <div class="landing__show-card-body">
        <span class="landing__show-card-badge">${a.isCurrentlyRunning?"Now Playing":"Coming Soon"}</span>
        <p class="landing__show-card-title">${l(a.title)}</p>
        <p class="landing__show-card-dates">${l(a.dates)}</p>
      </div>
    </div>
  `).join("")}
        </div>
      </div>

      <p class="landing__footer-note">Extraordinary Theatre, Crafted Here — Since 1924</p>
    </section>
  `}function M(){return`
    <nav class="nav">
      <div>
        <div class="nav__logo">Omaha Community Playhouse</div>
        <div class="nav__subtitle">Show Matchmaker</div>
      </div>
    </nav>

    <div class="apikey-screen">
      <div class="apikey-card">
        <div class="apikey-card__icon">🔑</div>
        <h2>Enter Your OpenAI Key</h2>
        <p>
          This app uses OpenAI to match you with the perfect show.
          Enter your OpenAI API key to get started — it's stored only in
          your browser session and sent exclusively to OpenAI's API.
        </p>

        <div class="input-group">
          <label for="api-key-input">OpenAI API Key</label>
          <input
            type="password"
            id="api-key-input"
            placeholder="sk-..."
            value="${l(e.apiKey)}"
            autocomplete="off"
          />
        </div>

        <button class="btn btn--primary btn--full" id="save-key-btn">
          Continue to Matchmaker
        </button>

        <p class="text-muted mt-16 text-sm text-center">
          Get a key at
          <a href="https://platform.openai.com/api-keys" target="_blank" style="color:var(--color-gold)">
            platform.openai.com
          </a>
        </p>
      </div>
    </div>
  `}function E(){const t=h[e.formStep],a=(e.formStep+1)/h.length*100,r=t.type==="multi",s=e.formAnswers[t.id],n=r?s??[]:[s??""],i=r?n.length>0:!!s,o=e.formStep===h.length-1;return`
    <nav class="nav">
      <div>
        <div class="nav__logo">Omaha Community Playhouse</div>
        <div class="nav__subtitle">Show Matchmaker</div>
      </div>
    </nav>

    <div class="form-screen">
      <div class="container container--narrow">

        <div class="progress-bar">
          <div class="progress-bar__track">
            <div class="progress-bar__fill" style="width:${a}%"></div>
          </div>
          <div class="progress-bar__label">
            <span>Question ${e.formStep+1} of ${h.length}</span>
            <span class="progress-bar__type">${r?"Select all that apply":"Select one"}</span>
          </div>
        </div>

        <div class="form-question">
          <h2 class="form-question__label">${t.label}</h2>
          ${t.hint?`<p class="form-question__hint">${t.hint}</p>`:""}

          <div class="answer-grid">
            ${t.options.map((c,d)=>`
              <button
                class="answer-option${n.includes(c.value)?" selected":""}"
                data-value="${c.value}"
                data-question="${t.id}"
                data-type="${t.type}"
                style="animation-delay:${d*25}ms"
              >
                ${c.icon?`<span class="answer-option__icon">${c.icon}</span>`:""}
                <div class="answer-option__content">
                  <div class="answer-option__text">${c.label}</div>
                  ${c.sub?`<div class="answer-option__sub">${c.sub}</div>`:""}
                </div>
                <div class="answer-option__check">✓</div>
              </button>
            `).join("")}
          </div>

          <div class="form-nav">
            <button
              class="btn btn--secondary"
              id="prev-btn"
              ${e.formStep===0?'style="visibility:hidden"':""}
            >← Back</button>
            <button
              class="btn btn--primary"
              id="next-btn"
              ${i?"":"disabled"}
            >${o?"Start Chat →":"Next →"}</button>
          </div>
        </div>

      </div>
    </div>
  `}function L(){const t=e.messages.map((s,n)=>`
    <div class="chat-message chat-message--${s.role}" style="animation-delay:${n*30}ms">
      <div class="chat-message__avatar">${s.role==="assistant"?"🎭":"👤"}</div>
      <div class="chat-message__bubble">${s.role==="assistant"?R(s.content):l(s.content)}</div>
    </div>
  `).join(""),a=e.isLoading?`
    <div class="chat-typing">
      <div class="chat-typing__avatar">🎭</div>
      <div class="chat-typing__dots">
        <div class="chat-typing__dot"></div>
        <div class="chat-typing__dot"></div>
        <div class="chat-typing__dot"></div>
      </div>
    </div>
  `:"",r=e.messages.length>=3&&!e.isLoading;return`
    <nav class="nav">
      <div>
        <div class="nav__logo">Omaha Community Playhouse</div>
        <div class="nav__subtitle">Show Matchmaker</div>
      </div>
    </nav>

    <div class="chat-screen">
      <div class="chat-header">
        <div class="chat-header__avatar">🎭</div>
        <h2>Your OCP Concierge</h2>
        <p>A few quick questions before your personalized recommendation</p>
      </div>

      <div class="chat-messages" id="chat-messages">
        ${t}${a}
      </div>

      <div class="chat-input-area">
        <div class="chat-input-row">
          <textarea
            class="chat-input"
            id="chat-input"
            placeholder="Type your message…"
            rows="1"
            ${e.isLoading?"disabled":""}
          ></textarea>
          <button class="chat-send-btn" id="chat-send" ${e.isLoading?"disabled":""}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M16 9L2 2.5l2.5 6.5L2 15.5 16 9z" fill="currentColor"/>
            </svg>
          </button>
        </div>
        ${r?`
          <button class="btn btn--primary chat-recommend-btn" id="recommend-btn">
            ✦ Get My Show Recommendation
          </button>
        `:""}
      </div>
    </div>
  `}function O(){if(!e.matchResult)return'<p style="padding:120px 24px;text-align:center">No result.</p>';const t=e.shows.find(s=>s.id===e.matchResult.recommendedShowId);if(!t)return'<p style="padding:120px 24px;text-align:center">Show not found.</p>';const a=e.matchResult.comparisons.map(s=>({...s,show:e.shows.find(n=>n.id===s.showId)})).filter(s=>s.show!=null);return`
    <nav class="nav">
      <div>
        <div class="nav__logo">Omaha Community Playhouse</div>
        <div class="nav__subtitle">Your Perfect Match</div>
      </div>
    </nav>

    <div class="result-screen">
      <div class="container">

        <!-- Hero -->
        <div class="result-hero" ${t.imageUrl?`style="background-image:url('${t.imageUrl}')"`:""}>
          ${t.imageUrl?"":`
            <div class="result-hero__fallback">
              <div style="text-align:center;opacity:0.25;">
                <div style="font-size:3.5rem;margin-bottom:10px;">🎭</div>
                <div style="font-family:var(--font-serif);font-size:1rem;letter-spacing:0.08em;">${l(t.venue)}</div>
              </div>
            </div>
          `}
          <div class="result-hero__overlay"></div>
          <div class="result-hero__content">
            <div class="result-hero__badge">✦ Your Perfect Match</div>
            <h1 class="result-hero__title">${l(t.title)}</h1>
            <p class="result-hero__dates">${l(t.dates)}</p>
            <p class="result-hero__venue">${l(t.venue)}</p>
          </div>
        </div>

        <!-- Why it's your match -->
        <div class="result-section result-section--highlight">
          <p class="result-section__title">Why It's Your Match</p>
          <p class="result-reason">"${l(e.matchResult.reason)}"</p>
        </div>

        <!-- About the show -->
        <div class="result-section">
          <p class="result-section__title">About the Show</p>
          <p class="result-overview">${l(t.description)}</p>

          <div class="tag-list mt-16">
            ${t.genres.map(s=>`<span class="tag tag--gold">${l(s)}</span>`).join("")}
          </div>

          ${t.contentAdvisory?`
            <div class="tag-list mt-12">
              <span class="tag tag--warn">⚠ ${l(t.contentAdvisory)}</span>
            </div>
          `:""}

          <div class="info-grid mt-20">
            <div class="info-item">
              <span class="info-item__label">Venue</span>
              <span class="info-item__value">${l(t.venue)}</span>
            </div>
            <div class="info-item">
              <span class="info-item__label">Capacity</span>
              <span class="info-item__value">${l(t.venueCapacity)}</span>
            </div>
            <div class="info-item">
              <span class="info-item__label">Dates</span>
              <span class="info-item__value">${l(t.dates)}</span>
            </div>
            <div class="info-item">
              <span class="info-item__label">Address</span>
              <span class="info-item__value">6915 Cass St., Omaha, NE 68132</span>
            </div>
          </div>
        </div>

        <!-- Tickets -->
        <div class="ticket-section">
          <p class="result-section__title">Get Your Tickets</p>

          <div class="ticket-info-grid">
            <div class="ticket-info-item">
              <span class="ticket-info-item__icon">📞</span>
              <div class="ticket-info-item__text">
                <strong>Box Office</strong>(402) 553-0800
              </div>
            </div>
            <div class="ticket-info-item">
              <span class="ticket-info-item__icon">🕐</span>
              <div class="ticket-info-item__text">
                <strong>Hours</strong>Mon – Sat: Noon – 6 pm
              </div>
            </div>
            <div class="ticket-info-item">
              <span class="ticket-info-item__icon">🚗</span>
              <div class="ticket-info-item__text">
                <strong>Parking</strong>Free on-site parking available
              </div>
            </div>
            <div class="ticket-info-item">
              <span class="ticket-info-item__icon">⏰</span>
              <div class="ticket-info-item__text">
                <strong>Arrive Early</strong>At least 15 minutes before curtain
              </div>
            </div>
          </div>

          <div class="ticket-cta">
            <a href="${t.ticketUrl}" target="_blank" rel="noopener"
               class="btn btn--primary btn--lg btn--full">
              Buy Tickets for ${l(t.title)} →
            </a>
            <a href="https://omahaplayhouse.com/productions/" target="_blank" rel="noopener"
               class="btn btn--outline-gold btn--full">
              See All Shows at OCP
            </a>
          </div>

          <p class="text-muted text-sm text-center mt-16">
            Season Ticket Holders: Call (402) 553-0800 to reserve your seats
          </p>
        </div>

        ${t.specialEvents.length>0?`
          <div class="result-section">
            <p class="result-section__title">Special Events</p>
            <div class="tag-list">
              ${t.specialEvents.map(s=>`<span class="tag tag--gold">⭐ ${l(s)}</span>`).join("")}
            </div>
          </div>
        `:""}

        ${t.accessibility.length>0?`
          <div class="result-section">
            <p class="result-section__title">Accessibility</p>
            <div class="tag-list">
              ${t.accessibility.map(s=>`<span class="tag">♿ ${l(s)}</span>`).join("")}
            </div>
          </div>
        `:""}

        <!-- What to expect -->
        <div class="result-section">
          <p class="result-section__title">What to Expect</p>
          <p class="result-overview">${l(t.venueDescription)}</p>
          <p class="result-overview mt-16">
            OCP has been producing extraordinary community theatre since 1924.
            Expect high-caliber production values, professional direction, and a warm,
            welcoming atmosphere. Dress is casual to smart casual — come as you are.
          </p>
        </div>

        <!-- Compare other shows -->
        ${a.length>0?`
          <div class="result-section">
            <p class="result-section__title">Also at OCP This Season</p>
            <div class="compare-grid">
              ${a.map(s=>s.show?`
                <div class="compare-card">
                  ${s.show.imageUrl?`
                    <div class="compare-card__img" style="background-image:url('${s.show.imageUrl}')"></div>
                  `:""}
                  <div class="compare-card__body">
                    <h3 class="compare-card__title">${l(s.show.title)}</h3>
                    <p class="compare-card__dates">${l(s.show.dates)}</p>
                    <p class="compare-card__note">${l(s.note)}</p>
                  </div>
                </div>
              `:"").join("")}
            </div>
          </div>
        `:""}

        <!-- Footer -->
        <div class="result-footer">
          <p class="text-muted text-sm">Loved your match? Come back anytime to find another.</p>
          <div class="result-footer-actions">
            <button class="btn btn--secondary" id="start-over-btn">↺ Start Over</button>
            <a href="https://omahaplayhouse.com/buy-tickets/season-tickets/"
               target="_blank" rel="noopener" class="btn btn--outline-gold">
              Get Season Tickets
            </a>
          </div>
          <p class="text-muted text-sm">OCP · 6915 Cass St., Omaha, NE 68132 · (402) 553-0800</p>
        </div>

      </div>
    </div>
  `}function P(){return`
    <div class="loading-overlay">
      <div class="loading-spinner">
        <div class="spinner"></div>
        <p>Finding your perfect show…</p>
      </div>
    </div>
  `}function I(){var t,a,r,s,n;switch(e.view){case"landing":{(t=document.getElementById("start-btn"))==null||t.addEventListener("click",()=>{e.view=e.apiKey?"form":"apikey",u()});break}case"apikey":{const i=document.getElementById("api-key-input"),o=document.getElementById("save-key-btn"),c=()=>{const d=i.value.trim();d&&(e.apiKey=d,sessionStorage.setItem("ocp_api_key",d),e.view="form",u())};o==null||o.addEventListener("click",c),i==null||i.addEventListener("keydown",d=>{d.key==="Enter"&&c()});break}case"form":{let i=null;document.querySelectorAll(".answer-option").forEach(o=>{o.addEventListener("click",()=>{if(o.disabled)return;const c=o.dataset.value,d=o.dataset.question;if(o.dataset.type==="multi"){const m=e.formAnswers[d]??[],p=m.includes(c)?m.filter(_=>_!==c):[...m,c];e.formAnswers[d]=p,o.classList.toggle("selected",p.includes(c));const v=document.getElementById("next-btn");v&&(v.disabled=p.length===0)}else{if(i!==null)return;document.querySelectorAll(".answer-option").forEach(p=>{p.classList.toggle("selected",p.dataset.value===c),p.disabled=!0});const m=document.getElementById("next-btn");m&&m.removeAttribute("disabled"),e.formAnswers[d]=c,i=setTimeout(()=>{i=null,e.formStep<h.length-1?(e.formStep++,u()):g()},320)}})}),(a=document.getElementById("next-btn"))==null||a.addEventListener("click",()=>{e.formStep<h.length-1?(e.formStep++,u()):g()}),(r=document.getElementById("prev-btn"))==null||r.addEventListener("click",()=>{e.formStep>0&&(e.formStep--,u())});break}case"chat":{const i=document.getElementById("chat-input"),o=document.getElementById("chat-send");i==null||i.addEventListener("input",()=>{i.style.height="auto",i.style.height=Math.min(i.scrollHeight,120)+"px"}),i==null||i.addEventListener("keydown",c=>{const d=c;d.key==="Enter"&&!d.shiftKey&&(d.preventDefault(),y())}),o==null||o.addEventListener("click",()=>void y()),(s=document.getElementById("recommend-btn"))==null||s.addEventListener("click",()=>void T()),D();break}case"result":{(n=document.getElementById("start-over-btn"))==null||n.addEventListener("click",()=>{e.view="landing",e.formStep=0,e.formAnswers={},e.messages=[],e.matchResult=null,u()});break}}}async function g(){e.view="chat",e.messages=[],e.isLoading=!0,u();const t={role:"user",content:"Hi! I've answered some questions about my preferences. Can you help me find the perfect show at OCP?"};e.messages=[t];try{const a=f(e.shows,e.formAnswers),r=await w(e.apiKey,e.messages,a);e.messages=[...e.messages,{role:"assistant",content:r}]}catch(a){e.messages=[...e.messages,{role:"assistant",content:`I'm having trouble connecting. Please check your API key and try again. (${a.message})`}]}e.isLoading=!1,u()}async function y(){const t=document.getElementById("chat-input"),a=t==null?void 0:t.value.trim();if(!(!a||e.isLoading)){e.messages=[...e.messages,{role:"user",content:a}],e.isLoading=!0,u();try{const r=f(e.shows,e.formAnswers),s=await w(e.apiKey,e.messages,r);e.messages=[...e.messages,{role:"assistant",content:s}]}catch(r){e.messages=[...e.messages,{role:"assistant",content:`Something went wrong: ${r.message}`}]}e.isLoading=!1,u()}}async function T(){e.isLoading=!0,u();try{const t=await C(e.apiKey,e.shows,e.formAnswers,e.messages);e.matchResult=t,e.view="result"}catch(t){e.messages=[...e.messages,{role:"assistant",content:`I had trouble generating your recommendation. ${t.message} Please try again.`}]}e.isLoading=!1,u()}function D(){requestAnimationFrame(()=>{const t=document.getElementById("chat-messages");t&&(t.scrollTop=t.scrollHeight)})}function l(t){const a=document.createElement("div");return a.appendChild(document.createTextNode(t)),a.innerHTML}function R(t){return l(t).replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/\*(.*?)\*/g,"<em>$1</em>").replace(/\n\n+/g,'</p><p class="chat-p">').replace(/\n/g,"<br>").replace(/^(.+)/,'<p class="chat-p">$1</p>')}u();
