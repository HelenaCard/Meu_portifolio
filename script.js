// CONFIG
const defaultConfig = {
  hero_name: 'Helena Cardoso',
  hero_title: 'Apaixonada por Tecnologia e Engenharia',
  hero_subtitle: 'Apaixonada por Tecnologia e Engenharia',
  about_text: 'Sou uma profissional apaixonada por tecnologia e engenharia, com foco em desenvolvimento, inovação e aprendizado contínuo. Sou criadora do projeto Bits Neurais, onde compartilho conteúdos sobre tecnologia, programação e inteligência artificial, promovendo o acesso ao conhecimento e incentivando novos aprendizados.\n\nAtuo como embaixadora da Digital Innovation One, apoiando a divulgação de bootcamps gratuitos e iniciativas educacionais acessíveis. Também produzo conteúdos para o Studying Engineering Work, onde compartilho conhecimentos voltados à engenharia e inovação tecnológica.\n\nBusco constantemente evoluir minhas habilidades e desenvolver projetos que utilizem a tecnologia como ferramenta de transformação e impacto positivo.',
  skills_title: 'Habilidades',
  tech_title: 'Tecnologia & Desenvolvimento',
  tech_desc: 'Apaixonada por transformar ideias em soluções digitais inovadoras. Criadora do projeto Bits Neurais, onde compartilho conteúdo sobre tecnologia, IA e programação. Busco sempre aprender, criar e contribuir para o avanço da tecnologia.',
  projects_title: 'Projetos',
  education_title: 'Educação & Divulgação',
  education_desc: 'Sou embaixadora da Digital Innovation One (DIO), uma plataforma inovadora em educação tecnológica. Trabalho na divulgação de bootcamps gratuitos e programas educacionais acessíveis, democratizando o acesso ao aprendizado de qualidade. Meu objetivo é inspirar e capacitar novas gerações a descobrir oportunidades na tecnologia.',
  contact_title: 'Vamos Conversar?',
  background_color: '#050a14',
  surface_color: '#0a1428',
  text_color: '#e8f0ff',
  primary_action_color: '#0066ff',
  accent_color: '#00aaff',
  font_family: 'Outfit',
  font_size: 16
};

const skills = [
  { name: 'Python', level: 85, icon: 'terminal' },
  { name: 'JavaScript', level: 75, icon: 'code-2' },
  { name: 'HTML & CSS', level: 90, icon: 'layout' },
  { name: 'Machine Learning', level: 70, icon: 'brain' },
  { name: 'Git & GitHub', level: 80, icon: 'git-branch' },
  { name: 'Criação de Conteúdo', level: 88, icon: 'pen-tool' }
];

const projects = [
  { title: 'Integração e Transição Energética - Brasil', desc: 'Análise interativa sobre a transição energética brasileira e integração de fontes renováveis', tags: ['Energia', 'Sustentabilidade', 'Análise'], icon: 'zap', link: 'https://helenacard.github.io/Integra-o_e_-Transi-o_-Energ-tica-_-Brasil/' },
  { title: 'IoT para Sistema de Irrigação', desc: 'Sistema de monitoramento inteligente com IoT para agricultura', tags: ['IoT', 'Arduino', 'Engenharia'], icon: 'wifi', link: 'https://github.com/HelenaCard/Iot-para-sistema-de-irriga-o---monitoramento' },
  { title: 'Jogo Fontes de Energia', desc: 'Jogo interativo educativo sobre fontes de energia renovável', tags: ['Jogo', 'Web', 'Educação'], icon: 'zap', link: 'https://helenacard.github.io/Jogo_Fontes_de_Energia/' },
  { title: 'Máquinas Virtuais - Azure', desc: 'Material de apoio e documentação sobre configuração de VMs no Azure', tags: ['Cloud', 'Azure', 'Infraestrutura'], icon: 'cloud', link: 'https://github.com/HelenaCard/Criando---Maquinas-Virtuais-Material-de-Apoio---Azure-' },
  { title: 'Resumo Lab Microsoft Azure', desc: 'Resumo completo e guia prático dos laboratórios Microsoft Azure com exemplos e configurações', tags: ['Azure', 'Cloud', 'Microsoft'], icon: 'cloud', link: 'https://github.com/HelenaCard/resumo-lab-microsoft-azure' },
  { title: 'Lab Natty or Not', desc: 'Projeto explorando IA e aprendizado de máquina com dados reais', tags: ['IA', 'Machine Learning', 'Python'], icon: 'brain', link: 'https://github.com/HelenaCard/lab-natty-or-not' }
];

