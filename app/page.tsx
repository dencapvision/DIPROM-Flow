'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Copy, 
  Clock, 
  Lightbulb, 
  MessageSquare, 
  BookOpen, 
  Zap,
  Target,
  Layout,
  Layers,
  Sparkles,
  TrendingUp,
  Award,
  PenTool,
  Share2,
  Trash2,
  History,
  CheckCircle2,
  Menu,
  X
} from 'lucide-react';
import { cn } from '@/lib/utils';

// --- Components ---

const PromptCard = ({ title, content, tip }: { title: string; content: string; tip?: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-brand-yellow border-l-4 border-amber-400 p-6 my-6 rounded-r-xl shadow-sm relative overflow-hidden group">
      <div className="flex justify-between items-start mb-3">
        <h4 className="text-xl font-display font-semibold text-amber-900 flex items-center gap-2">
          <MessageSquare className="w-5 h-5 text-amber-600" />
          {title}
        </h4>
        <button 
          onClick={handleCopy}
          className="flex items-center gap-2 text-xs font-medium bg-white/50 hover:bg-white px-3 py-1.5 rounded-full transition-all text-amber-800 border border-amber-200"
        >
          {copied ? <CheckCircle2 className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
          {copied ? 'คัดลอกแล้ว!' : 'คัดลอก Prompt'}
        </button>
      </div>
      <div className="bg-white/40 p-4 rounded-lg text-brand-blue font-mono text-sm leading-relaxed whitespace-pre-wrap select-all">
        {content}
      </div>
      {tip && (
        <div className="mt-4 flex items-start gap-2 text-brand-green italic text-sm">
          <Lightbulb className="w-4 h-4 mt-0.5 shrink-0" />
          <span>{tip}</span>
        </div>
      )}
    </div>
  );
};

const DebriefBox = ({ questions }: { questions: string[] }) => (
  <div className="bg-[#EEF4F0] border border-brand-green/30 p-6 my-6 rounded-2xl">
    <h4 className="text-lg font-display font-semibold text-brand-green flex items-center gap-2 mb-4">
      <Zap className="w-5 h-5" />
      บทสนทนาเชื่อมใจ (Debrief / Reflection)
    </h4>
    <ul className="space-y-3">
      {questions.map((q, i) => (
        <li key={i} className="flex gap-3 text-brand-blue/80">
          <span className="font-bold text-brand-green">🎙</span>
          <span>{q}</span>
        </li>
      ))}
    </ul>
  </div>
);

const FacilitatorTip = ({ text }: { text: string }) => (
  <div className="flex items-center gap-2 px-4 py-2 bg-brand-green/10 text-brand-green rounded-full w-fit mb-4">
    <Sparkles className="w-4 h-4" />
    <span className="text-sm font-medium italic">ครูเด่น: {text}</span>
  </div>
);

const TimelineEntry = ({ time, phase, content }: { time: string; phase: string; content: string }) => (
  <div className="flex gap-4 items-start border-l border-brand-gold/20 pb-6 pl-6 relative last:pb-0">
    <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full bg-brand-gold shadow-[0_0_8px_rgba(212,175,55,0.6)]" />
    <div className="w-16 shrink-0 text-brand-gold font-mono text-sm font-semibold">{time}</div>
    <div>
      <div className="text-brand-blue font-display font-bold text-lg mb-1">{phase}</div>
      <div className="text-brand-blue/70 text-sm leading-relaxed">{content}</div>
    </div>
  </div>
);

// --- Sub-Components ---

const HeartIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>
);

// --- Content Data ---

