"use client"; 
 
import { motion, AnimatePresence } from "framer-motion"; 
import { useState } from "react"; 
import LoveLetter from "./LoveLetter"; 
 
type Photo = { 
  image: string; 
  title: string; 
  text: string; 
  smallText: string; 
}; 
 
export default function Gallery() { 
  const [openLetter, setOpenLetter] = useState(false); 
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null); 
 
  const photos: Photo[] = [ 
    { 
      image: "/memories/photo1.jpg", 
      title: "Meri Bachha", 
      text: "Pata hai, tumhe “meri bachha” kehna mujhe itna pasand kyun hai? Kyunki is ek naam mein mere liye bahut saara pyaar, care aur apnapan chhupa hai. Tum chahe kitni bhi badi ho jao, mere liye tum hamesha meri wahi cute si bachha rahogi, jise dekhte hi dil automatically smile kar deta hai. ❤️", 
      smallText: "Meri sabse pyaari bachha, always and forever. 🥹❤️", 
    }, 
    { 
      image: "/memories/photo2.jpg", 
      title: "Meri Gudiya", 
      text: "Tumhe dekhte hi na jaane kyun dil mein ek ajeeb si khushi aa jaati hai. Tumhari woh cute si smile, tumhari chhoti-chhoti baatein aur tumhara woh masoom sa andaaz... sab kuch mere liye bahut special hai. Meri gudiya, tum meri life ki woh khoobsurat si feeling ho jise main kabhi khona nahi chahta. 🥹❤️", 
      smallText: "Meri chhoti si duniya, meri pyaari gudiya. 🧸❤️", 
    }, 
    { 
      image: "/memories/photo3.jpg", 
      title: "My Favorite Photo", 
      text: "Shayad tumhe yaad bhi na ho, lekin mere liye ye photo uss waqt ki hai jab main tumhe chup-chup kar pasand karta tha... jab meri feelings sirf meri thi, aur tumhe shayad iska zara sa bhi andaaza nahi tha. Ek tarfa pyaar tha, lekin feelings bilkul sach thi. Aaj jab ye photo dekhta hoon, toh bas ek hi khayal aata hai — kaash uss waqt main tumhe bata pata ki tum mere liye kitni special thi. ❤️", 
      smallText: "From one-sided love to a love I can finally call ours. ❤️", 
    }, 
    { 
      image: "/memories/photo4.jpg", 
      title: "Our First Photo Together", 
      text: "Ye sirf hamari ek photo nahi hai... ye woh moment hai jab hum dono sirf ek dusre ko pasand karne wale nahi, balki officially “hum” ban chuke the. 🥹❤️ Is photo ko dekhkar aaj bhi woh feeling yaad aa jaati hai — ki jis person ko kabhi door se dekha karta tha, ab wahi meri life ka sabse khoobsurat hissa ban chuki hai.", 
      smallText: "The first picture of us, as “us”. ❤️", 
    }, 
    { 
      image: "/memories/photo5.jpg", 
      title: "Our Secret Love", 
      text: "Ye shayad hamari sabse “gandi” photos mein se ek hai 😂❤️ Lekin is photo ki story bahut special hai... relatives ke beech ghoomte hue bhi hum dono ek dusre se apna pyaar chhupane ki poori koshish kar rahe the. Na zyada paas aa sakte the, na ek dusre ko zyada dekh sakte the... bas aankhon hi aankhon mein poori conversation chal rahi thi. 😂🥹 Aaj sochta hoon toh lagta hai, woh chhup-chhup kar pyaar karne wale din bhi kitne khoobsurat the.", 
      smallText: "Hiding our love while secretly loving every moment. 😂❤️", 
    }, 
    { 
      image: "/memories/photo6.jpg", 
      title: "Our Dhanbad Date", 
      text: "Dhanbad ka woh din shayad ek normal sa day tha, lekin mere liye woh humari un khoobsurat memories mein se ek ban gaya jo main kabhi nahi bhoolna chahta. Tumhare saath ghoomna, baatein karna, bina kisi hurry ke bas ek dusre ke saath time spend karna... uss din mujhe phir se feel hua ki meri favourite place koi jagah nahi, tumhare saath bitaya hua waqt hai. ❤️", 
      smallText: "Just you, me, and a beautiful day in Dhanbad. 🥹❤️", 
    }, 
    { 
      image: "/memories/photo7.jpg", 
      title: "Miles Apart, Hearts Together", 
      text: "Ek waqt tha jab hum dono bahut door the... main hostel mein aur tum apne ghar mein. Milna possible nahi tha, saath baithna possible nahi tha, bas phone par baatein aur ek dusre ki yaadein thi. Phir bhi ajeeb baat thi na... distance jitna bhi tha, tum hamesha mere paas hi feel hoti thi. Shayad isi ko kehte hain — door hokar bhi dil ke sabse kareeb hona. 🥹❤️", 
      smallText: "Different places, same heart. Always close. ❤️", 
    }, 
    { 
      image: "/memories/photo8.jpg", 
      title: "Meri Drama Queen", 
      text: "Meri shirt pehen kar mere hi ghar mein madam ki acting dekho 😂❤️ Pata nahi tumhe meri cheezein itni pasand kyun hain... ya shayad meri shirt se zyada uska owner pasand hai. 😌😂 Tumhara ye cute sa drama, meri shirt mein tumhara yun ghoomna aur phir itne confidence se acting karna... sach bolun toh, ye sab dekhkar bas ek hi thought aata hai — meri drama queen mujhe bahut pyaari hai. 🥹❤️", 
      smallText: "My shirt. My home. My drama queen. ❤️😂", 
    }, 
    { 
      image: "/memories/photo9.jpg", 
      title: "Together, Yet Still Texting", 
      text: "Tum mere ghar mein mere bilkul paas thi... hum dono ek hi jagah, ek hi room mein, phir bhi saamne baat karne ke bajaye chat par hi baatein kiya karte the. 😂❤️ Shayad humara pyaar thoda ajeeb tha, lekin isi ajeebpan mein toh kitni saari cute memories chhupi hain. Aur haan... tumhe pata bhi nahi tha ki main chupke se tumhari ye photo bhi le raha tha. 🥹❤️", 
      smallText: "You were right beside me, but somehow I still missed you. ❤️", 
    }, 
    { 
      image: "/memories/photo10.jpg", 
      title: "Caught Looking At Me", 
      text: "Tumhare ghar aaya tha aur madam chup-chaap baith kar bas mujhe hi dekhe ja rahi thi. 😂❤️ Itni pyaari nazron se dekh rahi thi ki tumhari Ammi ne bhi notice kar liya ki tumhari aankhein baar-baar meri taraf hi ja rahi hain. 😭😂 Us moment mein shayad tum thodi awkward hui hogi, lekin mere liye toh woh secretly bahut special moment tha... kyunki tumhari aankhon mein jo pyaar tha, woh bina kuch kahe sab kuch keh raha tha. 🥹❤️", 
      smallText: "When your eyes said everything before you could. 👀❤️", 
    }, 
    { 
      image: "/memories/photo11.jpg", 
      title: "You & My Sisters", 
      text: "Tumhara meri behno ke saath itna pyaara bonding dekhkar dil ko ek alag hi sukoon milta hai. ❤️ Tum sirf meri favourite person nahi ho, tumne meri family ke saath bhi apni ek special si jagah bana li hai. Tum dono ke beech ki woh masti, care aur pyaar dekhkar kabhi-kabhi bas chup-chaap smile karne ka mann karta hai. 🥹❤️", 
      smallText: "You found a place in their hearts too. ❤️", 
    }, 
    { 
      image: "/memories/photo12.jpg", 
      title: "That Unforgettable Evening", 
      text: "Ye woh shaam thi jab humne pehli baar sach mein ek saath quality time spend kiya tha... aur pata nahi kyun, us shaam ka ek-ek moment aaj bhi mujhe bilkul yaad hai. Tumhare saath woh waqt itna special tha ki time kab beet gaya, pata hi nahi chala. Aaj bhi jab us shaam ko yaad karta hoon, toh lagta hai kaash waqt thoda ruk jaata... main uss shaam ko tumhare saath phir se jeena chahta hoon. 🥹❤️", 
      smallText: "One evening, countless memories, and a feeling I'll never forget. ❤️", 
    }, 
    { 
      image: "/memories/photo13.webp", 
      title: "Our First Lunch Date", 
      text: "Ye woh din tha jab hum pehli baar saath lunch karne gaye the. ❤️ Tumhare saath baithkar khana, baatein karna aur bina kisi jaldi ke woh waqt spend karna mere liye bahut special tha. Shayad us din humne kuch extraordinary nahi kiya tha, lekin tumhare saath hone ki wajah se woh simple sa lunch bhi meri favourite memories mein se ek ban gaya.", 
      smallText: "Our first lunch together, a memory I'll always keep. ❤️", 
    }, 
    { 
      image: "/memories/photo14.webp", 
      title: "Just Us", 
      text: "Usi din ka ek aur moment... ❤️ Jagah wahi thi, waqt wahi tha, lekin tumhare saath har picture mein ek alag feeling milti hai. Mujhe bas itna yaad hai ki tumhare saath waqt kitni jaldi beet raha tha aur mera mann tha ki ye moment thoda aur lamba ho jaaye. 🥹", 
      smallText: "Same place, same day, another little memory of us. ❤️", 
    }, 
    { 
      image: "/memories/photo15.webp", 
      title: "Lost In Our Moment", 
      text: "Us din ki sabse achhi baat shayad ye thi ki kuch der ke liye duniya ki baaki cheezein matter hi nahi kar rahi thi. Bas tum thi, main tha aur humara woh chhota sa moment. ❤️ Tumhare saath bitaya hua simple sa waqt bhi mere liye itna special kyun ban jaata hai, iska jawab shayad mujhe kabhi nahi milega.", 
      smallText: "A simple moment that meant so much. 🥹❤️", 
    }, 
    { 
      image: "/memories/photo16.webp", 
      title: "I Wish Time Stopped Here", 
      text: "Aur phir us din ki ye yaad... ❤️ Agar mujhe kisi ek moment ko rok kar hamesha ke liye rakhna ho, toh shayad main isi din ka koi moment choose karunga. Tumhare saath woh time bahut chhota tha, lekin usmein jo happiness mili, woh mere liye bahut badi thi. Bas dil karta hai ki kabhi hum dono phir se waise hi kahin baithen, baatein karein aur waqt ko bhool jaayein. 🥹❤️", 
      smallText: "Some moments end, but the feeling stays forever. ❤️", 
    }, 
  ]; 
 
  const closeViewer = () => { 
    setSelectedPhoto(null); 
  }; 
 
  const showNextPhoto = () => { 
    if (selectedPhoto === null) return; 
 
    setSelectedPhoto( 
      selectedPhoto === photos.length - 1 
        ? 0 
        : selectedPhoto + 1 
    ); 
  }; 
 
  const showPreviousPhoto = () => { 
    if (selectedPhoto === null) return; 
 
    setSelectedPhoto( 
      selectedPhoto === 0 
        ? photos.length - 1 
        : selectedPhoto - 1 
    ); 
  }; 
 
  if (openLetter) { 
    return <LoveLetter />; 
  } 
 
  return ( 
    <main 
      style={{ 
        minHeight: "100vh", 
        width: "100%", 
        position: "relative", 
        overflow: "hidden", 
        background: 
          "radial-gradient(circle at top, #4a0b32 0%, #1a0617 35%, #060009 72%, #000 100%)", 
        color: "#fff", 
        padding: "70px 20px 100px", 
        boxSizing: "border-box", 
      }} 
    > 
      {/* ========================================================= 
          BACKGROUND GLOWS 
      ========================================================= */} 
 
      <motion.div 
        animate={{ 
          scale: [1, 1.15, 1], 
          opacity: [0.16, 0.3, 0.16], 
        }} 
        transition={{ 
          duration: 7, 
          repeat: Infinity, 
          ease: "easeInOut", 
        }} 
        style={{ 
          position: "fixed", 
          width: "550px", 
          height: "550px", 
          borderRadius: "50%", 
          background: 
            "radial-gradient(circle, rgba(255,77,136,0.35), transparent 70%)", 
          filter: "blur(55px)", 
          top: "-200px", 
          left: "50%", 
          transform: "translateX(-50%)", 
          pointerEvents: "none", 
          zIndex: 0, 
        }} 
      /> 
 
      <motion.div 
        animate={{ 
          x: [-30, 30, -30], 
          y: [20, -20, 20], 
          opacity: [0.06, 0.16, 0.06], 
        }} 
        transition={{ 
          duration: 9, 
          repeat: Infinity, 
          ease: "easeInOut", 
        }} 
        style={{ 
          position: "fixed", 
          width: "400px", 
          height: "400px", 
          borderRadius: "50%", 
          background: 
            "radial-gradient(circle, rgba(255,140,180,0.25), transparent 70%)", 
          filter: "blur(65px)", 
          bottom: "-130px", 
          right: "-120px", 
          pointerEvents: "none", 
          zIndex: 0, 
        }} 
      /> 
 
      {/* ========================================================= 
          FLOATING STARS 
      ========================================================= */} 
 
      {Array.from({ length: 28 }).map((_, index) => ( 
        <motion.span 
          key={index} 
          animate={{ 
            opacity: [0.12, 0.75, 0.12], 
            scale: [0.6, 1, 0.6], 
          }} 
          transition={{ 
            duration: 2.5 + (index % 4), 
            repeat: Infinity, 
            delay: index * 0.13, 
          }} 
          style={{ 
            position: "fixed", 
            width: index % 5 === 0 ? "3px" : "2px", 
            height: index % 5 === 0 ? "3px" : "2px", 
            borderRadius: "50%", 
            background: "#fff", 
            left: `${(index * 41) % 100}%`, 
            top: `${(index * 67) % 100}%`, 
            boxShadow: 
              "0 0 10px rgba(255,255,255,0.8)", 
            pointerEvents: "none", 
            zIndex: 0, 
          }} 
        /> 
      ))} 
 
      {/* ========================================================= 
          HEADER 
      ========================================================= */} 
 
      <section 
        style={{ 
          position: "relative", 
          zIndex: 2, 
          textAlign: "center", 
          maxWidth: "850px", 
          margin: "0 auto", 
        }} 
      > 
        <motion.p 
          initial={{ 
            opacity: 0, 
            y: -20, 
          }} 
          animate={{ 
            opacity: 1, 
            y: 0, 
          }} 
          transition={{ 
            duration: 0.9, 
          }} 
          style={{ 
            margin: 0, 
            color: "#ffb6c1", 
            fontSize: "12px", 
            letterSpacing: "6px", 
            textTransform: "uppercase", 
          }} 
        > 
          Chapter Two • Us 
        </motion.p> 
 
        <motion.h1 
          initial={{ 
            opacity: 0, 
            y: 35, 
            scale: 0.9, 
          }} 
          animate={{ 
            opacity: 1, 
            y: 0, 
            scale: 1, 
          }} 
          transition={{ 
            delay: 0.25, 
            duration: 1, 
          }} 
          style={{ 
            margin: "18px 0 0", 
            fontSize: "clamp(40px, 9vw, 72px)", 
            lineHeight: 1.05, 
            fontWeight: 600, 
            letterSpacing: "-2px", 
            textShadow: 
              "0 0 35px rgba(255,77,136,0.45)", 
          }} 
        > 
          Our Little 
          <br /> 
          <span 
            style={{ 
              color: "#ff6f9c", 
            }} 
          > 
            Universe ❤️ 
          </span> 
        </motion.h1> 
 
        <motion.p 
          initial={{ 
            opacity: 0, 
            y: 20, 
          }} 
          animate={{ 
            opacity: 1, 
            y: 0, 
          }} 
          transition={{ 
            delay: 0.6, 
            duration: 1, 
          }} 
          style={{ 
            maxWidth: "620px", 
            margin: "25px auto 0", 
            color: "#ead6df", 
            fontSize: "clamp(16px, 4vw, 20px)", 
            lineHeight: 1.7, 
          }} 
        > 
          A few pictures. 
          <br /> 
          A thousand feelings. 
          <br /> 
          And memories I never want to lose. ✨ 
        </motion.p> 
 
        <motion.div 
          initial={{ 
            width: 0, 
            opacity: 0, 
          }} 
          animate={{ 
            width: "110px", 
            opacity: 1, 
          }} 
          transition={{ 
            delay: 1, 
            duration: 1, 
          }} 
          style={{ 
            height: "1px", 
            margin: "30px auto 0", 
            background: 
              "linear-gradient(90deg, transparent, #ff6f9c, transparent)", 
          }} 
        /> 
      </section> 
 
      {/* ========================================================= 
          INTRO MESSAGE 
      ========================================================= */} 
 
      <motion.section 
        initial={{ 
          opacity: 0, 
          y: 30, 
        }} 
        animate={{ 
          opacity: 1, 
          y: 0, 
        }} 
        transition={{ 
          delay: 1.2, 
          duration: 1, 
        }} 
        style={{ 
          position: "relative", 
          zIndex: 2, 
          maxWidth: "700px", 
          margin: "55px auto 0", 
          textAlign: "center", 
        }} 
      > 
        <p 
          style={{ 
            margin: 0, 
            color: "rgba(255,255,255,0.55)", 
            fontSize: "12px", 
            letterSpacing: "3px", 
            textTransform: "uppercase", 
          }} 
        > 
          A journey through our memories 
        </p> 
 
        <p 
          style={{ 
            margin: "18px auto 0", 
            maxWidth: "580px", 
            color: "#f7dce7", 
            fontSize: "17px", 
            lineHeight: 1.8, 
            fontStyle: "italic", 
          }} 
        > 
          "Some memories fade with time... 
          <br /> 
          but the ones made with you, 
          I wish I could keep forever." 
        </p> 
      </motion.section> 
 
      {/* ========================================================= 
          PHOTO COUNTER 
      ========================================================= */} 
 
      <motion.div 
        initial={{ 
          opacity: 0, 
        }} 
        animate={{ 
          opacity: 1, 
        }} 
        transition={{ 
          delay: 1.5, 
        }} 
        style={{ 
          position: "relative", 
          zIndex: 2, 
          textAlign: "center", 
          marginTop: "40px", 
          color: "rgba(255,255,255,0.42)", 
          fontSize: "11px", 
          letterSpacing: "3px", 
        }} 
      > 
        {photos.length} MEMORIES • ONE STORY 
      </motion.div> 
 
      {/* ========================================================= 
          MEMORY GALLERY 
      ========================================================= */} 
 
      <section 
        style={{ 
          position: "relative", 
          zIndex: 2, 
          width: "100%", 
          maxWidth: "1200px", 
          margin: "55px auto 0", 
          display: "grid", 
          gridTemplateColumns: 
            "repeat(auto-fit, minmax(270px, 1fr))", 
          gap: "32px", 
        }} 
      > 
        {photos.map((photo, index) => ( 
          <motion.article 
            key={photo.image} 
            initial={{ 
              opacity: 0, 
              y: 80, 
              scale: 0.94, 
            }} 
            whileInView={{ 
              opacity: 1, 
              y: 0, 
              scale: 1, 
            }} 
            viewport={{ 
              once: true, 
              amount: 0.15, 
            }} 
            transition={{ 
              delay: (index % 3) * 0.12, 
              duration: 0.8, 
              ease: "easeOut", 
            }} 
            whileHover={{ 
              y: -8, 
            }} 
            style={{ 
              position: "relative", 
              background: 
                "linear-gradient(145deg, rgba(255,255,255,0.12), rgba(255,255,255,0.035))", 
              border: 
                "1px solid rgba(255,255,255,0.14)", 
              borderRadius: "28px", 
              overflow: "hidden", 
              boxShadow: 
                "0 25px 60px rgba(0,0,0,0.38)", 
              backdropFilter: "blur(14px)", 
            }} 
          > 
            {/* Memory number */} 
 
            <div 
              style={{ 
                position: "absolute", 
                zIndex: 5, 
                top: "18px", 
                left: "18px", 
                padding: "7px 12px", 
                borderRadius: "30px", 
                background: 
                  "rgba(0,0,0,0.42)", 
                border: 
                  "1px solid rgba(255,255,255,0.15)", 
                color: "rgba(255,255,255,0.72)", 
                fontSize: "10px", 
                letterSpacing: "2px", 
                backdropFilter: "blur(8px)", 
              }} 
            > 
              {String(index + 1).padStart(2, "0")} 
            </div> 
 
            {/* Image */} 
 
            <div 
              onClick={() => setSelectedPhoto(index)} 
              style={{ 
                position: "relative", 
                width: "100%", 
                height: "390px", 
                overflow: "hidden", 
                background: "#080808", 
                cursor: "pointer", 
              }} 
            > 
              <motion.img 
                src={photo.image} 
                alt={photo.title} 
                whileHover={{ 
                  scale: 1.06, 
                }} 
                transition={{ 
                  duration: 0.8, 
                  ease: "easeOut", 
                }} 
                style={{ 
                  width: "100%", 
                  height: "100%", 
                  objectFit: "contain", 
                  display: "block", 
                  background: "#080808", 
                }} 
              /> 
 
              {/* Image glow */} 
 
              <div 
                style={{ 
                  position: "absolute", 
                  inset: 0, 
                  background: 
                    "linear-gradient(to top, rgba(0,0,0,0.72), transparent 55%)", 
                  pointerEvents: "none", 
                }} 
              /> 
 
              {/* Open icon */} 
 
              <motion.div 
                initial={{ 
                  opacity: 0, 
                  scale: 0.8, 
                }} 
                whileHover={{ 
                  opacity: 1, 
                  scale: 1, 
                }} 
                style={{ 
                  position: "absolute", 
                  top: "18px", 
                  right: "18px", 
                  width: "42px", 
                  height: "42px", 
                  borderRadius: "50%", 
                  background: 
                    "rgba(0,0,0,0.45)", 
                  border: 
                    "1px solid rgba(255,255,255,0.25)", 
                  display: "flex", 
                  justifyContent: "center", 
                  alignItems: "center", 
                  fontSize: "18px", 
                  backdropFilter: "blur(8px)", 
                  pointerEvents: "none", 
                }} 
              > 
                ⛶ 
              </motion.div> 
 
              {/* Bottom title on image */} 
 
              <div 
                style={{ 
                  position: "absolute", 
                  left: "20px", 
                  right: "20px", 
                  bottom: "18px", 
                }} 
              > 
                <p 
                  style={{ 
                    margin: 0, 
                    color: "rgba(255,255,255,0.55)", 
                    fontSize: "10px", 
                    letterSpacing: "2.5px", 
                    textTransform: "uppercase", 
                  }} 
                > 
                  Memory {String(index + 1).padStart(2, "0")} 
                </p> 
 
                <h2 
                  style={{ 
                    margin: "7px 0 0", 
                    color: "#fff", 
                    fontSize: "25px", 
                    lineHeight: 1.2, 
                    fontWeight: 500, 
                    textShadow: 
                      "0 3px 20px rgba(0,0,0,0.7)", 
                  }} 
                > 
                  {photo.title} 
                </h2> 
              </div> 
            </div> 
 
            {/* Caption */} 
 
            <div 
              style={{ 
                padding: "23px 22px 25px", 
                textAlign: "left", 
              }} 
            > 
              <p 
                style={{ 
                  margin: 0, 
                  color: "#ffe0e8", 
                  fontSize: "16px", 
                  lineHeight: 1.75, 
                  fontWeight: 400, 
                }} 
              > 
                {photo.text} 
              </p> 
 
              <div 
                style={{ 
                  height: "1px", 
                  width: "45px", 
                  margin: "17px 0 13px", 
                  background: 
                    "linear-gradient(90deg, #ff6f9c, transparent)", 
                }} 
              /> 
 
              <p 
                style={{ 
                  margin: 0, 
                  color: 
                    "rgba(255,255,255,0.34)", 
                  fontSize: "10px", 
                  letterSpacing: "1.8px", 
                  textTransform: "uppercase", 
                }} 
              > 
                {photo.smallText} 
              </p> 
            </div> 
          </motion.article> 
        ))} 
      </section> 
 
      {/* ========================================================= 
          MID STORY 
      ========================================================= */} 
 
      <motion.section 
        initial={{ 
          opacity: 0, 
          scale: 0.96, 
        }} 
        whileInView={{ 
          opacity: 1, 
          scale: 1, 
        }} 
        viewport={{ 
          once: true, 
          amount: 0.4, 
        }} 
        transition={{ 
          duration: 1, 
        }} 
        style={{ 
          position: "relative", 
          zIndex: 2, 
          maxWidth: "760px", 
          margin: "100px auto 0", 
          padding: "40px 25px", 
          textAlign: "center", 
          borderTop: 
            "1px solid rgba(255,255,255,0.08)", 
          borderBottom: 
            "1px solid rgba(255,255,255,0.08)", 
        }} 
      > 
        <p 
          style={{ 
            margin: 0, 
            color: "#ff8eaf", 
            fontSize: "11px", 
            letterSpacing: "4px", 
            textTransform: "uppercase", 
          }} 
        > 
          And then I realized... 
        </p> 
 
        <p 
          style={{ 
            margin: "22px auto 0", 
            maxWidth: "620px", 
            color: "#f5dce6", 
            fontSize: "clamp(20px, 4vw, 27px)", 
            lineHeight: 1.6, 
            fontWeight: 300, 
          }} 
        > 
          It was never really about the pictures. 
          <br /> 
          <span 
            style={{ 
              color: "#ff7fa5", 
            }} 
          > 
            It was always about you. 
          </span> 
        </p> 
 
        <p 
          style={{ 
            margin: "18px 0 0", 
            color: 
              "rgba(255,255,255,0.35)", 
            fontSize: "12px", 
            letterSpacing: "1px", 
          }} 
        > 
          ❤️ 
        </p> 
      </motion.section> 
 
      {/* ========================================================= 
          CONTINUE TO LOVE LETTER 
      ========================================================= */} 
 
      <motion.section 
        initial={{ 
          opacity: 0, 
          y: 40, 
        }} 
        whileInView={{ 
          opacity: 1, 
          y: 0, 
        }} 
        viewport={{ 
          once: true, 
        }} 
        transition={{ 
          duration: 1, 
        }} 
        style={{ 
          position: "relative", 
          zIndex: 2, 
          textAlign: "center", 
          marginTop: "85px", 
        }} 
      > 
        <p 
          style={{ 
            margin: 0, 
            color: "#ffb6c1", 
            fontSize: "15px", 
            fontStyle: "italic", 
          }} 
        > 
          And this is only a small part of our story... 
        </p> 
 
        <motion.button 
          whileHover={{ 
            scale: 1.05, 
            boxShadow: 
              "0 0 45px rgba(255,77,136,0.55)", 
          }} 
          whileTap={{ 
            scale: 0.96, 
          }} 
          onClick={() => setOpenLetter(true)} 
          style={{ 
            marginTop: "25px", 
            padding: "16px 34px", 
            minWidth: "260px", 
            borderRadius: "50px", 
            border: 
              "1px solid rgba(255,255,255,0.15)", 
            cursor: "pointer", 
            background: 
              "linear-gradient(135deg, #ff4d88, #ff82aa)", 
            color: "#fff", 
            fontSize: "17px", 
            fontWeight: 600, 
            boxShadow: 
              "0 0 25px rgba(255,77,136,0.3)", 
          }} 
        > 
          Read What My Heart Says 💌 
        </motion.button> 
      </motion.section> 
 
      {/* ========================================================= 
          FOOTER 
      ========================================================= */} 
 
      <p 
        style={{ 
          position: "relative", 
          zIndex: 2, 
          margin: "60px 0 0", 
          textAlign: "center", 
          color: 
            "rgba(255,255,255,0.3)", 
          fontSize: "10px", 
          letterSpacing: "3px", 
        }} 
      > 
        SOME MEMORIES ARE FOREVER ❤️ 
      </p> 
 
      {/* ========================================================= 
          FULLSCREEN PHOTO VIEWER 
      ========================================================= */} 
 
      <AnimatePresence> 
        {selectedPhoto !== null && ( 
          <motion.div 
            initial={{ 
              opacity: 0, 
            }} 
            animate={{ 
              opacity: 1, 
            }} 
            exit={{ 
              opacity: 0, 
            }} 
            onClick={closeViewer} 
            style={{ 
              position: "fixed", 
              inset: 0, 
              zIndex: 100, 
              background: 
                "rgba(0,0,0,0.94)", 
              display: "flex", 
              justifyContent: "center", 
              alignItems: "center", 
              padding: "25px", 
              boxSizing: "border-box", 
              backdropFilter: "blur(14px)", 
            }} 
          > 
            {/* Close */} 
 
            <motion.button 
              whileHover={{ 
                scale: 1.1, 
              }} 
              whileTap={{ 
                scale: 0.9, 
              }} 
              onClick={closeViewer} 
              style={{ 
                position: "absolute", 
                top: "20px", 
                right: "20px", 
                zIndex: 105, 
                width: "45px", 
                height: "45px", 
                borderRadius: "50%", 
                border: 
                  "1px solid rgba(255,255,255,0.2)", 
                background: 
                  "rgba(255,255,255,0.08)", 
                color: "#fff", 
                fontSize: "22px", 
                cursor: "pointer", 
                backdropFilter: "blur(10px)", 
              }} 
            > 
              × 
            </motion.button> 
 
            {/* Previous */} 
 
            <motion.button 
              whileHover={{ 
                scale: 1.1, 
              }} 
              whileTap={{ 
                scale: 0.9, 
              }} 
              onClick={(event) => { 
                event.stopPropagation(); 
                showPreviousPhoto(); 
              }} 
              style={{ 
                position: "absolute", 
                left: "15px", 
                top: "50%", 
                transform: 
                  "translateY(-50%)", 
                zIndex: 105, 
                width: "48px", 
                height: "48px", 
                borderRadius: "50%", 
                border: 
                  "1px solid rgba(255,255,255,0.2)", 
                background: 
                  "rgba(255,255,255,0.08)", 
                color: "#fff", 
                fontSize: "24px", 
                cursor: "pointer", 
                backdropFilter: "blur(10px)", 
              }} 
            > 
              ‹ 
            </motion.button> 
 
            {/* Next */} 
 
            <motion.button 
              whileHover={{ 
                scale: 1.1, 
              }} 
              whileTap={{ 
                scale: 0.9, 
              }} 
              onClick={(event) => { 
                event.stopPropagation(); 
                showNextPhoto(); 
              }} 
              style={{ 
                position: "absolute", 
                right: "15px", 
                top: "50%", 
                transform: 
                  "translateY(-50%)", 
                zIndex: 105, 
                width: "48px", 
                height: "48px", 
                borderRadius: "50%", 
                border: 
                  "1px solid rgba(255,255,255,0.2)", 
                background: 
                  "rgba(255,255,255,0.08)", 
                color: "#fff", 
                fontSize: "24px", 
                cursor: "pointer", 
                backdropFilter: "blur(10px)", 
              }} 
            > 
              › 
            </motion.button> 
 
            {/* Viewer */} 
 
            <motion.div 
              key={selectedPhoto} 
              initial={{ 
                opacity: 0, 
                scale: 0.88, 
                y: 20, 
              }} 
              animate={{ 
                opacity: 1, 
                scale: 1, 
                y: 0, 
              }} 
              exit={{ 
                opacity: 0, 
                scale: 0.88, 
              }} 
              transition={{ 
                duration: 0.35, 
              }} 
              onClick={(event) => 
                event.stopPropagation() 
              } 
              style={{ 
                width: "100%", 
                maxWidth: "1000px", 
                maxHeight: "90vh", 
                display: "flex", 
                flexDirection: "column", 
                alignItems: "center", 
              }} 
            > 
              <img 
                src={photos[selectedPhoto].image} 
                alt={photos[selectedPhoto].title} 
                style={{ 
                  maxWidth: "100%", 
                  maxHeight: "65vh", 
                  objectFit: "contain", 
                  borderRadius: "16px", 
                  boxShadow: 
                    "0 0 80px rgba(255,77,136,0.28)", 
                  background: "#080808", 
                }} 
              /> 
 
              <p 
                style={{ 
                  margin: "20px 55px 0", 
                  color: 
                    "rgba(255,255,255,0.45)", 
                  fontSize: "10px", 
                  letterSpacing: "3px", 
                  textTransform: "uppercase", 
                }} 
              > 
                Memory{" "} 
                {String(selectedPhoto + 1).padStart( 
                  2, 
                  "0" 
                )} 
              </p> 
 
              <h2 
                style={{ 
                  margin: "8px 45px 0", 
                  color: "#fff", 
                  fontSize: 
                    "clamp(22px, 5vw, 32px)", 
                  fontWeight: 500, 
                  textAlign: "center", 
                }} 
              > 
                {photos[selectedPhoto].title} 
              </h2> 
 
              <p 
                style={{ 
                  margin: 
                    "12px 55px 0", 
                  color: "#ffe0e8", 
                  fontSize: 
                    "clamp(15px, 3.5vw, 19px)", 
                  textAlign: "center", 
                  lineHeight: 1.6, 
                  maxWidth: "720px", 
                }} 
              > 
                {photos[selectedPhoto].text} 
              </p> 
 
              <p 
                style={{ 
                  margin: "9px 0 0", 
                  color: 
                    "rgba(255,255,255,0.35)", 
                  fontSize: "11px", 
                  letterSpacing: "2px", 
                }} 
              > 
                {selectedPhoto + 1} /{" "} 
                {photos.length} 
              </p> 
            </motion.div> 
          </motion.div> 
        )} 
      </AnimatePresence> 
    </main> 
  ); 
}