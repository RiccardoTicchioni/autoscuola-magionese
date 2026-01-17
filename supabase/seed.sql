-- Autoscuola Magionese Seed Data
-- Demo data for development and testing

-- ==========================================
-- BRANCHES (SEDI)
-- ==========================================

INSERT INTO branches (id, name, slug, address, city, postal_code, phone, email, hours, lat, lng, parking_info, directions, active) VALUES
(
    'b0000001-0000-0000-0000-000000000001',
    'Sede Centro',
    'magione-centro',
    'Via Roma 123',
    'Magione',
    '06063',
    '075 123 4567',
    'centro@autoscuolamagionese.it',
    '{
        "monday": {"open": "09:00", "close": "13:00", "break_start": "13:00", "break_end": "15:00"},
        "tuesday": {"open": "09:00", "close": "19:00", "break_start": "13:00", "break_end": "15:00"},
        "wednesday": {"open": "09:00", "close": "19:00", "break_start": "13:00", "break_end": "15:00"},
        "thursday": {"open": "09:00", "close": "19:00", "break_start": "13:00", "break_end": "15:00"},
        "friday": {"open": "09:00", "close": "19:00", "break_start": "13:00", "break_end": "15:00"},
        "saturday": {"open": "09:00", "close": "12:30"},
        "sunday": null
    }',
    43.1234,
    12.2056,
    'Parcheggio gratuito disponibile in Piazza della Repubblica a 50 metri.',
    'Dalla E45 uscita Magione, proseguire verso il centro storico. La sede si trova accanto al municipio.',
    TRUE
),
(
    'b0000002-0000-0000-0000-000000000002',
    'Sede Zona Industriale',
    'magione-industriale',
    'Via dell''Industria 45',
    'Magione',
    '06063',
    '075 123 4568',
    'industriale@autoscuolamagionese.it',
    '{
        "monday": {"open": "08:30", "close": "18:30", "break_start": "12:30", "break_end": "14:30"},
        "tuesday": {"open": "08:30", "close": "18:30", "break_start": "12:30", "break_end": "14:30"},
        "wednesday": {"open": "08:30", "close": "18:30", "break_start": "12:30", "break_end": "14:30"},
        "thursday": {"open": "08:30", "close": "18:30", "break_start": "12:30", "break_end": "14:30"},
        "friday": {"open": "08:30", "close": "18:30", "break_start": "12:30", "break_end": "14:30"},
        "saturday": null,
        "sunday": null
    }',
    43.1289,
    12.2134,
    'Ampio parcheggio privato gratuito.',
    'Dalla E45 uscita Magione, seguire indicazioni zona industriale. La sede si trova dopo il supermercato.',
    TRUE
);

-- ==========================================
-- SERVICES (PATENTI E CORSI)
-- ==========================================