const STAGES = [
  {
    id: 'cover',
    title: 'Modern Heritage: พัฒนาผลิตภัณฑ์ชุมชนด้วย AI',
    subtitle: 'ยกระดับทุนวัฒนธรรมสู่ผลิตภัณฑ์ต้นแบบที่ลอกเลียนไม่ได้',
    stage: 'Welcome',
    content: (
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-1.5 bg-brand-blue text-brand-gold text-sm font-display font-semibold tracking-wider rounded-sm">
              DIPROM x CAP VISION INSTITUTE
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-brand-blue leading-tight uppercase">
              Artisan <br />
              <span className="text-brand-gold">Intelligence</span>
            </h1>
            <p className="text-xl text-brand-blue/70 leading-relaxed font-light">
              การผสานภูมิปัญญาดั้งเดิมเข้ากับเทคโนโลยีดิจิทัล <br />
              เพื่อสร้างสรรค์ความงามที่มีคุณค่าและยั่งยืน
            </p>
            <div className="pt-8 space-y-2">
              <p className="text-sm uppercase tracking-widest text-brand-blue/50 font-bold">วิทยากร</p>
              <p className="text-2xl font-display font-medium text-brand-blue">นายอนุสรณ์ หนองนา (ครูเด่น)</p>
              <p className="text-brand-gold font-medium">14 พฤษภาคม 2569 | โรงแรมคุ้มภูคำ เชียงใหม่</p>
            </div>
          </div>
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl bg-brand-blue">
             <div className="absolute inset-0 bg-gradient-to-t from-brand-blue via-transparent to-transparent z-10Opacity-40" />
             <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <Menu className="w-64 h-64 text-brand-gold" />
             </div>
             <div className="absolute bottom-8 left-8 right-8 z-20 text-white">
                <div className="flex items-center gap-2 mb-2 text-brand-gold">
                  <Sparkles className="w-5 h-5" />
                  <span className="text-sm font-bold tracking-widest uppercase">Special Edition</span>
                </div>
                <h3 className="text-2xl font-display font-bold">Modern Thai Heritage</h3>
             </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'opening',
    title: 'เปิดใจก่อนเรียน',
    subtitle: 'From Identity to Original — อัตลักษณ์ชุมชนสู่ต้นแบบที่ลอกไม่ได้',
    stage: 'Opening',
    content: (
      <div className="space-y-12">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
             <FacilitatorTip text="สร้างพื้นที่ปลอดภัย เริ่มดึงหัวใจให้อยู่กับตัว" />
             <div className="space-y-6">
               <TimelineEntry 
                 time="5'" 
                 phase="Hook" 
                 content="'สิ่งที่ทำให้สินค้าชิ้นนี้ลอกไม่ได้คืออะไร?' — ให้แต่ละคนจับคู่คุย 2 นาที" 
               />
               <TimelineEntry 
                 time="10'" 
                 phase="Explore" 
                 content="เปรียบเทียบสินค้าชุมชนก่อน-หลังยกระดับ + เชื่อม SCAMPER Idea Booster" 
               />
               <TimelineEntry 
                 time="5'" 
                 phase="Commit" 
                 content="สัญญาการเรียนรู้: 'วันนี้ขอให้ทุกคน ... (ทำ 1 สิ่งที่ยังไม่เคยลอง)'" 
               />
             </div>
          </div>
          <div>
            <DebriefBox questions={[
              "สินค้าของคุณมี 'จุดที่ลอกไม่ได้' อยู่ตรงไหนบ้าง?",
              "ถ้า AI จะช่วยพัฒนาสินค้าคุณ อยากให้ช่วยเรื่องอะไรที่สุด?"
            ]} />
            <div className="p-6 bg-brand-cream rounded-2xl border border-brand-gold/10 mt-6">
               <h4 className="flex items-center gap-2 font-display font-bold text-brand-blue mb-4">
                 <Target className="w-5 h-5 text-brand-gold" />
                 ผลลัพธ์ที่อยากให้เกิด
               </h4>
               <ul className="space-y-3 text-sm text-brand-blue/70">
                 <li className="flex gap-2"><span>🌱</span> <span>ผู้เข้าอบรมรู้สึกปลอดภัย กล้าเปิดใจ</span></li>
                 <li className="flex gap-2"><span>🌱</span> <span>เข้าใจว่า 'ทุนวัฒนธรรม' คือดาบเล่มสำคัญที่ AI ไม่มี</span></li>
                 <li className="flex gap-2"><span>🌱</span> <span>เห็นภาพใหญ่ของการเดินทางในวันนี้</span></li>
               </ul>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'stage1',
    title: 'Know Your Field',
    subtitle: 'รู้ทุ่งของตัวเอง: SWOT + ตลาด + ตำแหน่งแบรนด์',
    stage: 'Stage 1',
    content: (
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1 space-y-6">
            <FacilitatorTip text="AI เป็นพาร์ตเนอร์ ไม่ใช่เครื่องทำเวร" />
            <p className="text-brand-blue/70">วิเคราะห์ธุรกิจตัวเองได้ใน 15 นาที เข้าใจขนาดตลาดและตำแหน่งที่แท้จริง</p>
            
            <PromptCard 
              title="1.1 — SWOT Analysis" 
              content={`ฉันเป็นผู้ประกอบการชุมชนที่ผลิต [ชื่อผลิตภัณฑ์] โดยใช้ [วัตถุดิบหลัก] จากภูมิปัญญา [ชื่อชุมชน/จังหวัด] ปัจจุบันขายหลักผ่าน [ช่องทาง เช่น ตลาดนัด/ออนไลน์] กลุ่มลูกค้าหลักคือ [คนไทย/นักท่องเที่ยว/B2B] ช่วยวิเคราะห์ SWOT ของธุรกิจฉัน โดยเน้น: - จุดแข็งที่มาจากทุนวัฒนธรรมและภูมิปัญญา - โอกาสจากเทรนด์ผู้บริโภคปัจจุบัน - ความเสี่ยงจากสินค้า Mass Production - แนะนำ 1 กลยุทธ์ที่ทำได้ทันทีภายใน 3 เดือน`} 
              tip="ให้ผู้เข้าอบรมกรอกข้อมูลใน [วงเล็บ] ก่อนส่ง — ห้ามลัดขั้นตอน!"
            />
            
            <PromptCard 
              title="1.2 — Market Size & Trend" 
              content={`ช่วยวิเคราะห์ตลาดสินค้า [ประเภทผลิตภัณฑ์] สำหรับผู้ประกอบการรายย่อยในไทย: 1. ขนาดตลาดโดยประมาณในปัจจุบัน 2. เทรนด์ผู้บริโภคที่เกี่ยวข้องใน 2–3 ปีข้างหน้า 3. คู่แข่งหลัก 3 ประเภท (Mass / Premium / Artisan) 4. ช่องว่างตลาด (Market Gap) ที่ผู้ประกอบการรายเล็กเข้าได้ 5. Positioning แนะนำสำหรับสินค้าที่มีเรื่องราวและภูมิปัญญาไทย`} 
              tip="ใช้ Prompt นี้ร่วมกัน 1 กลุ่ม แล้วแชร์ความเห็นกัน"
            />
          </div>
          <div className="w-full md:w-80 shrink-0 space-y-6">
             <div className="bg-brand-blue p-6 rounded-2xl text-white">
               <h4 className="flex items-center gap-2 font-display font-medium text-brand-gold mb-6 border-b border-white/10 pb-4">
                 <Clock className="w-5 h-5" /> 
                 60–90 นาที
               </h4>
               <div className="space-y-4 text-sm opacity-80">
                 <p className="font-bold">Framework ที่ต้องใช้:</p>
                 <ul className="space-y-2 list-disc pl-4">
                   <li>SWOT (Strategic Tool)</li>
                   <li>Market Size (TAM/SAM/SOM)</li>
                   <li>Competitive Matrix</li>
                 </ul>
               </div>
             </div>
             <DebriefBox questions={[
               "SWOT ที่ AI วิเคราะห์ตรงกับที่เรามีในหัวไหม? มีอะไรที่ 'เอ๊ะ' ไหม?",
               "จุดแข็งจากวัฒนธรรมคืออะไร ที่เรามองข้ามไปนาาาาน?"
             ]} />
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'stage2',
    title: 'Market Leads',
    subtitle: 'ตลาดนำการผลิต: อัตลักษณ์ + SCAMPER + Personalization',
    stage: 'Stage 2',
    content: (
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="space-y-6">
              <FacilitatorTip text="ทุกคนเป็น 'สปา' ออกแบบสินค้าเฉพาะตัวได้" />
              <PromptCard 
                title="2.1 — สร้างอัตลักษณ์ผลิตภัณฑ์" 
                content={`ช่วยสร้าง 'อัตลักษณ์ผลิตภัณฑ์' สำหรับสินค้าชุมชนของฉัน: - ชื่อสินค้า: [ระบุ] - วัตถุดิบ: [ระบุแหล่งที่มา / ความพิเศษ] - กระบวนการผลิต: [บรรยายสั้นๆ] - ผู้ผลิต: [ชื่อช่างหรือชุมชน + ประสบการณ์กี่ปี] - เรื่องราวเบื้องหลัง: [เล่าให้ AI ฟัง] ขอ: 1. Brand Story สั้น 3 ประโยค 2. 3 คุณค่าหลัก (Core Values) ที่ลูกค้ารู้สึกได้ 3. คำขวัญผลิตภัณฑ์ (Tagline) ที่จำง่าย ทรงพลัง`}
                tip="เล่าเรื่องของเราให้ AI ฟังเยอะๆ ยิ่งละเอียด ยิ่งพรีเมียม"
              />
              <PromptCard 
                title="2.2 — SCAMPER Idea AI" 
                content={`ฉันมีผลิตภัณฑ์ชุมชน: [ชื่อสินค้า] ราคาปัจจุบัน [xxx] บาท กลุ่มลูกค้า [ระบุ] ช่วยประยุกต์ SCAMPER เพื่อพัฒนาผลิตภัณฑ์ใหม่: S (Substitute) = เปลี่ยนวัตถุดิบ/วิธีอะไรได้บ้าง? C (Combine) = รวมกับอะไรเพื่อสร้างคุณค่าใหม่? A (Adapt) = ดัดแปลงสำหรับกลุ่มลูกค้าใหม่? M (Modify) = ปรับขนาด/สี/รูปแบบอย่างไร? P (Put to other use) = ใช้ประโยชน์อื่นได้? E (Eliminate) = ตัดสิ่งที่ไม่จำเป็นออก? R (Rearrange) = จัดใหม่/ลำดับใหม่? ขอ 3 ไอเดียที่ทำได้จริงใน 3 เดือน`}
              />
           </div>
           <div className="space-y-6">
              <div className="bg-brand-cream p-6 rounded-2xl border-2 border-brand-gold/5">
                <h4 className="font-display font-bold text-brand-blue mb-4">🌱 ทุน ว.ท.ว.</h4>
                <p className="text-sm text-brand-blue/70 leading-relaxed italic">
                  "ทุนวัฒนธรรมของคุณคือ รากแก้ว ที่ AI ช่วยรดน้ำให้เติบโต แต่เมล็ดพันธุ์ต้องมาจากหัวใจคุณเอง"
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                   <span className="px-3 py-1 bg-white text-xs rounded-full border">วัตถุดิบ</span>
                   <span className="px-3 py-1 bg-white text-xs rounded-full border">กระบวนการ</span>
                   <span className="px-3 py-1 bg-white text-xs rounded-full border">ความเชื่อ</span>
                </div>
              </div>
              <DebriefBox questions={[
                "ไอเดียไหนจาก SCAMPER ที่ทำให้ไฟลุกที่สุด?",
                "Story ไหนที่ยังไม่เค้าเล่าออกมาให้โลกฟังบ้าง?"
              ]} />
           </div>
        </div>
      </div>
    )
  },
  {
    id: 'stage3',
    title: 'Sketch to Prototype',
    subtitle: 'สเก็ตช์สู่ต้นแบบ: AI Sketch + บรรจุภัณฑ์ + Design Thinking',
    stage: 'Stage 3',
    content: (
       <div className="space-y-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <FacilitatorTip text="เปลี่ยน 'ภาพในหัว' ให้เป็น 'ภาพในมือ'" />
              <PromptCard 
                title="3.1 — AI Image Generator" 
                content={`Product photo of [ชื่อสินค้า], handmade [วัตถุดิบ], traditional Thai [จังหวัด] craftmanship, [สี/ลวดลาย], premium quality, white background, soft natural lighting, commercial photography style, high detail`}
                tip="ทดลองเปลี่ยนคำอธิบาย 3 รอบ เพื่อหารูปที่ใช่ที่สุด"
              />
              <PromptCard 
                title="3.2 — Packaging Concept" 
                content={`ช่วยออกแบบแนวคิดบรรจุภัณฑ์สำหรับสินค้า [ชื่อ] ที่: - สื่อถึงอัตลักษณ์ [ชุมชน] - เหมาะกับกลุ่มลูกค้า [ระบุ] - วัสดุที่ใช้ได้: [ระเขุ] - ต้องมีองค์ประกอบ: [โลโก้/QR Code] ขอ 3 แนวคิดออกแบบ พร้อมชื่อ Concept`}
              />
              <PromptCard 
                title="3.4 — Sketch to 3D Prototype (System Instructions)" 
                content={`You are an expert 3D Industrial Designer. Your task is to analyze the provided hand-drawn sketch and transform it into a professional 3D CAD visualization reference. 

1. Identify core product architecture (shapes, proportions, scale). 
2. Interpret material textures based on cultural heritage (e.g., polished lacquerware, hand-woven fiber, teak wood). 
3. Reconstruct the object in a 3-quarter view with professional studio lighting. 
4. Output a high-fidelity 3D-realistic render that highlights both craftsmanship and modern luxury. 

Constraints: Ensure the final output maintains the 'soul' of the local wisdom provided. Handle the transformation with extreme attention to surface details (textures, grain, imperfections that signify 'handmade').`}
                tip="ใช้ Prompt นี้เป็น System Instruction ใน AI ที่รองรับการอ่านภาพ (Multi-modal) เพื่อเปลี่ยนรูปถ่ายลายเส้นให้เป็นงานพรีเมียม"
              />
            </div>
            <div className="space-y-8">
               <div className="aspect-video bg-gray-100 rounded-2xl border-4 border-white shadow-xl flex items-center justify-center relative overflow-hidden group">
                  <Layout className="w-12 h-12 text-gray-300 group-hover:scale-110 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/20 to-transparent p-6 flex flex-col justify-end">
                    <p className="text-sm font-bold text-brand-blue uppercase tracking-tighter">Live Demo Area</p>
                    <p className="text-xs text-brand-blue/60">Canva AI / Adobe Firefly / Chat GPT</p>
                  </div>
               </div>
               <div className="bg-brand-green/5 p-6 rounded-2xl">
                 <h4 className="font-display font-medium text-brand-green mb-4">Facilitator Roadmap:</h4>
                 <ul className="space-y-3 text-sm">
                   <li className="flex gap-2"><span>1.</span> <span>Hook: ดู Before / After บรรจุภัณฑ์</span></li>
                   <li className="flex gap-2"><span>2.</span> <span>Demo: สร้างภาพแบบ Live สดๆ</span></li>
                   <li className="flex gap-2"><span>3.</span> <span>Work: สเก็ตช์ภาพของตัวเอง 3 แบบ</span></li>
                 </ul>
               </div>
            </div>
          </div>
       </div>
    )
  },
  {
    id: 'stage4',
    title: 'Zero Waste Economy',
    subtitle: 'ต้นทุนไร้ของเสีย: การจัดการวัสดุเหลือใช้เพื่อเพิ่มมูลค่า',
    stage: 'Stage 4',
    content: (
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <FacilitatorTip text="ของเสียของเขา คือเพชรพลอยของเรา" />
            <PromptCard 
              title="4.1 — Cost Structure Analysis" 
              content={`ช่วยวิเคราะห์โครงสร้างต้นทุนสำหรับสินค้าของฉัน: - สินค้า: [ระบุ] - วัตถุดิบ: [รายการ + ราคาสั้นๆ] - แรงงาน: [ระบุ] - ราคาขายปัจจุบัน: [ระบุ] ขอ: 1. ตารางต้นทุนต่อหน่วย 2. Gross Margin (%) 3. จุดคุ้มทุน 4. แนะนำวิธีลดต้นทุน`}
            />
            <PromptCard 
              title="4.2 — Zero Waste Opportunities" 
              content={`กระบวนการผลิต [ชื่อสินค้า] มีของเสีย: [ระบุ เช่น เศษผ้า/ไม้/น้ำ] ช่วยแนะนำ: 1. ไอเดียต่องยอดมเป็นของใหม่ 2. หาตลาดที่ต้องการ 3. วิธีการ Upcycling ที่ทำได้จริง`}
              tip="ถ่ายรูปของเสียจริงในโรงงาน แล้วเปรยให้ AI ฟังด้วย!"
            />
          </div>
          <div className="space-y-6">
             <div className="bg-brand-green text-white p-8 rounded-3xl shadow-lg relative overflow-hidden">
                <Trash2 className="absolute top-[-10px] right-[-10px] w-24 h-24 opacity-10" />
                <h4 className="text-xl font-display font-bold mb-4">Circular <br /> Economy</h4>
                <p className="text-sm opacity-90 leading-relaxed mb-6">
                  การจัดการขยะที่ดีที่สุด คือการทำให้มันไม่เป็นขยะตั้งแต่ต้น
                </p>
                <div className="text-3xl font-display font-bold text-white/50">0 %</div>
                <div className="text-xs font-bold tracking-widest uppercase mt-1">WASTE TARGET</div>
             </div>
             <DebriefBox questions={[
               "ต้นทุนจริงที่เราถูออกมาได้ ทำให้เราตกใจตรงไหนไหม?",
               "ของชิ้นไหนที่ AI บอกว่ามีค่านะ?"
             ]} />
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'stage5',
    title: 'Test & Tell',
    subtitle: 'ทดสอบตลาด เล่าเรื่องขาย: Script 30 วินาที + Personal Branding',
    stage: 'Stage 5',
    content: (
      <div className="space-y-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <FacilitatorTip text="ขายเลยวันนี้ ไม่ต้องรอสมบูรณ์แบบ" />
            <div className="aspect-square bg-brand-blue rounded-3xl p-8 flex flex-col justify-between text-white shadow-2xl">
               <div className="flex justify-between items-start">
                  <div className="w-12 h-12 rounded-full border-2 border-brand-gold flex items-center justify-center">
                    <History className="w-6 h-6 text-brand-gold" />
                  </div>
                  <span className="text-6xl font-display font-bold text-white/10 uppercase">Sell</span>
               </div>
               <div>
                  <h3 className="text-3xl font-display font-bold mb-2">30 Seconds <br /> <span className="text-brand-gold">Masterclass</span></h3>
                  <p className="text-sm opacity-60">พลังของการเล่าเรื่อง (Storytelling that Sells)</p>
               </div>
            </div>
            <DebriefBox questions={[
              "Script ที่ได้มา มันคือเสียงของเราหรือเปล่า?",
              "5 วินาทีแรก จะทำอะไรให้เค้าไม่เลื่อนหนี?"
            ]} />
          </div>
          <div className="space-y-6">
            <PromptCard 
              title="5.1 — Script 30 วินาที" 
              content={`ช่วยเขียน Script คลิปวิดีโอนำเสนอสินค้า 30 วินาที สำหรับ Facebook/TikTok: - สินค้า: [ชื่อ] - จุดเด่นหลัก: [2–3 อย่าง] - กลุ่มลูกค้า: [ระบุ] - ต้องการให้คนดู: [โทร/กดลิงก์/ซื้อ] ใช้ภาษาพูด สั้น กระชับ มีพลัง!` }
            />
            <PromptCard 
                title="5.3 — Caption โพสต์ขาย" 
                content={`ช่วยเขียน Caption Facebook สำหรับสินค้า [ชื่อ] ราคา [xxx] บาท: - จุดเด่น: [ระบุ] - เรื่องราว: [สั้นๆ] - CTA: [สั่งซื้ออินบล็อก] ให้มี Hook บรรทัดแรกที่น่าหยุดมอง`}
              />
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'closing',
    title: 'ปิดใจ เก็บเมล็ดพันธุ์',
    subtitle: 'Commit & Action Plan — การเรียนรู้จบเมื่อลงมือทำ',
    stage: 'Closing',
    content: (
      <div className="flex flex-col items-center justify-center min-h-[50vh] space-y-12">
        <div className="max-w-3xl text-center space-y-6">
           <div className="inline-flex items-center gap-2 px-6 py-2 bg-brand-gold/10 text-brand-gold rounded-full border border-brand-gold/20 mb-4 animate-pulse">
             <HeartIcon className="w-5 h-5 fill-current" />
             <span className="font-display font-semibold uppercase tracking-widest text-sm">Commitment Time</span>
           </div>
           <h2 className="text-4xl md:text-6xl font-display font-bold text-brand-blue leading-tight">
             จาก "ความรู้" <br /> สู่ "ความภูมิใจ"
           </h2>
           <p className="text-xl text-brand-blue/60 max-w-xl mx-auto italic font-light">
             "ดึงคุณค่าที่โดดเด่นให้ปรากฏชัดเจนยิ่งขึ้น — Flow Learning: เรียนรู้แบบลื่นไหล เติบโตแบบไร้ขีดจำกัด"
           </p>
        </div>

        <div className="w-full max-w-4xl grid md:grid-cols-2 gap-8">
           <PromptCard 
             title="Action Plan Generator" 
             content={`จากที่ฉันเรียนมาวันนี้เรื่องการพัฒนาผลิตภัณฑ์ชุมชนด้วย AI: - สินค้าที่อยากพัฒนา: [ระบุ] - ไอเดียหลักที่ได้: [1–3 ไอเดีย] ช่วยสร้าง Action Plan 30 วัน: - สัปดาห์ 1-4: ทำอะไร? พร้อม 1 KPI ที่วัดผลได้จริง`} 
             tip="พิมพ์ออกมา ติดไว้ที่โรงงาน ให้ใจคุณได้เห็นทุกวัน"
           />
           <div className="bg-brand-blue p-8 rounded-2xl text-white flex flex-col justify-center gap-4">
              <p className="text-lg font-display">สิ่งที่สัญญากับตัวเอง:</p>
              <div className="h-24 bg-white/5 border border-white/10 rounded-lg p-4 flex items-center justify-center italic text-white/50">
                เขียนเป้าหมายของคุณที่นี่...
              </div>
              <button className="bg-brand-gold text-brand-blue py-3 rounded-xl font-bold font-display uppercase tracking-widest hover:bg-white transition-colors">
                บันทึกคำสัญญา
              </button>
           </div>
        </div>
      </div>
    )
  }
];

// --- Main Page ---

export default function WorkshopApp() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const currentSlide = STAGES[currentIdx];

  const goNext = () => currentIdx < STAGES.length - 1 && setCurrentIdx((prev) => prev + 1);
  const goPrev = () => currentIdx > 0 && setCurrentIdx((prev) => prev - 1);

  const progress = ((currentIdx + 1) / STAGES.length) * 100;

  return (
    <div className="flex flex-col min-h-screen bg-brand-cream overflow-hidden">
      
      {/* --- Sidebar Menu (Mobile/Desktop) --- */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 left-0 w-80 bg-brand-blue z-50 shadow-2xl p-8 flex flex-col"
          >
            <div className="flex justify-between items-center mb-12">
               <div className="text-brand-gold font-display font-bold text-xl">DIPROM Flow</div>
               <button onClick={() => setMenuOpen(false)} className="text-white/50 hover:text-white transition-colors">
                 <X className="w-6 h-6" />
               </button>
            </div>
            <div className="flex-1 space-y-2 overflow-y-auto pr-2 custom-scrollbar">
              {STAGES.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => { setCurrentIdx(i); setMenuOpen(false); }}
                  className={cn(
                    "w-full text-left px-5 py-3.5 rounded-xl transition-all flex items-center gap-4 group",
                    currentIdx === i ? "bg-brand-gold text-brand-blue" : "text-white/60 hover:text-white hover:bg-white/5"
                  )}
                >
                  <span className="font-mono text-xs opacity-50 group-hover:opacity-100">{String(i).padStart(2, '0')}</span>
                  <span className="font-display font-medium text-sm truncate">{s.title}</span>
                </button>
              ))}
            </div>
            <div className="pt-8 border-t border-white/10 text-white/40 text-[10px] tracking-widest uppercase">
              Facilitator Handbook v1.0
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- Header --- */}
      <header className="px-6 md:px-12 py-6 flex justify-between items-center bg-white/40 backdrop-blur-sm sticky top-0 z-40 border-b border-brand-blue/5">
        <div className="flex items-center gap-6">
          <button 
            onClick={() => setMenuOpen(true)}
            className="p-2.5 bg-brand-blue text-white rounded-xl hover:scale-105 active:scale-95 transition-all shadow-lg"
          >
            <Menu className="w-5 h-5" />
          </button>
          <div className="hidden md:block">
            <h2 className="text-sm font-display font-bold text-brand-blue/40 uppercase tracking-tighter">กิจกรรมพัฒนาผลิตภัณฑ์</h2>
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-brand-gold" />
              <p className="text-base font-display font-bold text-brand-blue">{currentSlide.title}</p>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
           {/* Progress Indicator */}
           <div className="hidden sm:flex items-center gap-3">
             <div className="w-32 h-1.5 bg-brand-blue/10 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-brand-gold"
                  animate={{ width: `${progress}%` }}
                />
             </div>
             <span className="text-xs font-mono font-bold text-brand-blue/40">{Math.round(progress)}%</span>
           </div>
           
           <div className="h-10 w-[1px] bg-brand-blue/10 mx-2" />
           
           <div className="text-right hidden md:block">
             <p className="text-[10px] font-bold text-brand-blue/30 uppercase tracking-widest leading-none mb-1">Current Section</p>
             <p className="text-sm font-display font-bold text-brand-gold uppercase">{currentSlide.stage}</p>
           </div>
        </div>
      </header>

      {/* --- Main Slide Area --- */}
      <main className="flex-1 flex flex-col items-center justify-center p-6 md:p-12">
        <div className="w-full max-w-7xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card p-8 md:p-16 rounded-[2.5rem]"
            >
              <div className="mb-12">
                 <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-brand-gold text-brand-blue text-[10px] font-bold rounded-full uppercase tracking-widest">
                      {currentSlide.stage}
                    </span>
                    <div className="h-[1px] flex-1 bg-brand-gold/20" />
                 </div>
                 <h2 className="text-2xl md:text-3xl font-display font-bold text-brand-blue mb-2">
                   {currentSlide.title}
                 </h2>
                 <p className="text-brand-blue/50 text-base md:text-lg">
                   {currentSlide.subtitle}
                 </p>
              </div>

              <div className="min-h-[40vh]">
                {currentSlide.content}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* --- Footer Controls --- */}
      <footer className="px-12 py-8 flex justify-between items-center bg-transparent pointer-events-none sticky bottom-0 z-40">
        <button
          onClick={goPrev}
          disabled={currentIdx === 0}
          className={cn(
            "p-4 bg-white shadow-xl rounded-full text-brand-blue pointer-events-auto transition-all active:scale-95 group border border-brand-blue/5",
            currentIdx === 0 ? "opacity-20 translate-x-12" : "opacity-100"
          )}
        >
          <ChevronLeft className="w-8 h-8 group-hover:-translate-x-1 transition-transform" />
        </button>
        
        <div className="flex items-center gap-4 bg-brand-blue/90 backdrop-blur-lg px-8 py-4 rounded-full shadow-2xl pointer-events-auto border border-white/10 group">
           <span className="text-white/40 font-mono text-sm group-hover:text-brand-gold transition-colors">{String(currentIdx + 1).padStart(2, '0')}</span>
           <div className="w-12 h-[1px] bg-white/10" />
           <span className="text-white/40 font-mono text-sm">{String(STAGES.length).padStart(2, '0')}</span>
        </div>

        <button
          onClick={goNext}
          disabled={currentIdx === STAGES.length - 1}
          className={cn(
            "p-4 bg-white shadow-xl rounded-full text-brand-blue pointer-events-auto transition-all active:scale-95 group border border-brand-blue/5",
            currentIdx === STAGES.length - 1 ? "opacity-20 -translate-x-12" : "opacity-100"
          )}
        >
          <ChevronRight className="w-8 h-8 group-hover:translate-x-1 transition-transform" />
        </button>
      </footer>

      {/* --- Background Decorative Elements --- */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-blue/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-gold/5 blur-[120px] rounded-full" />
        <div className="absolute top-[20%] right-[10%] w-[20%] h-[30%] bg-brand-green/5 blur-[100px] rounded-full" />
      </div>

    </div>
  );
}
