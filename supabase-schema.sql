-- Estudio Efrata o Salão - Supabase Schema
-- 1. Tabela de agendamentos
CREATE TABLE appointments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  customer_name TEXT NOT NULL,
  customer_phone TEXT NOT NULL,
  professional TEXT NOT NULL CHECK (professional IN ('valeria', 'bruno')),
  service TEXT NOT NULL,
  date DATE NOT NULL,
  time TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'confirmed' CHECK (status IN ('confirmed', 'cancelled', 'completed')),
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Índices para busca eficiente de horários ocupados
CREATE INDEX idx_appointments_date ON appointments(date);
CREATE INDEX idx_appointments_professional ON appointments(professional);
CREATE INDEX idx_appointments_status ON appointments(status);

-- 2. Tabela de serviços
CREATE TABLE services (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  professional TEXT NOT NULL CHECK (professional IN ('valeria', 'bruno')),
  name TEXT NOT NULL,
  description TEXT,
  duration INTEGER NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Inserir serviços padrão da Valéria e do Bruno
INSERT INTO services (professional, name, description, duration, price) VALUES
  ('valeria', 'Corte Premium Feminino', 'Corte personalizado com análise de formato de rosto e textura dos fios.', 60, 180.00),
  ('valeria', 'Coloração Personalizada', 'Técnicas exclusivas de coloração com produtos profissionais de alta performance.', 120, 350.00),
  ('valeria', 'Tratamento Capilar Luxury', 'Hidratação profunda com queratina e óleos nobres para revitalizar os fios.', 90, 250.00),
  ('valeria', 'Escova Especial', 'Escova modelada com finalização profissional e proteção térmica.', 60, 150.00),
  ('valeria', 'Transformação Completa', 'Corte, coloração e tratamento em um combo exclusivo de transformação.', 180, 580.00),
  ('bruno', 'Corte Masculino Premium', 'Corte moderno e personalizado com tesoura e máquina, finalização com produtos premium.', 60, 120.00),
  ('bruno', 'Barba Tradicional', 'Aparação e modelagem de barba com navalha, toalha quente e balm hidratante.', 45, 80.00),
  ('bruno', 'Barboterapia Relaxante', 'Barba completa com toalhas quentes, óleos essenciais e massagem facial relaxante.', 75, 150.00),
  ('bruno', 'Corte + Barba Executivo', 'Combo completo de corte e barba para o homem que precisa de praticidade e estilo.', 90, 180.00),
  ('bruno', 'Design de Estilo Masculino', 'Consultoria de estilo capilar masculino com corte personalizado e finalização premium.', 90, 200.00);

-- 3. Row Level Security (Segurança Básica)
ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;
ALTER TABLE services ENABLE ROW LEVEL SECURITY;

-- Políticas para permitir inserção e leitura pública de agendamentos e serviços
CREATE POLICY "Anyone can create appointments"
  ON appointments FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Anyone can view appointments"
  ON appointments FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Anyone can view services"
  ON services FOR SELECT
  TO anon
  USING (true);