INSERT INTO services (id, category, name, slug, short_description, description, requirements, includes, base_price, duration_info, badge, active, order_index) VALUES
-- Patenti
(
    's0000001-0000-0000-0000-000000000001',
    'patente',
    'Patente AM',
    'am',
    'Ciclomotori e quadricicli leggeri',
    'La patente AM ti permette di guidare ciclomotori a due ruote, ciclomotori a tre ruote e quadricicli leggeri con velocità massima di 45 km/h.',
    ARRAY['Età minima 14 anni', 'Documento d''identità valido', 'Codice fiscale', 'Certificato medico', '3 foto tessera'],
    ARRAY['Corso teorico completo', 'Materiale didattico', 'Accesso quiz online', 'Esercitazioni pratiche', 'Prenotazione esami'],
    350.00,
    '1-2 mesi',
    NULL,
    TRUE,
    1
),
(
    's0000002-0000-0000-0000-000000000002',
    'patente',
    'Patente A1',
    'a1',
    'Motocicli fino a 125cc',
    'La patente A1 abilita alla guida di motocicli con cilindrata massima di 125cc e potenza non superiore a 11 kW.',
    ARRAY['Età minima 16 anni', 'Documento d''identità valido', 'Codice fiscale', 'Certificato medico', '3 foto tessera'],
    ARRAY['Corso teorico completo', 'Materiale didattico', 'Accesso quiz online', '6 ore guide obbligatorie', 'Prenotazione esami'],
    450.00,
    '2-3 mesi',
    NULL,
    TRUE,
    2
),
(
    's0000003-0000-0000-0000-000000000003',
    'patente',
    'Patente A2',
    'a2',
    'Motocicli fino a 35kW',
    'La patente A2 consente di guidare motocicli con potenza non superiore a 35 kW.',
    ARRAY['Età minima 18 anni', 'Documento d''identità valido', 'Codice fiscale', 'Certificato medico', '3 foto tessera'],
    ARRAY['Corso teorico completo', 'Materiale didattico', 'Accesso quiz online', '6 ore guide obbligatorie', 'Prenotazione esami'],
    500.00,
    '2-3 mesi',
    NULL,
    TRUE,
    3
),
(
    's0000004-0000-0000-0000-000000000004',
    'patente',
    'Patente A',
    'a',
    'Motocicli senza limiti',
    'La patente A permette di guidare qualsiasi tipo di motociclo senza limitazioni.',
    ARRAY['Età minima 24 anni (o 20 con 2 anni di A2)', 'Documento d''identità valido', 'Codice fiscale', 'Certificato medico', '3 foto tessera'],
    ARRAY['Corso teorico completo', 'Materiale didattico', 'Accesso quiz online', '6 ore guide obbligatorie', 'Prenotazione esami'],
    550.00,
    '2-3 mesi',
    NULL,
    TRUE,
    4
),
(
    's0000005-0000-0000-0000-000000000005',
    'patente',
    'Patente B',
    'b',
    'Autovetture e veicoli leggeri',
    'La patente B è la più diffusa e permette di guidare autovetture con massa massima di 3.500 kg.',
    ARRAY['Età minima 18 anni', 'Documento d''identità valido', 'Codice fiscale', 'Certificato medico', '3 foto tessera'],
    ARRAY['Corso teorico completo', 'Materiale didattico', 'Accesso quiz online illimitato', '6 ore guide obbligatorie certificate', 'Simulazione esame pratico', 'Prenotazione esami', 'Uso veicolo per esame'],
    600.00,
    '2-4 mesi',
    'Più richiesta',
    TRUE,
    5
),
(
    's0000006-0000-0000-0000-000000000006',
    'patente',
    'Patente BE',
    'be',
    'Auto con rimorchio pesante',
    'La patente BE abilita alla guida di autoveicoli di categoria B con rimorchio di massa superiore a 750 kg.',
    ARRAY['Patente B in corso di validità', 'Documento d''identità valido', 'Certificato medico'],
    ARRAY['Corso pratico', 'Esame pratica', 'Assicurazione guide'],
    400.00,
    '3-4 settimane',
    NULL,
    TRUE,
    6
),
-- Corsi professionali
(
    's0000007-0000-0000-0000-000000000007',
    'corso_professionale',
    'CQC Persone',
    'cqc-persone',
    'Trasporto passeggeri professionale',
    'Carta di Qualificazione Conducente per il trasporto professionale di passeggeri.',
    ARRAY['Patente C o D in corso di validità', 'Età minima 21 anni', 'Documento d''identità valido'],
    ARRAY['Corso teorico 130 ore', 'Corso pratico 10 ore', 'Materiale didattico', 'Simulazioni esame', 'Prenotazione esame'],
    1200.00,
    '140 ore',
    'Più richiesto',
    TRUE,
    7
),
(
    's0000008-0000-0000-0000-000000000008',
    'corso_professionale',
    'CQC Merci',
    'cqc-merci',
    'Trasporto merci professionale',
    'Carta di Qualificazione Conducente per il trasporto professionale di merci.',
    ARRAY['Patente C in corso di validità', 'Età minima 18/21 anni', 'Documento d''identità valido'],
    ARRAY['Corso teorico 130 ore', 'Corso pratico 10 ore', 'Materiale didattico', 'Simulazioni esame', 'Prenotazione esame'],
    1200.00,
    '140 ore',
    NULL,
    TRUE,
    8
),
(
    's0000009-0000-0000-0000-000000000009',
    'corso_professionale',
    'Corso ADR',
    'adr',
    'Trasporto merci pericolose',
    'Patentino per il trasporto di merci pericolose su strada.',
    ARRAY['Patente B, C o superiore', 'Età minima 18 anni'],
    ARRAY['Corso teorico', 'Materiale didattico', 'Esame finale', 'Rilascio patentino'],
    400.00,
    '18-36 ore',
    NULL,
    TRUE,
    9
),
(
    's0000010-0000-0000-0000-000000000010',
    'recupero_punti',
    'Recupero Punti A/B',
    'recupero-punti-ab',
    'Recupero fino a 6 punti',
    'Corso per recuperare fino a 6 punti della patente A o B.',
    ARRAY['Patente A o B in corso di validità', 'Punti decurtati (non azzerati)'],
    ARRAY['Corso teorico 12 ore', 'Materiale didattico', 'Attestato di frequenza', 'Comunicazione Motorizzazione'],
    180.00,
    '12 ore',
    'Disponibile subito',
    TRUE,
    10
);