// Render skills
function renderSkills() {
  const grid = document.getElementById('skillsGrid');
  if (!grid) return;
  grid.innerHTML = skills.map((s, i) => `
    <div class="glass-card rounded-xl p-5 reveal stagger-${i + 1}">
      <div class="flex items-center justify-between mb-3">
        <div class="flex items-center gap-3">
          <i data-lucide="${s.icon}" style="width:18px;height:18px;color:#00aaff"></i>
          <span class="font-500 text-sm" style="color:#e8f0ff">${s.name}</span>
        </div>
        <span class="text-xs font-500" style="color:rgba(0,170,255,0.7);font-family:'JetBrains Mono'">${s.level}%</span>
      </div>
      <div class="h-1.5 rounded-full overflow-hidden" style="background:rgba(0,170,255,0.1)">
        <div class="skill-fill h-full rounded-full" style="--skill-level:${s.level}%;background:linear-gradient(90deg,#0044cc,#00ccff)"></div>
      </div>
    </div>
  `).join('');
  lucide.createIcons();
}

// Render projects
function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;
  grid.innerHTML = projects.map((p, i) => `
    <a href="${p.link}" target="_blank" rel="noopener noreferrer" class="glass-card shimmer rounded-xl p-6 block reveal stagger-${i + 1}" style="text-decoration:none">
      <div class="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style="background:rgba(0,170,255,0.1)">
        <i data-lucide="${p.icon}" style="width:20px;height:20px;color:#00aaff"></i>
      </div>
      <h3 class="font-600 text-base mb-2" style="color:#e8f0ff">${p.title}</h3>
      <p class="text-sm mb-4" style="color:rgba(200,220,255,0.5)">${p.desc}</p>
      <div class="flex flex-wrap gap-2">
        ${p.tags.map(t => `<span class="tag-pill" style="font-size:11px;padding:2px 10px">${t}</span>`).join('')}
      </div>
    </a>
  `).join('');
  lucide.createIcons();
}

// Typing effect
const typingPhrases = ['Apaixonada por Tecnologia & Inovação', 'Embaixadora DIO Campus Expert'];
let phraseIdx = 0, charIdx = 0, deleting = false;
function typeEffect() {
  const el = document.getElementById('typingText');
  if (!el) return;
  if (!deleting) {
    el.textContent = typingPhrases[phraseIdx].substring(0, charIdx + 1);
    charIdx++;
    if (charIdx === typingPhrases[phraseIdx].length) { setTimeout(() => { deleting = true; typeEffect(); }, 2000); return; }
  } else {
    el.textContent = typingPhrases[phraseIdx].substring(0, charIdx - 1);
    charIdx--;
    if (charIdx === 0) { deleting = false; phraseIdx = (phraseIdx + 1) % typingPhrases.length; }
  }
  setTimeout(typeEffect, deleting ? 40 : 80);
}

// Scroll reveal observer
function setupReveal() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

// Skill bar animation on scroll
function setupSkillBars() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.querySelectorAll('.skill-fill').forEach(bar => bar.classList.add('active'));
      }
    });
  }, { threshold: 0.3 });
  const grid = document.getElementById('skillsGrid');
  if (grid) obs.observe(grid);
}

