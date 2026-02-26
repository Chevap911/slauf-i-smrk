"use client"

import type React from "react"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Check,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  Info,
  Percent,
  LightbulbIcon,
  Car,
  Droplets,
  Home,
  Building,
  Ruler,
  Trash2,
  Zap,
  PocketIcon as Pool,
  Trees,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Textarea } from "@/components/ui/textarea"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { cn } from "@/lib/utils"
import Confetti from "react-confetti"
import { useWindowSize } from "react-use"

// Window sizes in square meters
const WINDOW_SIZES = {
  small: 1.2, // approx 1m x 1.2m
  double: 2.4, // approx 2m x 1.2m
}

// Dodajemo konstantu za visinu kata
const FLOOR_HEIGHT = 3 // 3 metra po katu

// Konstante za cijene
const PRICE_FACTORS = {
  facadeCondition: {
    1: 6, // Jako loše stanje - 6€ po m²
    2: 5.5, // 5.5€ po m²
    3: 5, // Srednja - 5€ po m²
    4: 4.5, // 4.5€ po m²
    5: 4, // Održavanje - 4€ po m²
  },
  yardCondition: {
    1: 3, // Jako loše stanje - 3€ po m²
    2: 2.75, // 2.75€ po m²
    3: 2.5, // 2.5€ po m²
    4: 2.25, // 2.25€ po m²
    5: 2, // Odlično stanje - 2€ po m²
  },
  poolSize: {
    small: 400, // Mali bazen - 400€
    medium: 600, // Srednji bazen - 600€
    large: 800, // Veliki bazen - 800€
  },
  poolType: {
    standard: 1, // Standardni bazen - osnovni faktor
    saltwater: 1.2, // Slani bazen - 20% više
    infinity: 1.3, // Infinity bazen - 30% više
  },
  discount: {
    firstTime: 0.15, // 15% popust za prvo čišćenje
  },
  carWash: 25, // 25€ za vanjsko pranje automobila
}

// Zanimljive činjenice o čišćenju fasada
const FUN_FACTS = [
  "Jeste li znali da visokotlačno čišćenje može uštedjeti do 80% vode u usporedbi s tradicionalnim metodama čišćenja?",
  "Redovito čišćenje fasade može produžiti njen životni vijek za 10-15 godina!",
  "Alge i plijesan na fasadi mogu smanjiti energetsku učinkovitost vašeg doma za čak 30%.",
  "Čišćenje fasade može povećati vrijednost nekretnine za 5-10%.",
  "Visokotlačno čišćenje može ukloniti i do 99.9% bakterija i plijesni s površina.",
  "Prosječna kuća u Hrvatskoj ima oko 150-200 m² fasadne površine.",
  "Čista fasada može smanjiti troškove grijanja i hlađenja za 15-20%.",
  "Profesionalno čišćenje fasade traje u prosjeku 1-2 dana za prosječnu obiteljsku kuću.",
  "Visokotlačni perači mogu proizvesti pritisak od 100 do 200 bara, što je dovoljno za uklanjanje i najtvrđe prljavštine.",
  "Impregnacija fasade nakon čišćenja može pružiti zaštitu od prljavštine i do 5 godina.",
  "Redovito čišćenje bazena sprječava razvoj algi i bakterija koje mogu biti štetne za zdravlje.",
  "Čišćenje okućnice može značajno smanjiti broj insekata i štetočina oko vašeg doma.",
  "Profesionalno održavanje bazena može produžiti životni vijek opreme za filtriranje do 50%.",
  "Uređena okućnica može povećati vrijednost nekretnine za 5-10%.",
  "Čišćenje bazena trebalo bi se obavljati barem jednom tjedno tijekom sezone kupanja.",
]

// Tipovi usluga
const SERVICE_TYPES = [
  {
    id: "facade",
    name: "Čišćenje fasade",
    description: "Profesionalno čišćenje i održavanje fasade vašeg objekta",
    icon: Building,
  },
  {
    id: "pool",
    name: "Pranje bazena",
    description: "Temeljito čišćenje i održavanje bazena",
    icon: Pool,
  },
  {
    id: "yard",
    name: "Čišćenje okućnice",
    description: "Uređenje i čišćenje vanjskog prostora",
    icon: Trees,
  },
  {
    id: "complete",
    name: "Kompletna usluga",
    description: "Kombinacija svih usluga za potpuno čišćenje",
    icon: Sparkles,
  },
]

// 3D Button komponenta
const Button3D = ({ children, onClick, className, type = "button", disabled = false }) => (
  <motion.button
    whileHover={{ scale: 1.05, translateY: -5 }}
    whileTap={{ scale: 0.95, translateY: 0 }}
    onClick={onClick}
    className={cn(
      "relative rounded-xl overflow-hidden group",
      "bg-gradient-to-br from-blue-500 to-blue-600",
      "text-white font-bold py-3 px-6",
      "shadow-[0_8px_0_rgb(30,64,175)]",
      "active:shadow-[0_4px_0_rgb(30,64,175)]",
      "active:translate-y-[4px]",
      "transition-all duration-150",
      "disabled:opacity-70 disabled:cursor-not-allowed",
      className,
    )}
    type={type}
    disabled={disabled}
  >
    <span className="absolute inset-0 w-full h-full bg-white/30 group-hover:bg-white/10 transition-all duration-300"></span>
    <span className="relative flex items-center justify-center gap-2">{children}</span>
  </motion.button>
)

// 3D Card komponenta
const Card3D = ({ children, className }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className={cn(
      "relative rounded-xl overflow-hidden",
      "bg-white border-2 border-blue-100",
      "shadow-[0_10px_20px_rgba(0,0,0,0.1)]",
      "transform-gpu",
      className,
    )}
  >
    {children}
  </motion.div>
)

// Animirana ikona za vodu
const WaterDropAnimation = () => (
  <motion.div
    initial={{ y: -10, opacity: 0 }}
    animate={{
      y: [0, 10, 0],
      opacity: [0.7, 1, 0.7],
    }}
    transition={{
      duration: 2,
      repeat: Number.POSITIVE_INFINITY,
      repeatType: "reverse",
    }}
    className="absolute -top-4 -right-4 text-blue-500 transform rotate-12"
  >
    <Droplets size={32} />
  </motion.div>
)

// Animirana ikona za kuću
const HouseAnimation = () => (
  <motion.div
    initial={{ scale: 0.9 }}
    animate={{
      scale: [0.9, 1.1, 0.9],
      rotate: [0, 5, 0, -5, 0],
    }}
    transition={{
      duration: 5,
      repeat: Number.POSITIVE_INFINITY,
      repeatType: "reverse",
    }}
    className="absolute -top-6 -left-6 text-blue-600"
  >
    <Home size={48} />
  </motion.div>
)