-- ==========================================
-- QUIZ TOPICS
-- ==========================================

INSERT INTO quiz_topics (id, name, description, icon, order_index, active) VALUES
('t0000001-0000-0000-0000-000000000001', 'Segnali di pericolo', 'Segnali che indicano situazioni di pericolo sulla strada', '⚠️', 1, TRUE),
('t0000002-0000-0000-0000-000000000002', 'Segnali di divieto', 'Segnali che indicano divieti e limitazioni', '🚫', 2, TRUE),
('t0000003-0000-0000-0000-000000000003', 'Segnali di obbligo', 'Segnali che indicano obblighi per i conducenti', '➡️', 3, TRUE),
('t0000004-0000-0000-0000-000000000004', 'Segnali di precedenza', 'Regole e segnali relativi alla precedenza', '🔺', 4, TRUE),
('t0000005-0000-0000-0000-000000000005', 'Limiti di velocità', 'Norme sulla velocità e relativi segnali', '🏎️', 5, TRUE),
('t0000006-0000-0000-0000-000000000006', 'Distanza di sicurezza', 'Regole sulla distanza di sicurezza tra veicoli', '📏', 6, TRUE),
('t0000007-0000-0000-0000-000000000007', 'Sorpasso', 'Regole e divieti relativi al sorpasso', '🚗', 7, TRUE),
('t0000008-0000-0000-0000-000000000008', 'Precedenza agli incroci', 'Regole di precedenza nelle intersezioni', '🔀', 8, TRUE),
('t0000009-0000-0000-0000-000000000009', 'Uso delle luci', 'Norme sull''uso dei dispositivi di illuminazione', '💡', 9, TRUE),
('t0000010-0000-0000-0000-000000000010', 'Stato del conducente', 'Norme su alcol, droghe e stato psicofisico', '🧑‍⚕️', 10, TRUE);

-- ==========================================
-- QUIZ QUESTIONS (Sample - 20 questions)
-- ==========================================

INSERT INTO quiz_questions (id, topic_id, question_text, answers, correct_answer_index, explanation, difficulty, active) VALUES
-- Segnali di pericolo
('q0000001-0000-0000-0000-000000000001', 't0000001-0000-0000-0000-000000000001',
 'Il segnale triangolare con bordo rosso indica:',
 '[{"text": "Pericolo"}, {"text": "Divieto"}, {"text": "Precedenza"}]',
 0, 'I segnali triangolari con bordo rosso e sfondo bianco indicano sempre pericolo.', 1, TRUE),

