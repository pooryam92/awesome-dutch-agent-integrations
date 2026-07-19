# AI Integratie NL

> Dutch AI Agent Integrations Directory

A curated directory of **Dutch agent-integrations** — MCP servers, skills, plugins, and scripts that let an AI assistant use Dutch services.

Each listing shows, at a glance, whether it is official, commercial, or community, and how mature it is.

To add an integration, see [CONTRIBUTING.md](CONTRIBUTING.md). Only ever edit the JSON in `/data` — the catalogue below is generated from it by `scripts/generate.mjs`.

<!-- BEGIN CATALOGUE — generated from /data by scripts/generate.mjs. Do not edit between these markers; run `npm run generate`. -->

_Every listing is tagged with its type and origin; a status badge appears only when it is **not** live (beta, preview, concept, abandoned)._

## Accounting Finance

| Name | Description | Service | Tags&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |
|---|---|---|---|
| [Adyen MCP](https://github.com/Adyen/adyen-mcp) | Create payments and manage merchant configuration and account setup across Adyen's Checkout and Management APIs. | Adyen | ![MCP · Official · Preview](assets/badges/tags-mcp-official-preview.svg) |
| [bunq Partner MCP](https://github.com/bunq/partner-mcp) | Automate bunq banking through the Partner API — onboarding, KYC, accounts, payments, cards, and compliance. | bunq | ![MCP · Official](assets/badges/tags-mcp-official.svg) |
| [e-Boekhouden MCP](https://github.com/CodeMill-Solutions/e-boekhouden-mcp) | Read and write e-Boekhouden administration using your own API credentials. | e-Boekhouden | ![MCP · Community](assets/badges/tags-mcp-community.svg) |
| [exactmcp.nl](https://exactmcp.nl/) | Run Exact Online warehouse, serial/batch, purchase, production, and inventory workflows through a certified hosted MCP. | Exact Online | ![MCP · Commercial](assets/badges/tags-mcp-commercial.svg) |
| [Ledger Botje](https://ledgerbotje.nl/) | Handle Exact Online invoices, orders, inventory, and deliveries through a hosted MCP. | Exact Online | ![MCP · Commercial](assets/badges/tags-mcp-commercial.svg) |
| [Mollie MCP](https://docs.mollie.com/docs/mollie-mcp-server) | Manage the full Mollie stack — payments, customers, invoices, subscriptions, balances, settlements, terminals, and webhooks. | Mollie | ![MCP · Official](assets/badges/tags-mcp-official.svg) |
| [Moneybird MCP](https://developer.moneybird.com/tools/mcp) | Keep Moneybird bookkeeping up to date — invoices, contacts, and ledger data. | Moneybird | ![MCP · Official](assets/badges/tags-mcp-official.svg) |
| [netherlands-invoice-mcp](https://github.com/netherlands-invoice-mcp/netherlands-invoice-mcp) | Integration for sending Dutch B2B electronic invoices (e-factuur) over the Peppol network. | Peppol | ![MCP · Community](assets/badges/tags-mcp-community.svg) |
| [Nmbrs AI Connector](https://www.nmbrs.com/ai-connector) | Run Dutch payroll actions in Nmbrs, with every write gated behind explicit confirmation. | Nmbrs | ![MCP · Official · Beta](assets/badges/tags-mcp-official-beta.svg) |
| [Praat met je Boekhouding](https://praatmetjeboekhouding.nl/en/exact-online-mcp-server) | Query Exact Online bookkeeping across 86 tools — invoicing, BTW/ICP, and reporting — read-only by default. | Exact Online | ![MCP · Commercial](assets/badges/tags-mcp-commercial.svg) |
| [Simplicate MCP](https://developer.simplicate.com/docs/mcp/getting_started/) | Work with Simplicate project, CRM, and invoicing data through a per-domain hosted endpoint. | Simplicate | ![MCP · Official](assets/badges/tags-mcp-official.svg) |
| [Twinfield MCP](https://github.com/CodeMill-Solutions/twinfield-mcp) | Query and update Twinfield bookkeeping over its SOAP API. | Twinfield | ![MCP · Community](assets/badges/tags-mcp-community.svg) |
| [WeFact MCP](https://github.com/NickAldewereld/wefact-mcp) | Manage WeFact debtors, invoices, products, and subscriptions. | WeFact | ![MCP · Community](assets/badges/tags-mcp-community.svg) |
| [Yuki MCP](https://github.com/Dytto-ai/yuki-mcp) | Operate Yuki accounting across 102 actions, with write operations gated for safety. | Yuki | ![MCP · Community](assets/badges/tags-mcp-community.svg) |

## Consumer Daily Life

| Name | Description | Service | Tags&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |
|---|---|---|---|
| [ah-mcp](https://github.com/mrserzhan/ah-mcp) | Browse Albert Heijn products and Bonus deals, and manage your cart, orders, lists, and receipts. | Albert Heijn | ![MCP · Community](assets/badges/tags-mcp-community.svg) |
| [buienradar-mcp-server](https://github.com/wpnbos/buienradar-mcp-server) | Pull Buienradar rain nowcasts and current Dutch weather readings. | Buienradar | ![MCP · Community](assets/badges/tags-mcp-community.svg) |
| [mcp-picnic](https://github.com/ivo-toby/mcp-picnic) | Shop Picnic groceries — search products and manage the cart, orders, and deliveries. | Picnic | ![MCP · Community](assets/badges/tags-mcp-community.svg) |
| [nl-supermarkt-mcp](https://github.com/Samvox1/nl-supermarkt-mcp) | Search products, compare prices, and plan groceries across Dutch supermarkets and drugstores. | Albert Heijn / Jumbo | ![MCP · Community](assets/badges/tags-mcp-community.svg) |

## Ecommerce Logistics

| Name | Description | Service | Tags&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |
|---|---|---|---|
| [bol-mcp](https://github.com/BartWaardenburg/bol-mcp) | Reach bol.com's Retailer API through 76 tools spanning orders, offers, and product listings. | bol.com | ![MCP · Community](assets/badges/tags-mcp-community.svg) |
| [marktplaats-mcp](https://github.com/PonClick/marktplaats-mcp) | Search and read listings from Marktplaats.nl. | Marktplaats | ![MCP · Community](assets/badges/tags-mcp-community.svg) |
| [mcp-dutch-postal-codes](https://github.com/dstotijn/mcp-dutch-postal-codes) | Retrieve Dutch postal codes and validate address information. | Postcode.eu | ![MCP · Community](assets/badges/tags-mcp-community.svg) |
| [postcode-eu-ai-tools](https://github.com/postcode-nl/postcode-eu-ai-tools-python) | Validate and autocomplete Dutch addresses through the official Postcode.eu API. | Postcode.eu | ![MCP · Official](assets/badges/tags-mcp-official.svg) |
| [PostNL MCP](https://github.com/BartWaardenburg/postnl-mcp) | Create shipments and track PostNL parcels, barcodes, and pickup-point locations. | PostNL | ![MCP · Community](assets/badges/tags-mcp-community.svg) |

## Government Public Data

| Name | Description | Service | Tags&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |
|---|---|---|---|
| [cbs-mcp](https://github.com/bewijs/cbs-mcp) | Makes official Dutch statistics from CBS (StatLine) accessible for AI assistants. | CBS StatLine | ![MCP · Community](assets/badges/tags-mcp-community.svg) |
| [knmi-mcp](https://github.com/wolkwork/knmi-mcp) | Pull KNMI weather observations and forecasts for Dutch locations. | KNMI | ![MCP · Community](assets/badges/tags-mcp-community.svg) |
| [knmi-mcp (dstotijn)](https://github.com/dstotijn/knmi-mcp) | Query KNMI weather observations and forecasts through KNMI's open data API. | KNMI | ![MCP · Community](assets/badges/tags-mcp-community.svg) |
| [kvk-connect (MinBZK)](https://github.com/MinBZK/kvk-connect) | Query a ministry-run mirror of KVK company profiles, history, and search data. | KVK | ![MCP · Official](assets/badges/tags-mcp-official.svg) |
| [kvk-mcp](https://github.com/BartWaardenburg/kvk-mcp) | Query the KVK Handelsregister for Dutch company profiles and search, across 10 tools. | KVK | ![MCP · Community](assets/badges/tags-mcp-community.svg) |
| [mcp-overheid-nl](https://github.com/pipeworx-io/mcp-overheid-nl) | Browse the data.overheid.nl open-data catalogue by publishing organisation and dataset theme. | data.overheid.nl | ![MCP · Community](assets/badges/tags-mcp-community.svg) |
| [NeRDS (MinBZK)](https://github.com/MinBZK/NeRDS) | Fourteen Agent Skills covering Dutch government guidelines — accessibility, privacy, security, procurement, algorithms, and sustainability. | Rijksoverheid | ![Plugin · Official](assets/badges/tags-plugin-official.svg) |
| [nl-gov-mcp](https://github.com/WAINUTAI/nl-gov-mcp) | Reach 39 Dutch government data sources through one server — CBS, RDW, KNMI, PDOK, Rechtspraak, DUO, and more. | CBS StatLine / RDW / KNMI / Rechtspraak.nl | ![MCP · Community](assets/badges/tags-mcp-community.svg) |
| [oorlogsbronnen-mcp](https://github.com/r-huijts/oorlogsbronnen-mcp) | Search Oorlogsbronnen's archive of 12 million Dutch WWII sources. | Oorlogsbronnen | ![MCP · Community](assets/badges/tags-mcp-community.svg) |
| [openarchieven-mcp](https://github.com/coret/openarchieven-mcp-server) | Search Open Archieven genealogy records through a no-auth hosted endpoint. | Open Archieven | ![MCP · Official](assets/badges/tags-mcp-official.svg) |
| [OpenTK MCP](https://github.com/r-huijts/opentk-mcp) | Query Tweede Kamer (Dutch parliament) debates, motions, and documents. | Tweede Kamer | ![MCP · Community](assets/badges/tags-mcp-community.svg) |
| [overheid-claude-plugins](https://github.com/djimit/overheid-claude-plugins) | Fifty-plus skills spanning Dutch government architecture and standards — NORA, GEMMA Common Ground, ZGW APIs, AVG/DPIA, the Omgevingswet (DSO), and municipal, provincial, and water-board IV. | Rijksoverheid | ![Plugin · Community](assets/badges/tags-plugin-community.svg) |
| [rdw-mcp](https://github.com/rantuma/rdw-mcp) | Query RDW vehicle-registration and open data — keyless, no credentials needed. | RDW | ![MCP · Community](assets/badges/tags-mcp-community.svg) |
| [Rijksmuseum MCP](https://github.com/r-huijts/rijksmuseum-mcp) | Search and browse the Rijksmuseum's art collection by artist, work, and theme. | Rijksmuseum | ![MCP · Community](assets/badges/tags-mcp-community.svg) |
| [skills-developer-overheid-nl](https://github.com/developer-overheid-nl/skills-developer-overheid-nl) | Eight skills applying Dutch government developer guidance — APIs, DigiD/eHerkenning, open source, FSC/Haven, data, and NL Design System. | Logius | ![Plugin · Official](assets/badges/tags-plugin-official.svg) |
| [skills-geo](https://github.com/developer-overheid-nl/skills-geo) | Skills for Geonovum geo-standards — OGC API, NEN 3610, INSPIRE, and 3D geo-information. | Geonovum | ![Plugin · Official](assets/badges/tags-plugin-official.svg) |
| [skills-internet](https://github.com/developer-overheid-nl/skills-internet) | Skills for internet.nl standards — IPv6, DNSSEC, TLS, DMARC/DKIM/SPF, and DANE. | internet.nl | ![Plugin · Official](assets/badges/tags-plugin-official.svg) |
| [skills-open-source-repo](https://github.com/developer-overheid-nl/skills-open-source-repo) | Skills that generate publiccode.yml and repository-governance docs for Dutch government open-source projects. | Rijksoverheid | ![Plugin · Official](assets/badges/tags-plugin-official.svg) |
| [skills-standaarden](https://github.com/developer-overheid-nl/skills-standaarden) | Ten skills for Logius standards — API Design Rules, Digikoppeling, OAuth NL, and FSC — with Spectral and WCAG validation. | Logius | ![Plugin · Official · Concept](assets/badges/tags-plugin-official-concept.svg) |
| [zad-actions](https://github.com/RijksICTGilde/zad-actions) | Five skills for the ZAD platform covering Dutch-government deployment, release, and workflow tasks. | Rijksoverheid | ![Plugin · Official](assets/badges/tags-plugin-official.svg) |

## Housing Property

| Name | Description | Service | Tags&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |
|---|---|---|---|
| [kadaster-mcp](https://github.com/jolietjakeblues/kadaster-mcp) | Query the Kadaster Knowledge Graph of Dutch land-registry and parcel data. | Kadaster | ![MCP · Community](assets/badges/tags-mcp-community.svg) |
| [makelaar-mcp](https://github.com/spyrosavl/makelaar-mcp) | Search Funda listings and run NHG, NIBUD, mortgage, and closing-cost calculations. | Funda | ![MCP · Community](assets/badges/tags-mcp-community.svg) |
| [mcp-monumenten](https://github.com/woonstadrotterdam/mcp-monumenten) | Look up a Dutch building's monument status from BAG, RCE, and municipal records. | Monumenten | ![MCP · Community](assets/badges/tags-mcp-community.svg) |

## Legal Compliance

| Name | Description | Service | Tags&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |
|---|---|---|---|
| [aangifte-ib-skill](https://github.com/mischacoster/aangifte-ib-skill) | A skill that prepares a sourced Dutch personal income-tax return with an adaptive interview and review dossier. | Belastingdienst | ![Skill · Community](assets/badges/tags-skill-community.svg) |
| [Ansvar Gateway (Dutch law)](https://ansvar.eu/docs/quickstart) | Search Dutch legislation and Rechtspraak rulings through Ansvar's hosted OAuth gateway, every result citing its source (also spans EU and other jurisdictions). | wetten.overheid.nl / Rechtspraak.nl | ![MCP · Commercial](assets/badges/tags-mcp-commercial.svg) |
| [Belastingzaken skills](https://github.com/johnhout/knowledge-work-belastingzaken) | Eight commands and eight skills for Dutch income tax, BTW, VPB, payroll tax, deductions, and objections — no filing, professional review required. | Belastingdienst | ![Plugin · Community](assets/badges/tags-plugin-community.svg) |
| [dutch-energy-regulation-mcp](https://github.com/Ansvar-Systems/dutch-energy-regulation-mcp) | Search Dutch energy-regulation records from ACM, TenneT, RVO, and SodM. | Energieregulering (ACM/TenneT/RVO/SodM) | ![MCP · Commercial](assets/badges/tags-mcp-commercial.svg) |
| [FALCON / nl-ai-lawyer](https://github.com/FutureAtoms/FALCON-futureatoms-legal-counsel-of-netherlands) | Advise on Dutch law — employment/CAO, AVG, tax, real estate, and immigration — through 14 skills and 7 specialist agents. | wetten.overheid.nl / Rechtspraak.nl | ![Plugin · Community](assets/badges/tags-plugin-community.svg) |
| [ICTRecht skill](https://www.ictrecht.nl/ictrecht-skill-voor-claude) | A Dutch IT-law firm's methodology as a skill — privacy-officer, compliance, and IE-recht role profiles with DPIA and AI Act assessment structures. | wetten.overheid.nl | ![Skill · Commercial](assets/badges/tags-skill-commercial.svg) |
| [nl-eli-mcp](https://github.com/matematicsolutions/nl-eli-mcp) | Retrieve versioned Dutch legislation (BWB) and Rechtspraak rulings, keyless. | wetten.overheid.nl / Rechtspraak.nl | ![MCP · Community](assets/badges/tags-mcp-community.svg) |
| [rechtspraak-mcp](https://github.com/Prudai/rechtspraak-mcp) | Search Rechtspraak open data and resolve legal citations through LiDO, across six tools. | Rechtspraak.nl | ![MCP · Community](assets/badges/tags-mcp-community.svg) |
| [rechtspraak-solr-mcp-server](https://github.com/axyr/rechtspraak-solr-mcp-server) | Full-text search Dutch case law in Solr, with query expansion, legal synonyms, and citation analysis. | Rechtspraak.nl | ![MCP · Community](assets/badges/tags-mcp-community.svg) |

## Mobility Travel

| Name | Description | Service | Tags&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |
|---|---|---|---|
| [anwb-mcp](https://github.com/BartWaardenburg/anwb-mcp) | Pull ANWB traffic incidents, plan routes with turn-by-turn directions, and search locations. | ANWB | ![MCP · Community](assets/badges/tags-mcp-community.svg) |
| [NS MCP Server](https://github.com/r-huijts/ns-mcp-server) | Look up NS train departures and disruptions and plan train journeys. | NS (Nederlandse Spoorwegen) | ![MCP · Community](assets/badges/tags-mcp-community.svg) |
| [ns-travel-mcp](https://github.com/lauragift21/ns-travel-mcp) | Plan NS journeys and check live departures, disruptions, and station details. | NS (Nederlandse Spoorwegen) | ![MCP · Community](assets/badges/tags-mcp-community.svg) |

## Work HR

| Name | Description | Service | Tags&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |
|---|---|---|---|
| [Intelligence Group Giant MCP](https://intelligence-group.nl/nl/solutions/mcp/) | Analyse European (incl. Dutch) salary and recruitment-market data, read-only with per-user access control. | Intelligence Group | ![MCP · Commercial](assets/badges/tags-mcp-commercial.svg) |

---

_Curated — 59 listing(s) across 8 categories._

<!-- END CATALOGUE -->