export default function CleaningServiceForm() {
  const [step, setStep] = useState(1)
  const [progress, setProgress] = useState(0)
  const [selectedService, setSelectedService] = useState<string | null>("facade") // Default na fasadu
  const [adjustedArea, setAdjustedArea] = useState<string>("")
  const [totalFacadeArea, setTotalFacadeArea] = useState<number>(0)
  const [estimatedPrice, setEstimatedPrice] = useState<{
    min: number
    max: number
    yardPrice?: number
    poolPrice?: number
    carWashPrice?: number
  } | null>(null)
  const [discountApplied, setDiscountApplied] = useState<boolean>(true) // Automatski primjenjujemo popust za prvo čišćenje
  const [randomFact, setRandomFact] = useState<string>("")
  const [showConfetti, setShowConfetti] = useState(false)
  const { width, height } = useWindowSize()
  const [hasPool, setHasPool] = useState<boolean>(true)
  const [formData, setFormData] = useState({
    // Contact info
    email: "",
    address: "",
    name: "",
    phone: "",
    city: "",
    postalCode: "",
    message: "",

    // Facade cleaning
    floors: 0,
    windowsSmall: 0,
    windowsDouble: 0,
    balconyType: "",
    balconyCount: 0,
    buildingWidth: "",
    buildingLength: "",
    facadeCondition: 3,
    facadeSides: 4, // Dodaj ovo novo polje - default sve 4 strane

    // Yard cleaning
    yardSquareMeters: "",
    yardCondition: 3,
    hasPlants: false,
    hasTrees: false,

    // Pool cleaning
    poolSize: "medium", // small, medium, large
    poolType: "standard", // standard, saltwater, infinity
    poolLastCleaned: "", // date

    // Additional services
    cleanYard: false,
    carWash: false,
  })

  // Dohvati nasumičnu zanimljivu činjenicu
  useEffect(() => {
    setRandomFact(FUN_FACTS[Math.floor(Math.random() * FUN_FACTS.length)])
  }, [step])

  // Funkcija za izračun ukupne površine fasade uključujući visinu
  const calculateFacadeTotalArea = useCallback(() => {
    // Izračunaj visinu objekta na temelju broja katova (prizemlje + katovi)
    const buildingHeight = (formData.floors + 1) * FLOOR_HEIGHT

    if (formData.buildingWidth && formData.buildingLength) {
      // Izračunaj površinu svake strane
      const width = Number(formData.buildingWidth)
      const length = Number(formData.buildingLength)

      // Izračunaj površinu ovisno o broju odabranih strana
      let totalFacadeArea = 0

      if (formData.facadeSides >= 1) {
        totalFacadeArea += width * buildingHeight // prednja strana
      }
      if (formData.facadeSides >= 2) {
        totalFacadeArea += width * buildingHeight // stražnja strana
      }
      if (formData.facadeSides >= 3) {
        totalFacadeArea += length * buildingHeight // jedna bočna strana
      }
      if (formData.facadeSides >= 4) {
        totalFacadeArea += length * buildingHeight // druga bočna strana
      }

      return totalFacadeArea
    }

    return 0
  }, [formData.floors, formData.buildingWidth, formData.buildingLength, formData.facadeSides])

  // Ažuriraj ukupnu površinu fasade kada se promijene relevantni parametri
  useEffect(() => {
    const facadeArea = calculateFacadeTotalArea()
    setTotalFacadeArea(facadeArea)
  }, [formData.floors, formData.buildingWidth, formData.buildingLength, formData.facadeSides, calculateFacadeTotalArea])

  // Modificirajmo useEffect za adjustedArea da koristi novu logiku
  useEffect(() => {
    if (totalFacadeArea > 0) {
      // Oduzmi površinu prozora
      const totalWindowArea = formData.windowsSmall * WINDOW_SIZES.small + formData.windowsDouble * WINDOW_SIZES.double

      // Dodaj površinu vanjskih balkona ako postoje
      const balconyArea = formData.balconyType === "outer" ? formData.balconyCount * 4 : 0

      // Konačna površina za čišćenje
      const adjusted = Math.max(0, totalFacadeArea - totalWindowArea + balconyArea)

      // Postavi adjustedArea direktno
      setAdjustedArea(adjusted.toFixed(2))
    }
  }, [totalFacadeArea, formData.windowsSmall, formData.windowsDouble, formData.balconyType, formData.balconyCount])

  // Izračunaj procijenjenu cijenu
  useEffect(() => {
    let minPrice = 0
    let maxPrice = 0
    let yardPrice = undefined
    let poolPrice = undefined
    let carWashPrice = undefined

    // Izračun za fasadu
    if ((selectedService === "facade" || selectedService === "complete") && adjustedArea) {
      const area = Number.parseFloat(adjustedArea)

      // Osnovni faktor cijene po m² ovisno o stanju fasade
      const conditionFactor =
        PRICE_FACTORS.facadeCondition[formData.facadeCondition as keyof typeof PRICE_FACTORS.facadeCondition] || 3.5

      // Izračunaj osnovnu cijenu
      const baseMinPrice = area * conditionFactor
      const baseMaxPrice = baseMinPrice * 1.2 // 20% varijacija za maksimalnu cijenu

      // Primijeni popust ako je primjenjivo
      const discountFactor = discountApplied ? 1 - PRICE_FACTORS.discount.firstTime : 1

      // Konačna cijena
      minPrice = Math.round(baseMinPrice * discountFactor)
      maxPrice = Math.round(baseMaxPrice * discountFactor)
    }

    // Izračun za okućnicu
    if (selectedService === "yard" || selectedService === "complete" || formData.cleanYard) {
      if (formData.yardSquareMeters) {
        const yardArea = Number(formData.yardSquareMeters)

        // Cijena po m² ovisno o stanju okućnice
        const yardConditionFactor =
          PRICE_FACTORS.yardCondition[formData.yardCondition as keyof typeof PRICE_FACTORS.yardCondition] || 2

        // Dodatni faktor za biljke i drveće
        let complexityFactor = 1
        if (formData.hasPlants) complexityFactor += 0.1 // +10% za biljke
        if (formData.hasTrees) complexityFactor += 0.15 // +15% za drveće

        const baseYardPrice = Math.round(yardArea * yardConditionFactor * complexityFactor)

        // Primijeni popust ako je primjenjivo
        const discountFactor = discountApplied ? 1 - PRICE_FACTORS.discount.firstTime : 1
        yardPrice = Math.round(baseYardPrice * discountFactor)

        // Ako je samo usluga okućnice, postavi to kao glavnu cijenu
        if (selectedService === "yard") {
          minPrice = yardPrice
          maxPrice = Math.round(yardPrice * 1.2) // 20% varijacija
          yardPrice = undefined // Ne prikazuj dvaput
        }
      }
    }

    // Izračun za bazen
    if (selectedService === "pool" || (selectedService === "complete" && hasPool)) {
      // Osnovna cijena bazena ovisno o veličini
      const basePoolPrice = PRICE_FACTORS.poolSize[formData.poolSize as keyof typeof PRICE_FACTORS.poolSize] || 600

      // Faktor za tip bazena
      const poolTypeFactor = PRICE_FACTORS.poolType[formData.poolType as keyof typeof PRICE_FACTORS.poolType] || 1

      const calculatedPoolPrice = Math.round(basePoolPrice * poolTypeFactor)

      // Primijeni popust ako je primjenjivo
      const discountFactor = discountApplied ? 1 - PRICE_FACTORS.discount.firstTime : 1
      poolPrice = Math.round(calculatedPoolPrice * discountFactor)

      // Ako je samo usluga bazena, postavi to kao glavnu cijenu
      if (selectedService === "pool") {
        minPrice = poolPrice
        maxPrice = poolPrice // Nema varijacije za bazen
        poolPrice = undefined // Ne prikazuj dvaput
      }
    }

    // Cijena za pranje automobila ako je odabrano
    if (formData.carWash) {
      carWashPrice = PRICE_FACTORS.carWash
    }

    setEstimatedPrice({ min: minPrice, max: maxPrice, yardPrice, poolPrice, carWashPrice })
  }, [
    selectedService,
    adjustedArea,
    formData.facadeCondition,
    formData.yardSquareMeters,
    formData.yardCondition,
    formData.hasPlants,
    formData.hasTrees,
    formData.poolSize,
    formData.poolType,
    formData.cleanYard,
    formData.carWash,
    discountApplied,
    hasPool,
  ])

  const updateFormData = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleNext = () => {
    // Provjera obaveznih polja
    if (step === 1 && !formData.email) {
      alert("Email adresa je obavezna!")
      return
    }

    const newStep = step + 1
    setStep(newStep)

    // Update progress based on total steps
    const totalSteps = 3 // Kontakt, dimenzije, pregled
    setProgress(Math.min(100, (newStep / totalSteps) * 100))
  }

  const handleBack = () => {
    const newStep = step - 1
    setStep(newStep)
    setProgress(Math.max(0, (newStep / 3) * 100))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your server
    console.log("Form submitted:", formData)
    // Show success message or redirect
    setStep(4)
    setProgress(100)
    setShowConfetti(true)

    // Sakrij konfete nakon 5 sekundi
    setTimeout(() => {
      setShowConfetti(false)
    }, 5000)
  }

  // Funkcija za dobivanje cijene po m² na temelju stanja fasade
  const getPricePerSquareMeter = (condition: number) => {
    switch (condition) {
      case 1:
      case 2:
        return "5.5-6€"
      case 3:
      case 4:
        return "4-5€"
      case 5:
        return "4€"
      default:
        return "4-5€"
    }
  }

  // Funkcija za dobivanje cijene po m² na temelju stanja okućnice
  const getYardPricePerSquareMeter = (condition: number) => {
    switch (condition) {
      case 1:
      case 2:
        return "3€"
      case 3:
        return "2.5€"
      case 4:
      case 5:
        return "2€"
      default:
        return "2.5€"
    }
  }

  // Komponenta za prikaz zanimljive činjenice
  const FunFactBox = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 rounded-xl p-4 my-6 relative overflow-hidden"
    >
      <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-blue-200 rounded-full opacity-20"></div>
      <div className="absolute right-0 bottom-0 w-16 h-16 bg-yellow-200 rounded-full opacity-30"></div>

      <div className="flex items-start relative z-10">
        <motion.div
          className="mr-3 mt-1 text-yellow-500"
          animate={{
            rotate: [0, 10, 0, -10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        >
          <LightbulbIcon className="h-6 w-6" />
        </motion.div>
        <div>
          <h4 className="font-medium text-blue-700 mb-1">Jeste li znali?</h4>
          <p className="text-sm text-blue-600">{randomFact}</p>
        </div>
      </div>
    </motion.div>
  )

  // Korak 1: Kontakt podaci
  const renderContactInfo = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div className="text-center mb-6">
        <motion.h2
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 mb-2"
        >
          Dobrodošli!
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-blue-600"
        >
          Unesite osnovne podatke za nastavak
        </motion.p>
      </div>

      <div className="space-y-6 relative">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0, -5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
          className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-400 opacity-20 z-0"
        ></motion.div>

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, -5, 0, 5, 0],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
          className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br from-blue-300 to-blue-400 opacity-20 z-0"
        ></motion.div>

        <Card3D className="p-6 relative z-10">
          <HouseAnimation />

          <div className="relative z-10">
            <Label htmlFor="email" className="text-lg font-medium text-blue-700 flex items-center">
              Email <span className="text-red-500 ml-1">*</span>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Info className="h-4 w-4 ml-2 text-blue-500" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Na ovu adresu ćemo poslati ponudu</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="vas@email.com"
              value={formData.email}
              onChange={(e) => updateFormData("email", e.target.value)}
              className="mt-2 h-12 text-lg border-2 border-gray-200 focus:border-yellow-400 rounded-xl"
              required
            />
            <p className="text-xs text-gray-500 mt-1">Obavezno polje</p>
          </div>

          <div className="relative z-10 mt-4">
            <Label htmlFor="address" className="text-lg font-medium text-blue-700">
              Adresa objekta <span className="text-red-500 ml-1">*</span>
            </Label>
            <Input
              id="address"
              placeholder="Ulica i kućni broj"
              value={formData.address}
              onChange={(e) => updateFormData("address", e.target.value)}
              className="mt-2 h-12 text-lg border-2 border-gray-200 focus:border-yellow-400 rounded-xl"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="relative z-10">
              <Label htmlFor="city" className="text-lg font-medium text-blue-700">
                Grad <span className="text-red-500 ml-1">*</span>
              </Label>
              <Input
                id="city"
                placeholder="Grad"
                value={formData.city}
                onChange={(e) => updateFormData("city", e.target.value)}
                className="mt-2 h-12 text-lg border-2 border-gray-200 focus:border-yellow-400 rounded-xl"
                required
              />
            </div>
            <div className="relative z-10">
              <Label htmlFor="phone" className="text-lg font-medium text-blue-700">
                Telefon <span className="text-red-500 ml-1">*</span>
              </Label>
              <Input
                id="phone"
                placeholder="Vaš broj telefona"
                value={formData.phone}
                onChange={(e) => updateFormData("phone", e.target.value)}
                className="mt-2 h-12 text-lg border-2 border-gray-200 focus:border-yellow-400 rounded-xl"
                required
              />
            </div>
          </div>
        </Card3D>

        <Card3D className="p-6 relative z-10 mb-6">
          <motion.div
            className="absolute -top-6 -right-6 text-blue-600"
            animate={{
              rotate: [0, 10, 0, -10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          >
            <Sparkles size={40} />
          </motion.div>

          <Label className="text-lg font-medium text-blue-700 mb-4 block">Odaberite uslugu</Label>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {SERVICE_TYPES.map((service) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.id}
                  whileHover={{ scale: 1.03, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  className={cn(
                    "border-2 rounded-xl p-4 cursor-pointer transition-all",
                    selectedService === service.id
                      ? "border-yellow-400 bg-gradient-to-br from-yellow-50 to-yellow-100 shadow-lg"
                      : "border-gray-200 hover:border-yellow-300 bg-white",
                  )}
                  onClick={() => setSelectedService(service.id)}
                >
                  <div className="flex items-start">
                    <div className="mr-3">
                      <motion.div
                        animate={{
                          rotate: selectedService === service.id ? [0, 10, 0, -10, 0] : 0,
                          scale: selectedService === service.id ? [1, 1.1, 1] : 1,
                        }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          repeatType: "reverse",
                        }}
                        className={cn(
                          "p-2 rounded-full",
                          selectedService === service.id ? "bg-yellow-100 text-blue-600" : "bg-blue-100 text-blue-500",
                        )}
                      >
                        <Icon className="h-5 w-5" />
                      </motion.div>
                    </div>
                    <div>
                      <h3 className="font-medium text-blue-700">{service.name}</h3>
                      <p className="text-xs text-blue-600 mt-1">{service.description}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </Card3D>

        <FunFactBox />

        <Card3D className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-2 border-yellow-300 p-6 relative z-10">
          <WaterDropAnimation />

          <div className="flex items-center mb-2">
            <motion.div
              animate={{
                rotate: [0, 15, 0, -15, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            >
              <Percent className="h-5 w-5 text-yellow-600 mr-2" />
            </motion.div>
            <h3 className="font-medium text-blue-700">Posebna ponuda</h3>
          </div>
          <p className="text-sm text-blue-600">
            <motion.span
              animate={{
                scale: [1, 1.05, 1],
                color: ["#1e40af", "#3b82f6", "#1e40af"],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
              className="font-bold"
            >
              15% popusta
            </motion.span>{" "}
            na prvo čišćenje kada ispunite ovu formu do kraja!
          </p>
        </Card3D>
      </div>

      <div className="flex justify-end mt-8">
        <Button3D onClick={handleNext}>
          Dalje <ChevronRight className="ml-2 h-5 w-5" />
        </Button3D>
      </div>
    </motion.div>
  )

  // Korak 2: Dimenzije objekta
  const renderDimensions = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div className="text-center mb-6">
        <motion.h2
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 mb-2"
        >
          {selectedService === "facade"
            ? "Dimenzije objekta"
            : selectedService === "pool"
              ? "Detalji o bazenu"
              : selectedService === "yard"
                ? "Detalji o okućnici"
                : "Detalji usluge"}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-blue-600"
        >
          {selectedService === "facade"
            ? "Pomozite nam izračunati površinu fasade"
            : selectedService === "pool"
              ? "Unesite informacije o vašem bazenu"
              : selectedService === "yard"
                ? "Opišite vašu okućnicu"
                : "Unesite sve potrebne informacije"}
        </motion.p>
      </div>

      <div className="space-y-8 relative">
        {/* Pitanja za fasadu */}
        {(selectedService === "facade" || selectedService === "complete") && (
          <>
            <Card3D className="p-6 relative z-10">
              <motion.div
                className="absolute -top-6 -right-6 text-blue-600"
                animate={{
                  rotate: [0, 10, 0, -10, 0],
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              >
                <Building size={40} />
              </motion.div>

              <Label className="text-lg font-medium text-blue-700">Dimenzije objekta</Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                <div>
                  <Label htmlFor="buildingWidth" className="text-md font-medium text-blue-700 flex items-center">
                    Širina objekta (m) <span className="text-red-500 ml-1">*</span>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Info className="h-4 w-4 ml-2 text-blue-500" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Širina prednje strane objekta</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Label>
                  <Input
                    id="buildingWidth"
                    type="number"
                    placeholder="npr. 10"
                    value={formData.buildingWidth}
                    onChange={(e) => updateFormData("buildingWidth", e.target.value)}
                    className="mt-2 h-12 text-lg border-2 border-gray-200 focus:border-yellow-400 rounded-xl"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="buildingLength" className="text-md font-medium text-blue-700 flex items-center">
                    Dužina objekta (m) <span className="text-red-500 ml-1">*</span>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Info className="h-4 w-4 ml-2 text-blue-500" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Dužina bočne strane objekta</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Label>
                  <Input
                    id="buildingLength"
                    type="number"
                    placeholder="npr. 15"
                    value={formData.buildingLength}
                    onChange={(e) => updateFormData("buildingLength", e.target.value)}
                    className="mt-2 h-12 text-lg border-2 border-gray-200 focus:border-yellow-400 rounded-xl"
                    required
                  />
                </div>
              </div>
            </Card3D>

            <Card3D className="p-6 relative z-10">
              <motion.div
                className="absolute -top-6 -right-6 text-blue-600"
                animate={{
                  rotate: [0, 10, 0, -10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              >
                <Building size={40} />
              </motion.div>

              <Label className="text-lg font-medium text-blue-700">Koliko strana objekta želite čistiti?</Label>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
                {[1, 2, 3, 4].map((sides) => (
                  <motion.div
                    key={sides}
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className={cn(
                      "border-2 rounded-xl p-4 cursor-pointer transition-all text-center shadow-md",
                      formData.facadeSides === sides
                        ? "border-yellow-400 bg-gradient-to-br from-yellow-50 to-yellow-100 shadow-lg"
                        : "border-gray-200 hover:border-yellow-300 bg-white",
                    )}
                    onClick={() => updateFormData("facadeSides", sides)}
                  >
                    <div className="flex flex-col items-center">
                      <motion.div
                        animate={{
                          rotate: formData.facadeSides === sides ? [0, 10, 0, -10, 0] : 0,
                          scale: formData.facadeSides === sides ? [1, 1.1, 1] : 1,
                        }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          repeatType: "reverse",
                        }}
                        className="w-12 h-12 mb-2 flex items-center justify-center"
                      >
                        <svg viewBox="0 0 24 24" className="w-full h-full">
                          <rect
                            x="2"
                            y="2"
                            width="20"
                            height="20"
                            fill={formData.facadeSides === sides ? "#fef3c7" : "#f3f4f6"}
                            stroke={formData.facadeSides === sides ? "#f59e0b" : "#9ca3af"}
                            strokeWidth="2"
                            rx="2"
                          />
                          {/* Prednja strana - uvijek prikazana */}
                          <rect
                            x="4"
                            y="4"
                            width="16"
                            height="4"
                            fill={sides >= 1 ? "#3b82f6" : "#e5e7eb"}
                            opacity={sides >= 1 ? "1" : "0.3"}
                          />
                          {/* Stražnja strana */}
                          <rect
                            x="4"
                            y="16"
                            width="16"
                            height="4"
                            fill={sides >= 2 ? "#3b82f6" : "#e5e7eb"}
                            opacity={sides >= 2 ? "1" : "0.3"}
                          />
                          {/* Lijeva strana */}
                          <rect
                            x="4"
                            y="8"
                            width="4"
                            height="8"
                            fill={sides >= 3 ? "#3b82f6" : "#e5e7eb"}
                            opacity={sides >= 3 ? "1" : "0.3"}
                          />
                          {/* Desna strana */}
                          <rect
                            x="16"
                            y="8"
                            width="4"
                            height="8"
                            fill={sides >= 4 ? "#3b82f6" : "#e5e7eb"}
                            opacity={sides >= 4 ? "1" : "0.3"}
                          />
                        </svg>
                      </motion.div>
                      <span className="font-medium text-sm">{sides === 1 ? "1 strana" : `${sides} strane`}</span>
                      <span className="text-xs text-gray-500 mt-1">
                        {sides === 1
                          ? "Prednja"
                          : sides === 2
                            ? "Prednja + stražnja"
                            : sides === 3
                              ? "3 strane"
                              : "Sve strane"}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              <p className="text-xs text-gray-500 mt-3">
                Odaberite koliko strana objekta trebate očistiti. Cijena se računa prema odabranom broju strana.
              </p>
            </Card3D>

            <Card3D className="p-6 relative z-10">
              <motion.div
                className="absolute -top-6 -right-6 text-blue-600"
                animate={{
                  rotate: [0, 10, 0, -10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              >
                <Ruler size={40} />
              </motion.div>

              <Label htmlFor="floors" className="text-lg font-medium text-blue-700">
                Broj katova (0 = prizemnica)
              </Label>
              <div className="flex items-center space-x-4 mt-3">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={(e) => {
                    e.preventDefault()
                    updateFormData("floors", Math.max(0, formData.floors - 1))
                  }}
                  className="h-12 w-12 rounded-full bg-blue-100 border-2 border-blue-300 flex items-center justify-center text-xl font-bold text-blue-700 shadow-md"
                >
                  -
                </motion.button>
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    boxShadow: [
                      "0 4px 6px rgba(0, 0, 0, 0.1)",
                      "0 10px 15px rgba(0, 0, 0, 0.2)",
                      "0 4px 6px rgba(0, 0, 0, 0.1)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                  className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-100 to-yellow-300 border-2 border-yellow-400 flex items-center justify-center shadow-lg"
                >
                  <span className="text-2xl font-bold text-blue-700">{formData.floors}</span>
                </motion.div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={(e) => {
                    e.preventDefault()
                    updateFormData("floors", formData.floors + 1)
                  }}
                  className="h-12 w-12 rounded-full bg-blue-100 border-2 border-blue-300 flex items-center justify-center text-xl font-bold text-blue-700 shadow-md"
                >
                  +
                </motion.button>
              </div>
              <p className="text-xs text-gray-500 mt-1">0 = prizemnica (3m), 1 = prizemlje + 1 kat (6m), itd.</p>
            </Card3D>

            <Card3D className="p-6 relative z-10">
              <motion.div
                className="absolute -top-6 -right-6 text-blue-600"
                animate={{
                  rotate: [0, 10, 0, -10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              >
                <Droplets size={40} />
              </motion.div>

              <Label className="text-lg font-medium text-blue-700">Količina prozora</Label>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                <motion.div
                  whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  className="border-2 border-gray-200 hover:border-yellow-300 rounded-xl p-5 transition-all bg-white shadow-md"
                >
                  <div className="flex flex-col items-center">
                    <motion.div
                      animate={{
                        y: [0, -5, 0],
                        rotate: [0, 5, 0, -5, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                      }}
                      className="w-20 h-20 mb-3"
                    >
                      <svg viewBox="0 0 24 24" className="w-full h-full drop-shadow-md">
                        <rect
                          x="4"
                          y="4"
                          width="16"
                          height="16"
                          fill="#e6f7ff"
                          stroke="#0099cc"
                          strokeWidth="1.5"
                          rx="2"
                        />
                        <line x1="12" y1="4" x2="12" y2="20" stroke="#0099cc" strokeWidth="1.5" />
                      </svg>
                    </motion.div>
                    <span className="font-medium text-lg mb-2">Mali prozor</span>
                    <span className="text-sm text-gray-500 mb-3">~1.2m²</span>
                    <div className="flex items-center space-x-4 mt-2">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => {
                          e.preventDefault()
                          updateFormData("windowsSmall", Math.max(0, formData.windowsSmall - 1))
                        }}
                        className="h-10 w-10 rounded-full bg-blue-100 border-2 border-blue-300 flex items-center justify-center text-lg font-bold text-blue-700 shadow-md"
                      >
                        -
                      </motion.button>
                      <motion.span
                        animate={{
                          scale: formData.windowsSmall > 0 ? [1, 1.2, 1] : 1,
                        }}
                        transition={{
                          duration: 0.5,
                        }}
                        className="w-8 text-center text-lg font-medium"
                      >
                        {formData.windowsSmall}
                      </motion.span>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => {
                          e.preventDefault()
                          updateFormData("windowsSmall", formData.windowsSmall + 1)
                        }}
                        className="h-10 w-10 rounded-full bg-blue-100 border-2 border-blue-300 flex items-center justify-center text-lg font-bold text-blue-700 shadow-md"
                      >
                        +
                      </motion.button>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  className="border-2 border-gray-200 hover:border-yellow-300 rounded-xl p-5 transition-all bg-white shadow-md"
                >
                  <div className="flex flex-col items-center">
                    <motion.div
                      animate={{
                        y: [0, -5, 0],
                        rotate: [0, -5, 0, 5, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                      }}
                      className="w-20 h-20 mb-3"
                    >
                      <svg viewBox="0 0 24 24" className="w-full h-full drop-shadow-md">
                        <rect
                          x="2"
                          y="4"
                          width="20"
                          height="16"
                          fill="#e6f7ff"
                          stroke="#0099cc"
                          strokeWidth="1.5"
                          rx="2"
                        />
                        <line x1="8" y1="4" x2="8" y2="20" stroke="#0099cc" strokeWidth="1.5" />
                        <line x1="16" y1="4" x2="16" y2="20" stroke="#0099cc" strokeWidth="1.5" />
                      </svg>
                    </motion.div>
                    <span className="font-medium text-lg mb-2">Dupli prozor</span>
                    <span className="text-sm text-gray-500 mb-3">~2.4m²</span>
                    <div className="flex items-center space-x-4 mt-2">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => {
                          e.preventDefault()
                          updateFormData("windowsDouble", Math.max(0, formData.windowsDouble - 1))
                        }}
                        className="h-10 w-10 rounded-full bg-blue-100 border-2 border-blue-300 flex items-center justify-center text-lg font-bold text-blue-700 shadow-md"
                      >
                        -
                      </motion.button>
                      <motion.span
                        animate={{
                          scale: formData.windowsDouble > 0 ? [1, 1.2, 1] : 1,
                        }}
                        transition={{
                          duration: 0.5,
                        }}
                        className="w-8 text-center text-lg font-medium"
                      >
                        {formData.windowsDouble}
                      </motion.span>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => {
                          e.preventDefault()
                          updateFormData("windowsDouble", formData.windowsDouble + 1)
                        }}
                        className="h-10 w-10 rounded-full bg-blue-100 border-2 border-blue-300 flex items-center justify-center text-lg font-bold text-blue-700 shadow-md"
                      >
                        +
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </div>
            </Card3D>

            <Card3D className="p-6 relative z-10">
              <Label className="text-lg font-medium text-blue-700">Imate li vanjske ili unutarnje balkone?</Label>
              <div className="grid grid-cols-3 gap-3 mt-3">
                {["inner", "outer", "none"].map((type) => (
                  <motion.div
                    key={type}
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className={cn(
                      "border-2 rounded-xl p-3 cursor-pointer transition-all text-center shadow-md",
                      formData.balconyType === type
                        ? "border-yellow-400 bg-gradient-to-br from-yellow-50 to-yellow-100 shadow-lg"
                        : "border-gray-200 hover:border-yellow-300 bg-white",
                    )}
                    onClick={() => updateFormData("balconyType", type)}
                  >
                    {type === "inner" ? "Unutarnje" : type === "outer" ? "Vanjske" : "Nemam"}
                  </motion.div>
                ))}
              </div>

              {formData.balconyType !== "none" && formData.balconyType !== "" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4"
                >
                  <Label className="text-lg font-medium text-blue-700">Broj balkona</Label>
                  <div className="flex items-center space-x-4 mt-3">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => {
                        e.preventDefault()
                        updateFormData("balconyCount", Math.max(0, formData.balconyCount - 1))
                      }}
                      className="h-10 w-10 rounded-full bg-blue-100 border-2 border-blue-300 flex items-center justify-center text-lg font-bold text-blue-700 shadow-md"
                    >
                      -
                    </motion.button>
                    <motion.span
                      animate={{
                        scale: formData.balconyCount > 0 ? [1, 1.2, 1] : 1,
                      }}
                      transition={{
                        duration: 0.5,
                      }}
                      className="w-8 text-center text-lg font-medium"
                    >
                      {formData.balconyCount}
                    </motion.span>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => {
                        e.preventDefault()
                        updateFormData("balconyCount", formData.balconyCount + 1)
                      }}
                      className="h-10 w-10 rounded-full bg-blue-100 border-2 border-blue-300 flex items-center justify-center text-lg font-bold text-blue-700 shadow-md"
                    >
                      +
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </Card3D>

            <Card3D className="p-6 relative z-10">
              <motion.div
                className="absolute -top-6 -right-6 text-yellow-500"
                animate={{
                  rotate: [0, 10, 0, -10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              >
                <Zap size={40} />
              </motion.div>

              <Label className="text-lg font-medium text-blue-700">U kakvom je stanju fasada?</Label>
              <div className="mt-6 px-4">
                <Slider
                  value={[formData.facadeCondition]}
                  min={1}
                  max={5}
                  step={1}
                  onValueChange={(value) => updateFormData("facadeCondition", value[0])}
                  className="py-4"
                />
                <div className="flex justify-between mt-4">
                  <div className="flex flex-col items-center">
                    <span className="text-sm font-medium mt-1">Jako loša</span>
                    <motion.span
                      animate={{
                        scale: formData.facadeCondition <= 2 ? [1, 1.1, 1] : 1,
                        color: formData.facadeCondition <= 2 ? ["#1e40af", "#3b82f6", "#1e40af"] : "#6b7280",
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                      }}
                      className="text-xs text-gray-500"
                    >
                      5.5-6€ po m²
                    </motion.span>
                  </div>

                  <div className="flex flex-col items-center">
                    <span className="text-sm font-medium mt-1">Srednja</span>
                    <motion.span
                      animate={{
                        scale: formData.facadeCondition === 3 || formData.facadeCondition === 4 ? [1, 1.1, 1] : 1,
                        color:
                          formData.facadeCondition === 3 || formData.facadeCondition === 4
                            ? ["#1e40af", "#3b82f6", "#1e40af"]
                            : "#6b7280",
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                      }}
                      className="text-xs text-gray-500"
                    >
                      4-5€ po m²
                    </motion.span>
                  </div>

                  <div className="flex flex-col items-center">
                    <span className="text-sm font-medium mt-1">Održavanje</span>
                    <motion.span
                      animate={{
                        scale: formData.facadeCondition === 5 ? [1, 1.1, 1] : 1,
                        color: formData.facadeCondition === 5 ? ["#1e40af", "#3b82f6", "#1e40af"] : "#6b7280",
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                      }}
                      className="text-xs text-gray-500"
                    >
                      4€ po m²
                    </motion.span>
                  </div>
                </div>
              </div>
            </Card3D>
          </>
        )}

        {/* Pitanja za bazen */}
        {(selectedService === "pool" || (selectedService === "complete" && hasPool)) && (
          <>
            {selectedService === "complete" && (
              <Card3D className="p-6 relative z-10 mb-4">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="hasPool"
                    checked={hasPool}
                    onCheckedChange={(checked) => setHasPool(!!checked)}
                    className="h-5 w-5"
                  />
                  <Label htmlFor="hasPool" className="text-lg font-medium text-blue-700 cursor-pointer">
                    Imam bazen koji treba očistiti
                  </Label>
                </div>
              </Card3D>
            )}

            <Card3D className="p-6 relative z-10">
              <motion.div
                className="absolute -top-6 -right-6 text-blue-600"
                animate={{
                  rotate: [0, 10, 0, -10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              >
                <Pool size={40} />
              </motion.div>

              <Label className="text-lg font-medium text-blue-700 mb-4 block">Veličina bazena</Label>
              <RadioGroup
                value={formData.poolSize}
                onValueChange={(value) => updateFormData("poolSize", value)}
                className="grid grid-cols-1 md:grid-cols-3 gap-4"
              >
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className={cn(
                    "border-2 rounded-xl p-4 cursor-pointer transition-all",
                    formData.poolSize === "small"
                      ? "border-yellow-400 bg-gradient-to-br from-yellow-50 to-yellow-100 shadow-lg"
                      : "border-gray-200 hover:border-yellow-300 bg-white",
                  )}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="small" id="pool-small" className="text-blue-600" />
                    <Label htmlFor="pool-small" className="cursor-pointer">
                      <div>
                        <p className="font-medium text-blue-700">Mali bazen</p>
                        <p className="text-xs text-blue-600">do 20m²</p>
                        <p className="text-xs text-blue-600 mt-1">Okvirna cijena: 400€</p>
                      </div>
                    </Label>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className={cn(
                    "border-2 rounded-xl p-4 cursor-pointer transition-all",
                    formData.poolSize === "medium"
                      ? "border-yellow-400 bg-gradient-to-br from-yellow-50 to-yellow-100 shadow-lg"
                      : "border-gray-200 hover:border-yellow-300 bg-white",
                  )}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="medium" id="pool-medium" className="text-blue-600" />
                    <Label htmlFor="pool-medium" className="cursor-pointer">
                      <div>
                        <p className="font-medium text-blue-700">Srednji bazen</p>
                        <p className="text-xs text-blue-600">20-40m²</p>
                        <p className="text-xs text-blue-600 mt-1">Okvirna cijena: 600€</p>
                      </div>
                    </Label>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className={cn(
                    "border-2 rounded-xl p-4 cursor-pointer transition-all",
                    formData.poolSize === "large"
                      ? "border-yellow-400 bg-gradient-to-br from-yellow-50 to-yellow-100 shadow-lg"
                      : "border-gray-200 hover:border-yellow-300 bg-white",
                  )}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="large" id="pool-large" className="text-blue-600" />
                    <Label htmlFor="pool-large" className="cursor-pointer">
                      <div>
                        <p className="font-medium text-blue-700">Veliki bazen</p>
                        <p className="text-xs text-blue-600">preko 40m²</p>
                        <p className="text-xs text-blue-600 mt-1">Okvirna cijena: 800€</p>
                      </div>
                    </Label>
                  </div>
                </motion.div>
              </RadioGroup>
            </Card3D>

            <Card3D className="p-6 relative z-10">
              <Label className="text-lg font-medium text-blue-700 mb-4 block">Tip bazena</Label>
              <RadioGroup
                value={formData.poolType}
                onValueChange={(value) => updateFormData("poolType", value)}
                className="grid grid-cols-1 md:grid-cols-3 gap-4"
              >
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className={cn(
                    "border-2 rounded-xl p-4 cursor-pointer transition-all",
                    formData.poolType === "standard"
                      ? "border-yellow-400 bg-gradient-to-br from-yellow-50 to-yellow-100 shadow-lg"
                      : "border-gray-200 hover:border-yellow-300 bg-white",
                  )}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="standard" id="pool-standard" className="text-blue-600" />
                    <Label htmlFor="pool-standard" className="cursor-pointer">
                      <div>
                        <p className="font-medium text-blue-700">Standardni</p>
                        <p className="text-xs text-blue-600">Klasični bazen</p>
                      </div>
                    </Label>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className={cn(
                    "border-2 rounded-xl p-4 cursor-pointer transition-all",
                    formData.poolType === "saltwater"
                      ? "border-yellow-400 bg-gradient-to-br from-yellow-50 to-yellow-100 shadow-lg"
                      : "border-gray-200 hover:border-yellow-300 bg-white",
                  )}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="saltwater" id="pool-saltwater" className="text-blue-600" />
                    <Label htmlFor="pool-saltwater" className="cursor-pointer">
                      <div>
                        <p className="font-medium text-blue-700">Slani bazen</p>
                        <p className="text-xs text-blue-600">Bazen sa slanom vodom</p>
                      </div>
                    </Label>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className={cn(
                    "border-2 rounded-xl p-4 cursor-pointer transition-all",
                    formData.poolType === "infinity"
                      ? "border-yellow-400 bg-gradient-to-br from-yellow-50 to-yellow-100 shadow-lg"
                      : "border-gray-200 hover:border-yellow-300 bg-white",
                  )}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="infinity" id="pool-infinity" className="text-blue-600" />
                    <Label htmlFor="pool-infinity" className="cursor-pointer">
                      <div>
                        <p className="font-medium text-blue-700">Infinity bazen</p>
                        <p className="text-xs text-blue-600">Bazen s efektom beskonačnosti</p>
                      </div>
                    </Label>
                  </div>
                </motion.div>
              </RadioGroup>
            </Card3D>

            <Card3D className="p-6 relative z-10">
              <Label htmlFor="poolLastCleaned" className="text-lg font-medium text-blue-700">
                Kada je bazen zadnji put čišćen?
              </Label>
              <Input
                id="poolLastCleaned"
                type="date"
                value={formData.poolLastCleaned}
                onChange={(e) => updateFormData("poolLastCleaned", e.target.value)}
                className="mt-2 h-12 text-lg border-2 border-gray-200 focus:border-yellow-400 rounded-xl"
              />
              <p className="text-xs text-gray-500 mt-1">Ova informacija nam pomaže procijeniti stanje bazena</p>
            </Card3D>
          </>
        )}

        {/* Pitanja za okućnicu */}
        {(selectedService === "yard" || selectedService === "complete" || formData.cleanYard) && (
          <>
            <Card3D className="p-6 relative z-10">
              <motion.div
                className="absolute -top-6 -right-6 text-green-600"
                animate={{
                  rotate: [0, 10, 0, -10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              >
                <Trees size={40} />
              </motion.div>

              <Label htmlFor="yardSquareMeters" className="text-lg font-medium text-blue-700">
                Površina okućnice (m²)
              </Label>
              <Input
                id="yardSquareMeters"
                type="number"
                placeholder="npr. 50"
                value={formData.yardSquareMeters}
                onChange={(e) => updateFormData("yardSquareMeters", e.target.value)}
                className="mt-2 h-12 text-lg border-2 border-gray-200 focus:border-yellow-400 rounded-xl"
              />
              <p className="text-xs text-gray-500 mt-1">Približna površina okućnice koju treba očistiti</p>
            </Card3D>

            <Card3D className="p-6 relative z-10">
              <Label className="text-lg font-medium text-blue-700">U kakvom je stanju okućnica?</Label>
              <div className="mt-6 px-4">
                <Slider
                  value={[formData.yardCondition]}
                  min={1}
                  max={5}
                  step={1}
                  onValueChange={(value) => updateFormData("yardCondition", value[0])}
                  className="py-4"
                />
                <div className="flex justify-between mt-4">
                  <div className="flex flex-col items-center">
                    <span className="text-sm font-medium mt-1">Jako loša</span>
                    <motion.span
                      animate={{
                        scale: formData.yardCondition <= 2 ? [1, 1.1, 1] : 1,
                        color: formData.yardCondition <= 2 ? ["#1e40af", "#3b82f6", "#1e40af"] : "#6b7280",
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                      }}
                      className="text-xs text-gray-500"
                    >
                      3€ po m²
                    </motion.span>
                  </div>

                  <div className="flex flex-col items-center">
                    <span className="text-sm font-medium mt-1">Srednja</span>
                    <motion.span
                      animate={{
                        scale: formData.yardCondition === 3 ? [1, 1.1, 1] : 1,
                        color: formData.yardCondition === 3 ? ["#1e40af", "#3b82f6", "#1e40af"] : "#6b7280",
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                      }}
                      className="text-xs text-gray-500"
                    >
                      2.5€ po m²
                    </motion.span>
                  </div>

                  <div className="flex flex-col items-center">
                    <span className="text-sm font-medium mt-1">Odlična</span>
                    <motion.span
                      animate={{
                        scale: formData.yardCondition >= 4 ? [1, 1.1, 1] : 1,
                        color: formData.yardCondition >= 4 ? ["#1e40af", "#3b82f6", "#1e40af"] : "#6b7280",
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                      }}
                      className="text-xs text-gray-500"
                    >
                      2€ po m²
                    </motion.span>
                  </div>
                </div>
              </div>
            </Card3D>

            <Card3D className="p-6 relative z-10">
              <Label className="text-lg font-medium text-blue-700 mb-4 block">Dodatne informacije o okućnici</Label>

              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="hasPlants"
                    checked={formData.hasPlants}
                    onCheckedChange={(checked) => updateFormData("hasPlants", checked)}
                    className="h-5 w-5"
                  />
                  <Label htmlFor="hasPlants" className="text-md font-medium text-blue-700 cursor-pointer">
                    Okućnica ima ukrasno bilje i grmlje
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="hasTrees"
                    checked={formData.hasTrees}
                    onCheckedChange={(checked) => updateFormData("hasTrees", checked)}
                    className="h-5 w-5"
                  />
                  <Label htmlFor="hasTrees" className="text-md font-medium text-blue-700 cursor-pointer">
                    Okućnica ima drveće koje treba održavati
                  </Label>
                </div>
              </div>

              <p className="text-xs text-gray-500 mt-4">
                Napomena: Prisustvo biljaka i drveća može utjecati na konačnu cijenu čišćenja okućnice
              </p>
            </Card3D>
          </>
        )}

        {/* Dodatne usluge */}
        {selectedService !== "yard" && selectedService !== "pool" && (
          <Card3D className="p-6 relative z-10">
            <motion.div
              className="absolute -top-6 -right-6 text-green-600"
              animate={{
                rotate: [0, 10, 0, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            >
              <Trash2 size={40} />
            </motion.div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="cleanYard"
                checked={formData.cleanYard}
                onCheckedChange={(checked) => updateFormData("cleanYard", checked)}
                className="h-5 w-5"
              />
              <Label htmlFor="cleanYard" className="text-lg font-medium text-blue-700 cursor-pointer">
                Treba li očistiti i okućnicu?
              </Label>
            </div>
          </Card3D>
        )}

        <Card3D className="p-6 relative z-10">
          <motion.div
            className="absolute -top-6 -right-6 text-blue-600"
            animate={{
              rotate: [0, 10, 0, -10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          >
            <Car size={40} />
          </motion.div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="carWash"
              checked={formData.carWash}
              onCheckedChange={(checked) => updateFormData("carWash", checked)}
              className="h-5 w-5"
            />
            <Label htmlFor="carWash" className="text-lg font-medium text-blue-700 cursor-pointer">
              Želite li i vanjsko pranje automobila? (25€)
            </Label>
          </div>
          {formData.carWash && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-2 pl-6"
            >
              <div className="flex items-center">
                <motion.div
                  animate={{
                    rotate: [0, 10, 0, -10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                >
                  <Car className="h-5 w-5 text-blue-500 mr-2" />
                </motion.div>
                <p className="text-sm text-blue-600">
                  Vanjsko pranje automobila uključuje pranje karoserije, stakala i felgi.
                </p>
              </div>
            </motion.div>
          )}
        </Card3D>

        <FunFactBox />

        {/* Prikaz izračuna za fasadu */}
        {(selectedService === "facade" || selectedService === "complete") &&
        formData.buildingWidth &&
        formData.buildingLength ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-3 p-6 bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 rounded-xl shadow-lg"
          >
            <div className="flex items-center mb-2">
              <motion.div
                animate={{
                  rotate: [0, 20, 0, -20, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              >
                <Sparkles className="h-6 w-6 text-yellow-500 mr-2" />
              </motion.div>
              <h4 className="font-medium text-blue-700">Izračun površine fasade</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm mb-1">
                  <span className="font-medium">Tlocrtna površina:</span>{" "}
                  {(Number(formData.buildingWidth) * Number(formData.buildingLength)).toFixed(2)} m²
                </p>
                <p className="text-sm mb-1">
                  <span className="font-medium">Broj katova:</span> {formData.floors}
                </p>
                <p className="text-sm mb-1">
                  <span className="font-medium">Visina objekta:</span> {(formData.floors + 1) * FLOOR_HEIGHT} m
                </p>
              </div>
              <div>
                <p className="text-sm mb-1">
                  <span className="font-medium">Ukupna površina fasade:</span> {totalFacadeArea.toFixed(2)} m²
                </p>
                <p className="text-sm mb-1">
                  <span className="font-medium">Površina prozora:</span>{" "}
                  {(formData.windowsSmall * WINDOW_SIZES.small + formData.windowsDouble * WINDOW_SIZES.double).toFixed(
                    2,
                  )}{" "}
                  m²
                </p>
                {formData.balconyType === "outer" && formData.balconyCount > 0 && (
                  <p className="text-sm mb-1">
                    <span className="font-medium">Dodatak za vanjske balkone:</span> {formData.balconyCount * 4} m²
                  </p>
                )}
              </div>
            </div>
            <motion.p
              animate={{
                scale: [1, 1.05, 1],
                color: ["#1e40af", "#3b82f6", "#1e40af"],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
              className="text-sm font-medium text-blue-700 mt-2 text-center"
            >
              Površina za čišćenje: {adjustedArea} m²
            </motion.p>
          </motion.div>
        ) : null}

        {/* Prikaz izračuna za okućnicu */}
        {(selectedService === "yard" || (formData.cleanYard && formData.yardSquareMeters)) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-3 p-6 bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 rounded-xl shadow-lg"
          >
            <div className="flex items-center mb-2">
              <motion.div
                animate={{
                  rotate: [0, 20, 0, -20, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              >
                <Trees className="h-6 w-6 text-green-500 mr-2" />
              </motion.div>
              <h4 className="font-medium text-blue-700">Izračun za okućnicu</h4>
            </div>
            <div>
              <p className="text-sm mb-1">
                <span className="font-medium">Površina okućnice:</span> {formData.yardSquareMeters} m²
              </p>
              <p className="text-sm mb-1">
                <span className="font-medium">Stanje okućnice:</span> {formData.yardCondition}/5
              </p>
              <p className="text-sm mb-1">
                <span className="font-medium">Cijena po m²:</span> {getYardPricePerSquareMeter(formData.yardCondition)}
              </p>
              {formData.hasPlants && (
                <p className="text-sm mb-1">
                  <span className="font-medium">Dodatak za bilje i grmlje:</span> +10%
                </p>
              )}
              {formData.hasTrees && (
                <p className="text-sm mb-1">
                  <span className="font-medium">Dodatak za drveće:</span> +15%
                </p>
              )}
            </div>
          </motion.div>
        )}

        {/* Prikaz izračuna za bazen */}
        {(selectedService === "pool" || selectedService === "complete") && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-3 p-6 bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 rounded-xl shadow-lg"
          >
            <div className="flex items-center mb-2">
              <motion.div
                animate={{
                  rotate: [0, 20, 0, -20, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              >
                <Pool className="h-6 w-6 text-blue-500 mr-2" />
              </motion.div>
              <h4 className="font-medium text-blue-700">Izračun za bazen</h4>
            </div>
            <div>
              <p className="text-sm mb-1">
                <span className="font-medium">Veličina bazena:</span>{" "}
                {formData.poolSize === "small"
                  ? "Mali (do 20m²)"
                  : formData.poolSize === "medium"
                    ? "Srednji (20-40m²)"
                    : "Veliki (preko 40m²)"}
              </p>
              <p className="text-sm mb-1">
                <span className="font-medium">Tip bazena:</span>{" "}
                {formData.poolType === "standard"
                  ? "Standardni"
                  : formData.poolType === "saltwater"
                    ? "Slani bazen"
                    : "Infinity bazen"}
              </p>
              {formData.poolLastCleaned && (
                <p className="text-sm mb-1">
                  <span className="font-medium">Zadnje čišćenje:</span> {formData.poolLastCleaned}
                </p>
              )}
              <p className="text-sm mb-1">
                <span className="font-medium">Osnovna cijena:</span>{" "}
                {PRICE_FACTORS.poolSize[formData.poolSize as keyof typeof PRICE_FACTORS.poolSize]}€
              </p>
              {formData.poolType !== "standard" && (
                <p className="text-sm mb-1">
                  <span className="font-medium">Dodatak za tip bazena:</span>{" "}
                  {formData.poolType === "saltwater" ? "+20%" : "+30%"}
                </p>
              )}
            </div>
          </motion.div>
        )}

        {/* Prikaz procjene cijene */}
        {estimatedPrice && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-3 p-6 bg-gradient-to-br from-yellow-50 to-yellow-100 border-2 border-yellow-300 rounded-xl shadow-lg"
          >
            <div className="flex items-center mb-2">
              <motion.div
                animate={{
                  rotate: [0, 20, 0, -20, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              >
                <Sparkles className="h-6 w-6 text-yellow-500 mr-2" />
              </motion.div>
              <h4 className="font-medium text-blue-700">Okvirna procjena cijene</h4>
            </div>

            <div className="mt-3">
              {(selectedService === "facade" || selectedService === "complete") && adjustedArea && (
                <>
                  <p className="text-sm font-medium text-blue-700">Cijena čišćenja fasade:</p>
                  <motion.p
                    animate={{
                      scale: [1, 1.05, 1],
                      color: ["#1e40af", "#3b82f6", "#1e40af"],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                    }}
                    className="text-lg font-bold text-blue-800"
                  >
                    {estimatedPrice.min === estimatedPrice.max
                      ? `${estimatedPrice.min}€`
                      : `${estimatedPrice.min}€ - ${estimatedPrice.max}€`}
                  </motion.p>
                </>
              )}

              {estimatedPrice.yardPrice && (
                <div className="mt-2 pt-2 border-t border-yellow-300">
                  <p className="text-sm font-medium text-blue-700">Čišćenje okućnice:</p>
                  <p className="text-lg font-bold text-blue-800">{estimatedPrice.yardPrice}€</p>
                  <p className="text-xs text-gray-600">Površina: {formData.yardSquareMeters} m²</p>
                </div>
              )}

              {estimatedPrice.poolPrice && (
                <div className="mt-2 pt-2 border-t border-yellow-300">
                  <p className="text-sm font-medium text-blue-700">Čišćenje bazena:</p>
                  <p className="text-lg font-bold text-blue-800">{estimatedPrice.poolPrice}€</p>
                </div>
              )}

              {formData.carWash && estimatedPrice.carWashPrice && (
                <div className="mt-2 pt-2 border-t border-yellow-300">
                  <p className="text-sm font-medium text-blue-700">Vanjsko pranje automobila:</p>
                  <p className="text-lg font-bold text-blue-800">{estimatedPrice.carWashPrice}€</p>
                </div>
              )}

              <div className="mt-2 pt-2 border-t border-yellow-300">
                <p className="text-sm font-medium text-blue-700">Ukupna cijena:</p>
                <motion.p
                  animate={{
                    scale: [1, 1.05, 1],
                    color: ["#1e40af", "#3b82f6", "#1e40af"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                  className="text-lg font-bold text-blue-800"
                >
                  {estimatedPrice.min +
                    (estimatedPrice.yardPrice || 0) +
                    (estimatedPrice.poolPrice || 0) +
                    (estimatedPrice.carWashPrice || 0)}
                  €
                  {estimatedPrice.max !== estimatedPrice.min &&
                    ` - ${estimatedPrice.max + (estimatedPrice.yardPrice || 0) + (estimatedPrice.poolPrice || 0) + (estimatedPrice.carWashPrice || 0)}€`}
                </motion.p>
                {discountApplied && (
                  <p className="text-xs text-green-600 mt-1 font-medium">Uključen popust od 15% za prvo čišćenje!</p>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </div>

      <div className="flex justify-between mt-8">
        <Button3D
          onClick={handleBack}
          className="bg-gradient-to-br from-gray-100 to-gray-200 text-blue-600 shadow-[0_8px_0_rgb(37,99,235)]"
        >
          <ChevronLeft className="mr-2 h-5 w-5" /> Natrag
        </Button3D>
        <Button3D onClick={handleNext}>
          Dalje <ChevronRight className="ml-2 h-5 w-5" />
        </Button3D>
      </div>
    </motion.div>
  )

  // Korak 3: Pregled i potvrda
  const renderReview = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div className="text-center mb-6">
        <motion.h2
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 mb-2"
        >
          Pregled i potvrda
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-blue-600"
        >
          Provjerite unesene podatke i potvrdite zahtjev
        </motion.p>
      </div>

      <div className="space-y-6 relative">
        <Card3D className="p-6 relative">
          <motion.div
            className="absolute -top-6 -left-6 text-blue-600"
            animate={{
              rotate: [0, 10, 0, -10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          >
            <Home size={40} />
          </motion.div>

          <h4 className="font-bold text-lg text-blue-700 mb-2">Kontakt podaci</h4>
          <p>
            <span className="font-medium">Email:</span> {formData.email}
          </p>
          <p>
            <span className="font-medium">Adresa:</span> {formData.address}
          </p>
          <p>
            <span className="font-medium">Grad:</span> {formData.city}
          </p>
          <p>
            <span className="font-medium">Telefon:</span> {formData.phone}
          </p>
        </Card3D>

        <Card3D className="p-6 relative mt-4">
          <motion.div
            className="absolute -top-6 -right-6 text-blue-600"
            animate={{
              rotate: [0, 10, 0, -10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          >
            <Sparkles size={40} />
          </motion.div>

          <h4 className="font-bold text-lg text-blue-700 mb-2">Odabrana usluga</h4>
          <p>
            <span className="font-medium">Usluga:</span>{" "}
            {SERVICE_TYPES.find((s) => s.id === selectedService)?.name || "Čišćenje fasade"}
          </p>
        </Card3D>

        {/* Pregled detalja fasade */}
        {(selectedService === "facade" || selectedService === "complete") && (
          <Card3D className="p-6 relative">
            <motion.div
              className="absolute -top-6 -right-6 text-blue-600"
              animate={{
                rotate: [0, 10, 0, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            >
              <Building size={40} />
            </motion.div>

            <h4 className="font-bold text-lg text-blue-700 mb-2">Dimenzije objekta</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p>
                  <span className="font-medium">Širina:</span> {formData.buildingWidth} m
                </p>
                <p>
                  <span className="font-medium">Dužina:</span> {formData.buildingLength} m
                </p>
                <p>
                  <span className="font-medium">Broj katova:</span> {formData.floors}
                </p>
                <p>
                  <span className="font-medium">Mali prozori:</span> {formData.windowsSmall}
                </p>
              </div>
              <div>
                <p>
                  <span className="font-medium">Dupli prozori:</span> {formData.windowsDouble}
                </p>
                {formData.balconyType !== "none" && formData.balconyType && (
                  <p>
                    <span className="font-medium">Balkoni:</span>{" "}
                    {formData.balconyType === "inner"
                      ? `Unutarnji (${formData.balconyCount})`
                      : formData.balconyType === "outer"
                        ? `Vanjski (${formData.balconyCount})`
                        : "Nema"}
                  </p>
                )}
                <p>
                  <span className="font-medium">Stanje fasade:</span> {formData.facadeCondition}/5
                </p>
                <p>
                  <span className="font-medium">Površina za čišćenje:</span> {adjustedArea} m²
                </p>
                <p>
                  <span className="font-medium">Broj strana za čišćenje:</span> {formData.facadeSides}
                </p>
              </div>
            </div>
          </Card3D>
        )}

        {/* Pregled detalja bazena */}
        {(selectedService === "pool" || (selectedService === "complete" && hasPool)) && (
          <Card3D className="p-6 relative">
            <motion.div
              className="absolute -top-6 -right-6 text-blue-600"
              animate={{
                rotate: [0, 10, 0, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            >
              <Pool size={40} />
            </motion.div>

            <h4 className="font-bold text-lg text-blue-700 mb-2">Detalji o bazenu</h4>
            <p>
              <span className="font-medium">Veličina bazena:</span>{" "}
              {formData.poolSize === "small"
                ? "Mali (do 20m²)"
                : formData.poolSize === "medium"
                  ? "Srednji (20-40m²)"
                  : "Veliki (preko 40m²)"}
            </p>
            <p>
              <span className="font-medium">Tip bazena:</span>{" "}
              {formData.poolType === "standard"
                ? "Standardni"
                : formData.poolType === "saltwater"
                  ? "Slani bazen"
                  : "Infinity bazen"}
            </p>
            {formData.poolLastCleaned && (
              <p>
                <span className="font-medium">Zadnje čišćenje:</span> {formData.pool}
              </p>
            )}
          </Card3D>
        )}

        {/* Pregled detalja okućnice */}
        {(selectedService === "yard" || selectedService === "complete" || formData.cleanYard) && (
          <Card3D className="p-6 relative">
            <motion.div
              className="absolute -top-6 -right-6 text-green-600"
              animate={{
                rotate: [0, 10, 0, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            >
              <Trees size={40} />
            </motion.div>

            <h4 className="font-bold text-lg text-blue-700 mb-2">Detalji o okućnici</h4>
            <p>
              <span className="font-medium">Površina okućnice:</span> {formData.yardSquareMeters} m²
            </p>
            <p>
              <span className="font-medium">Stanje okućnice:</span> {formData.yardCondition}/5
            </p>
            <p>
              <span className="font-medium">Ukrasno bilje i grmlje:</span> {formData.hasPlants ? "Da" : "Ne"}
            </p>
            <p>
              <span className="font-medium">Drveće za održavanje:</span> {formData.hasTrees ? "Da" : "Ne"}
            </p>
          </Card3D>
        )}

        {/* Dodatne usluge */}
        {formData.carWash && (
          <Card3D className="p-6 relative">
            <motion.div
              className="absolute -top-6 -right-6 text-blue-600"
              animate={{
                rotate: [0, 10, 0, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            >
              <Car size={40} />
            </motion.div>

            <h4 className="font-bold text-lg text-blue-700 mb-2">Dodatne usluge</h4>
            <p>
              <span className="font-medium">Vanjsko pranje automobila:</span> Da (25€)
            </p>
          </Card3D>
        )}

        <FunFactBox />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="p-6 bg-gradient-to-br from-yellow-50 to-yellow-100 border-2 border-yellow-300 rounded-xl shadow-lg"
        >
          <h4 className="font-bold text-lg text-blue-700 mb-2 text-center">Okvirna procjena cijene</h4>

          {estimatedPrice && (
            <>
              {(selectedService === "facade" || selectedService === "complete") && adjustedArea && (
                <>
                  <div className="flex justify-between items-center mb-2">
                    <span>Cijena čišćenja fasade:</span>
                    <span className="font-medium">
                      {estimatedPrice.min === estimatedPrice.max
                        ? `${estimatedPrice.min}€`
                        : `${estimatedPrice.min}€ - ${estimatedPrice.max}€`}
                    </span>
                  </div>
                </>
              )}

              {(selectedService === "pool" || selectedService === "complete") && estimatedPrice.poolPrice && (
                <div className="flex justify-between items-center mb-2">
                  <span>Cijena čišćenja bazena:</span>
                  <span className="font-medium">{estimatedPrice.poolPrice}€</span>
                </div>
              )}

              {(selectedService === "yard" || selectedService === "complete" || formData.cleanYard) &&
                estimatedPrice.yardPrice && (
                  <div className="flex justify-between items-center mb-2">
                    <span>Cijena čišćenja okućnice:</span>
                    <span className="font-medium">{estimatedPrice.yardPrice}€</span>
                  </div>
                )}

              {formData.carWash && estimatedPrice.carWashPrice && (
                <div className="flex justify-between items-center mb-2">
                  <span>Vanjsko pranje automobila:</span>
                  <span className="font-medium">{estimatedPrice.carWashPrice}€</span>
                </div>
              )}

              <div className="flex justify-between items-center mb-2 text-green-600 font-medium">
                <span>Popust za prvo čišćenje:</span>
                <span className="font-medium">-15%</span>
              </div>

              <div className="h-px bg-gray-200 my-3"></div>
              <div className="flex justify-between items-center text-lg font-bold">
                <span>Ukupna cijena:</span>
                <motion.span
                  animate={{
                    scale: [1, 1.05, 1],
                    color: ["#1e40af", "#3b82f6", "#1e40af"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                  className="text-blue-700"
                >
                  {estimatedPrice.min +
                    (estimatedPrice.yardPrice || 0) +
                    (estimatedPrice.poolPrice || 0) +
                    (estimatedPrice.carWashPrice || 0)}
                  €
                  {estimatedPrice.max !== estimatedPrice.min &&
                    ` - ${estimatedPrice.max + (estimatedPrice.yardPrice || 0) + (estimatedPrice.poolPrice || 0) + (estimatedPrice.carWashPrice || 0)}€`}
                </motion.span>
              </div>

              <p className="text-xs text-gray-500 mt-2 text-center">
                *Ovo je okvirna procjena s uračunatim popustom. Konačna cijena ovisi o stanju objekta i drugim
                faktorima.
              </p>
            </>
          )}
        </motion.div>

        <Card3D className="p-6 relative z-10">
          <Label htmlFor="message" className="text-lg font-medium text-blue-700">
            Dodatna poruka (opcionalno)
          </Label>
          <Textarea
            id="message"
            placeholder="Dodatne napomene ili pitanja..."
            value={formData.message}
            onChange={(e) => updateFormData("message", e.target.value)}
            className="mt-2 text-lg border-2 border-gray-200 focus:border-yellow-400 rounded-xl min-h-[120px]"
          />
        </Card3D>
      </div>

      <div className="flex justify-between mt-8">
        <Button3D
          onClick={handleBack}
          className="bg-gradient-to-br from-gray-100 to-gray-200 text-blue-600 shadow-[0_8px_0_rgb(37,99,235)]"
        >
          <ChevronLeft className="mr-2 h-5 w-5" /> Natrag
        </Button3D>
        <Button3D onClick={handleSubmit}>
          Pošalji zahtjev <Sparkles className="ml-2 h-5 w-5" />
        </Button3D>
      </div>
    </motion.div>
  )

  // Korak 4: Uspjeh
  const renderSuccess = () => {
    return (
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
        {showConfetti && <Confetti width={width} height={height} recycle={false} numberOfPieces={500} />}

        <div className="text-center space-y-4 mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1, rotate: [0, 10, 0, -10, 0] }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              rotate: {
                delay: 0.5,
                duration: 1,
                repeat: 3,
                repeatType: "reverse",
              },
            }}
            className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-green-100 to-green-200 border-4 border-green-300 shadow-xl"
          >
            <Check className="h-16 w-16 text-green-600" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800"
          >
            Hvala na vašem upitu!
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-xl text-blue-600"
          >
            Vaš zahtjev za ponudu je uspješno poslan. Kontaktirat ćemo vas u najkraćem mogućem roku.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, type: "spring" }}
            className="mt-4 inline-block bg-gradient-to-br from-yellow-100 to-yellow-200 border-2 border-yellow-400 rounded-xl px-6 py-3 shadow-lg"
          >
            <motion.p
              animate={{
                scale: [1, 1.05, 1],
                color: ["#1e40af", "#3b82f6", "#1e40af"],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
              className="text-lg font-medium text-blue-800"
            >
              Ostvarili ste 15% popusta na prvo čišćenje!
            </motion.p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 rounded-xl p-6 shadow-xl"
        >
          <h3 className="text-2xl font-bold text-blue-800 mb-6 text-center">Sažetak vašeg upita</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <Card3D className="p-4 relative">
                <h4 className="font-bold text-lg text-blue-700 mb-2">Kontakt podaci</h4>
                <p>
                  <span className="font-medium">Email:</span> {formData.email}
                </p>
                <p>
                  <span className="font-medium">Adresa:</span> {formData.address}
                </p>
                <p>
                  <span className="font-medium">Grad:</span> {formData.city}
                </p>
                <p>
                  <span className="font-medium">Telefon:</span> {formData.phone}
                </p>
                {formData.message && (
                  <div className="mt-2 pt-2 border-t border-gray-200">
                    <p>
                      <span className="font-medium">Poruka:</span> {formData.message}
                    </p>
                  </div>
                )}
                <div className="mt-2 pt-2 border-t border-gray-200">
                  <p>
                    <span className="font-medium">Odabrana usluga:</span>{" "}
                    {SERVICE_TYPES.find((s) => s.id === selectedService)?.name || "Čišćenje fasade"}
                  </p>
                </div>
              </Card3D>

              {/* Sažetak detalja ovisno o usluzi */}
              {(selectedService === "facade" || selectedService === "complete") && (
                <Card3D className="p-4 relative">
                  <h4 className="font-bold text-lg text-blue-700 mb-2">Dimenzije objekta</h4>
                  <p>
                    <span className="font-medium">Širina:</span> {formData.buildingWidth} m
                  </p>
                  <p>
                    <span className="font-medium">Dužina:</span> {formData.buildingLength} m
                  </p>
                  <p>
                    <span className="font-medium">Broj katova:</span> {formData.floors}
                  </p>
                  <p>
                    <span className="font-medium">Površina za čišćenje:</span> {adjustedArea} m²
                  </p>
                </Card3D>
              )}

              {(selectedService === "pool" || (selectedService === "complete" && hasPool)) && (
                <Card3D className="p-4 relative">
                  <h4 className="font-bold text-lg text-blue-700 mb-2">Detalji o bazenu</h4>
                  <p>
                    <span className="font-medium">Veličina:</span>{" "}
                    {formData.poolSize === "small"
                      ? "Mali (do 20m²)"
                      : formData.poolSize === "medium"
                        ? "Srednji (20-40m²)"
                        : "Veliki (preko 40m²)"}
                  </p>
                  <p>
                    <span className="font-medium">Tip:</span>{" "}
                    {formData.poolType === "standard"
                      ? "Standardni"
                      : formData.poolType === "saltwater"
                        ? "Slani bazen"
                        : "Infinity bazen"}
                  </p>
                </Card3D>
              )}

              {(selectedService === "yard" || selectedService === "complete" || formData.cleanYard) && (
                <Card3D className="p-4 relative">
                  <h4 className="font-bold text-lg text-blue-700 mb-2">Detalji o okućnici</h4>
                  <p>
                    <span className="font-medium">Površina:</span> {formData.yardSquareMeters} m²
                  </p>
                  <p>
                    <span className="font-medium">Stanje:</span> {formData.yardCondition}/5
                  </p>
                </Card3D>
              )}
            </div>

            <div className="flex flex-col items-center justify-center">
              <div className="w-full max-w-sm space-y-6">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-2 border-yellow-300 rounded-xl p-4 shadow-lg"
                >
                  <h4 className="font-bold text-lg text-blue-700 mb-2 text-center">Okvirna procjena cijene</h4>

                  {estimatedPrice && (
                    <>
                      {(selectedService === "facade" || selectedService === "complete") && adjustedArea && (
                        <div className="flex justify-between items-center mb-2">
                          <span>Cijena čišćenja fasade:</span>
                          <span className="font-medium">
                            {estimatedPrice.min === estimatedPrice.max
                              ? `${estimatedPrice.min}€`
                              : `${estimatedPrice.min}€ - ${estimatedPrice.max}€`}
                          </span>
                        </div>
                      )}

                      {(selectedService === "pool" || selectedService === "complete") && estimatedPrice.poolPrice && (
                        <div className="flex justify-between items-center mb-2">
                          <span>Cijena čišćenja bazena:</span>
                          <span className="font-medium">{estimatedPrice.poolPrice}€</span>
                        </div>
                      )}

                      {(selectedService === "yard" || selectedService === "complete" || formData.cleanYard) &&
                        estimatedPrice.yardPrice && (
                          <div className="flex justify-between items-center mb-2">
                            <span>Cijena čišćenja okućnice:</span>
                            <span className="font-medium">{estimatedPrice.yardPrice}€</span>
                          </div>
                        )}

                      {formData.carWash && estimatedPrice.carWashPrice && (
                        <div className="flex justify-between items-center mb-2">
                          <span>Vanjsko pranje automobila:</span>
                          <span className="font-medium">{estimatedPrice.carWashPrice}€</span>
                        </div>
                      )}

                      <div className="flex justify-between items-center mb-2 text-green-600 font-medium">
                        <span>Popust za prvo čišćenje:</span>
                        <span className="font-medium">-15%</span>
                      </div>

                      <div className="h-px bg-gray-200 my-3"></div>
                      <div className="flex justify-between items-center text-lg font-bold">
                        <span>Ukupna cijena:</span>
                        <motion.span
                          animate={{
                            scale: [1, 1.05, 1],
                            color: ["#1e40af", "#3b82f6", "#1e40af"],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            repeatType: "reverse",
                          }}
                          className="text-blue-700"
                        >
                          {estimatedPrice.min +
                            (estimatedPrice.yardPrice || 0) +
                            (estimatedPrice.poolPrice || 0) +
                            (estimatedPrice.carWashPrice || 0)}
                          €
                          {estimatedPrice.max !== estimatedPrice.min &&
                            ` - ${estimatedPrice.max + (estimatedPrice.yardPrice || 0) + (estimatedPrice.poolPrice || 0) + (estimatedPrice.carWashPrice || 0)}€`}
                        </motion.span>
                      </div>
                    </>
                  )}
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 rounded-xl p-4 shadow-lg"
                >
                  <h4 className="font-bold text-lg text-blue-700 mb-2 text-center">Sljedeći koraci</h4>
                  <ul className="text-sm text-blue-600 list-disc pl-5 space-y-1">
                    <motion.li
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.2 }}
                    >
                      Kontaktirat ćemo vas u roku od 24 sata
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.4 }}
                    >
                      Dogovorit ćemo termin za besplatni pregled
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.6 }}
                    >
                      Poslat ćemo vam detaljnu ponudu
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.8 }}
                    >
                      Nakon prihvaćanja ponude, dogovaramo termin izvođenja
                    </motion.li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
        <div className="pt-6 text-center">
          <Button3D
            onClick={() => {
              setStep(1)
              setProgress(0)
              // Reset form data
              setFormData({
                email: "",
                address: "",
                name: "",
                phone: "",
                city: "",
                postalCode: "",
                message: "",
                floors: 0,
                windowsSmall: 0,
                windowsDouble: 0,
                balconyType: "",
                balconyCount: 0,
                buildingWidth: "",
                buildingLength: "",
                facadeCondition: 3,
                facadeSides: 4,
                yardSquareMeters: "",
                yardCondition: 3,
                hasPlants: false,
                hasTrees: false,
                poolSize: "medium",
                poolType: "standard",
                poolLastCleaned: "",
                cleanYard: false,
                carWash: false,
              })
            }}
            className="bg-gradient-to-br from-blue-500 to-blue-600"
          >
            Zatraži novu ponudu <Sparkles className="ml-2 h-5 w-5" />
          </Button3D>
        </div>
      </motion.div>
    )
  }

  return (
    <div className="container max-w-3xl mx-auto py-12 px-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative"
        style={{
          perspective: "1000px",
          transformStyle: "preserve-3d",
        }}
      >
        {/* 3D Background elements */}
        <motion.div
          animate={{
            rotateX: [0, 5, 0, -5, 0],
            rotateY: [0, -5, 0, 5, 0],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
          className="absolute inset-0 -z-10 overflow-hidden rounded-2xl"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-blue-200 opacity-20"></div>
          <div className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-yellow-200 opacity-20"></div>
          <div className="absolute top-1/4 right-10 w-20 h-20 rounded-full bg-green-200 opacity-20"></div>
          <div className="absolute bottom-1/4 left-10 w-20 h-20 rounded-full bg-red-200 opacity-20"></div>
        </motion.div>

        {/* Progress bar */}
        <div className="relative h-4 bg-gray-200 rounded-full mb-8 overflow-hidden shadow-inner">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full z-10"
          />
          <motion.div
            animate={{
              x: [0, 20, 0, -20, 0],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
            className="absolute top-0 left-0 h-full w-32 bg-white/30 skew-x-12 z-20"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-blue-100"
          style={{
            transformStyle: "preserve-3d",
            boxShadow: "0 20px 50px rgba(0, 0, 0, 0.1)",
          }}
        >
          <AnimatePresence mode="wait">
            {step === 1 && renderContactInfo()}
            {step === 2 && renderDimensions()}
            {step === 3 && renderReview()}
            {step === 4 && renderSuccess()}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </div>
  )
}