('q0000002-0000-0000-0000-000000000002', 't0000001-0000-0000-0000-000000000001',
 'Il segnale di pericolo deve essere posto:',
 '[{"text": "Dopo il pericolo"}, {"text": "Prima del pericolo"}, {"text": "Sul luogo del pericolo"}]',
 1, 'I segnali di pericolo sono sempre posizionati prima del pericolo per dare tempo al conducente di reagire.', 1, TRUE),

-- Segnali di divieto
('q0000003-0000-0000-0000-000000000003', 't0000002-0000-0000-0000-000000000002',
 'Il segnale circolare con bordo rosso indica:',
 '[{"text": "Obbligo"}, {"text": "Divieto"}, {"text": "Indicazione"}]',
 1, 'I segnali circolari con bordo rosso indicano divieti.', 1, TRUE),

('q0000004-0000-0000-0000-000000000004', 't0000002-0000-0000-0000-000000000002',
 'Il segnale di divieto di sosta vale:',
 '[{"text": "Solo di giorno"}, {"text": "24 ore su 24"}, {"text": "Solo nelle ore di punta"}]',
 1, 'Salvo diversa indicazione, il divieto di sosta vale 24 ore su 24.', 2, TRUE),

-- Segnali di obbligo
('q0000005-0000-0000-0000-000000000005', 't0000003-0000-0000-0000-000000000003',
 'I segnali di obbligo sono di forma:',
 '[{"text": "Triangolare"}, {"text": "Quadrata"}, {"text": "Circolare"}]',
 2, 'I segnali di obbligo hanno forma circolare con sfondo blu.', 1, TRUE),

-- Segnali di precedenza
('q0000006-0000-0000-0000-000000000006', 't0000004-0000-0000-0000-000000000004',
 'Il segnale STOP obbliga a:',
 '[{"text": "Rallentare"}, {"text": "Fermarsi e dare precedenza"}, {"text": "Procedere con cautela"}]',
 1, 'Il segnale STOP obbliga a fermarsi completamente e dare precedenza.', 1, TRUE),

('q0000007-0000-0000-0000-000000000007', 't0000004-0000-0000-0000-000000000004',
 'Il segnale di dare precedenza ha forma:',
 '[{"text": "Circolare"}, {"text": "Triangolare con vertice in basso"}, {"text": "Quadrata"}]',
 1, 'Il segnale di dare precedenza è un triangolo con il vertice rivolto verso il basso.', 1, TRUE),

-- Limiti di velocità
('q0000008-0000-0000-0000-000000000008', 't0000005-0000-0000-0000-000000000005',
 'Il limite massimo in autostrada per le autovetture è:',
 '[{"text": "110 km/h"}, {"text": "130 km/h"}, {"text": "150 km/h"}]',
 1, 'Il limite massimo in autostrada per le autovetture è 130 km/h.', 1, TRUE),

('q0000009-0000-0000-0000-000000000009', 't0000005-0000-0000-0000-000000000005',
 'Il limite massimo nei centri abitati è:',
 '[{"text": "30 km/h"}, {"text": "50 km/h"}, {"text": "70 km/h"}]',
 1, 'Il limite massimo nei centri abitati è 50 km/h, salvo diversa indicazione.', 1, TRUE),

('q0000010-0000-0000-0000-000000000010', 't0000005-0000-0000-0000-000000000005',
 'Con nebbia fitta il limite di velocità è:',
 '[{"text": "30 km/h"}, {"text": "50 km/h"}, {"text": "Non superiore alla visibilità"}]',
 2, 'Con nebbia fitta la velocità non deve superare la distanza di visibilità.', 2, TRUE),

-- Distanza di sicurezza
('q0000011-0000-0000-0000-000000000011', 't0000006-0000-0000-0000-000000000006',
 'La distanza di sicurezza dipende:',
 '[{"text": "Solo dalla velocità"}, {"text": "Dalla velocità e dalle condizioni della strada"}, {"text": "Solo dal tipo di veicolo"}]',
 1, 'La distanza di sicurezza dipende dalla velocità, dalle condizioni della strada, del traffico e del veicolo.', 2, TRUE),