// Active nav link on scroll
function setupNavHighlight() {
  const sections = ['hero', 'about', 'skills', 'tech', 'projects', 'education', 'engineering', 'contact'];
  const scroller = document.getElementById('mainScroll');
  if (!scroller) return;
  scroller.addEventListener('scroll', () => {
    let current = 'hero';
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el && el.offsetTop - 120 <= scroller.scrollTop) current = id;
    });
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.toggle('active', link.getAttribute('data-section') === current);
    });
  });
}

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      document.getElementById('mainScroll').scrollTo({ top: target.offsetTop - 70, behavior: 'smooth' });
    }
    document.getElementById('mobileMenu').classList.add('hidden');
  });
});

// Mobile menu
const mobileBtn = document.getElementById('mobileMenuBtn');
if (mobileBtn) {
  mobileBtn.addEventListener('click', () => {
    document.getElementById('mobileMenu').classList.toggle('hidden');
  });
}

// Particle system
function initParticles() {
  const canvas = document.getElementById('particles');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let w, h, particles = [];
  function resize() { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; }
  resize(); window.addEventListener('resize', resize);
  for (let i = 0; i < 50; i++) {
    particles.push({ x: Math.random() * w, y: Math.random() * h, r: Math.random() * 1.5 + 0.5, dx: (Math.random() - 0.5) * 0.3, dy: (Math.random() - 0.5) * 0.3, o: Math.random() * 0.4 + 0.1 });
  }
  function draw() {
    ctx.clearRect(0, 0, w, h);
    particles.forEach(p => {
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0,170,255,${p.o})`; ctx.fill();
      p.x += p.dx; p.y += p.dy;
      if (p.x < 0) p.x = w; if (p.x > w) p.x = 0;
      if (p.y < 0) p.y = h; if (p.y > h) p.y = 0;
    });
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x, dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.beginPath(); ctx.moveTo(particles[i].x, particles[i].y); ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(0,170,255,${0.06 * (1 - dist / 120)})`; ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }
  draw();
}

// Cursor trail
let mouseX = 0, mouseY = 0;
const trailDots = [];
function initCursorTrail() {
  const container = document.getElementById('cursor-trail');
  if (!container) return;
  for (let i = 0; i < 5; i++) {
    const dot = document.createElement('div');
    dot.className = 'cursor-dot';
    dot.style.opacity = '0';
    dot.style.transform = `scale(${1 - i * 0.15})`;
    container.appendChild(dot);
    trailDots.push({ el: dot, x: 0, y: 0 });
  }
  document.addEventListener('mousemove', e => { mouseX = e.clientX; mouseY = e.clientY; });
  function animate() {
    let prevX = mouseX, prevY = mouseY;
    trailDots.forEach((dot, i) => {
      dot.x += (prevX - dot.x) * (0.3 - i * 0.04);
      dot.y += (prevY - dot.y) * (0.3 - i * 0.04);
      dot.el.style.left = dot.x - 4 + 'px';
      dot.el.style.top = dot.y - 4 + 'px';
      dot.el.style.opacity = String(0.6 - i * 0.12);
      prevX = dot.x; prevY = dot.y;
    });
    requestAnimationFrame(animate);
  }
  animate();
}

// Config Application
function applyConfig(config) {
  const c = { ...defaultConfig, ...config };
  document.getElementById('heroName').textContent = c.hero_name;
  document.getElementById('heroSubtitle').textContent = c.hero_subtitle;
  document.getElementById('aboutText').textContent = c.about_text;
  document.getElementById('skillsTitle').textContent = c.skills_title;
  document.getElementById('techTitle').textContent = c.tech_title;
  document.getElementById('techDesc').textContent = c.tech_desc;
  document.getElementById('projectsTitle').textContent = c.projects_title;
  document.getElementById('educationTitle').textContent = c.education_title;
  document.getElementById('educationDesc').textContent = c.education_desc;
  document.getElementById('contactTitle').textContent = c.contact_title;
  typingPhrases[0] = c.hero_title;

  document.body.style.background = c.background_color;
}

// Init everything
document.addEventListener('DOMContentLoaded', () => {
  renderSkills();
  renderProjects();
  lucide.createIcons();
  setupReveal();
  setupSkillBars();
  setupNavHighlight();
  initParticles();
  initCursorTrail();
  setTimeout(typeEffect, 800);
});