('q0000012-0000-0000-0000-000000000012', 't0000006-0000-0000-0000-000000000006',
 'La distanza di sicurezza deve essere maggiore:',
 '[{"text": "Con strada asciutta"}, {"text": "Con strada bagnata"}, {"text": "È sempre uguale"}]',
 1, 'Con strada bagnata lo spazio di frenata aumenta, quindi serve maggiore distanza.', 1, TRUE),

-- Sorpasso
('q0000013-0000-0000-0000-000000000013', 't0000007-0000-0000-0000-000000000007',
 'Il sorpasso si effettua normalmente:',
 '[{"text": "A destra"}, {"text": "A sinistra"}, {"text": "Indifferentemente"}]',
 1, 'In Italia il sorpasso si effettua normalmente a sinistra.', 1, TRUE),

('q0000014-0000-0000-0000-000000000014', 't0000007-0000-0000-0000-000000000007',
 'È vietato il sorpasso in prossimità di:',
 '[{"text": "Discese"}, {"text": "Curve e dossi"}, {"text": "Rettifili"}]',
 1, 'È vietato sorpassare in curva e sui dossi per mancanza di visibilità.', 1, TRUE),

-- Precedenza agli incroci
('q0000015-0000-0000-0000-000000000015', 't0000008-0000-0000-0000-000000000008',
 'Agli incroci senza segnaletica vale:',
 '[{"text": "Chi arriva prima passa"}, {"text": "La precedenza a destra"}, {"text": "La precedenza a sinistra"}]',
 1, 'Senza segnaletica, vale la regola della precedenza a destra.', 1, TRUE),

('q0000016-0000-0000-0000-000000000016', 't0000008-0000-0000-0000-000000000008',
 'Il tram ha sempre precedenza:',
 '[{"text": "Vero"}, {"text": "Falso"}, {"text": "Solo sui binari"}]',
 0, 'Il tram, come mezzo su rotaia, ha sempre precedenza.', 2, TRUE),

-- Uso delle luci
('q0000017-0000-0000-0000-000000000017', 't0000009-0000-0000-0000-000000000009',
 'Le luci di posizione devono essere accese:',
 '[{"text": "Solo di notte"}, {"text": "Da mezz''ora dopo il tramonto a mezz''ora prima dell''alba"}, {"text": "Solo in galleria"}]',
 1, 'Le luci di posizione sono obbligatorie da mezz''ora dopo il tramonto a mezz''ora prima dell''alba.', 2, TRUE),

('q0000018-0000-0000-0000-000000000018', 't0000009-0000-0000-0000-000000000009',
 'Gli abbaglianti vanno spenti in caso di:',
 '[{"text": "Pioggia"}, {"text": "Incrocio con altri veicoli"}, {"text": "Entrambe le risposte"}]',
 2, 'Gli abbaglianti vanno spenti sia in caso di incrocio che con pioggia, nebbia o neve.', 2, TRUE),

-- Stato del conducente
('q0000019-0000-0000-0000-000000000019', 't0000010-0000-0000-0000-000000000010',
 'Il limite di tasso alcolemico per i neopatentati è:',
 '[{"text": "0,5 g/l"}, {"text": "0 g/l"}, {"text": "0,2 g/l"}]',
 1, 'Per i neopatentati (primi 3 anni) il limite è 0 g/l.', 1, TRUE),

('q0000020-0000-0000-0000-000000000020', 't0000010-0000-0000-0000-000000000010',
 'La stanchezza influisce sulla guida:',
 '[{"text": "Mai"}, {"text": "Solo nei viaggi lunghi"}, {"text": "Sempre, riducendo i riflessi"}]',
 2, 'La stanchezza influisce sempre sulla guida, riducendo attenzione e riflessi.', 1, TRUE);

-- ==========================================
-- Note: Demo users will be created via Supabase Auth
-- Use these credentials for testing:
-- Admin: admin@demo.it / Demo123!
-- Istruttore: istruttore@demo.it / Demo123!
-- Studente: studente@demo.it / Demo123!
-- ==========================================
