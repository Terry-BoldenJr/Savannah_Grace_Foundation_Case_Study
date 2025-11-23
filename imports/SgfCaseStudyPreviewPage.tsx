import imgSgfLBrandingLogo23 from "figma:asset/795d653fcb75e3f6103a7162aec31aba0d1f1deb.png";
import imgSgfSkewedPreview from "figma:asset/d4130a367667a719a51d755481da8cc5be8910ce.png";
import imgSgfCaseStudyPreviewPage from "figma:asset/d3f1916314c87cc782f6219c6c0d55071a6ffff6.png";

function Group() {
  return (
    <div className="absolute contents left-[49px] top-[490px]">
      <div className="absolute flex flex-col font-['Benzin_Bold:Bold',sans-serif] justify-center leading-[0] left-[299px] not-italic text-[#116dff] text-[45.833px] text-center top-[942px] translate-x-[-50%] translate-y-[-50%] w-[500px]">
        <p className="leading-[normal]">Project By: Terry D Bolden Jr</p>
      </div>
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.010471783578395844)+(var(--transform-inner-height)*0.9622179865837097)))] items-center justify-center left-[72px] mix-blend-luminosity top-[490px] w-[calc(1px*((var(--transform-inner-height)*0.2722802460193634)+(var(--transform-inner-width)*0.9999451637268066)))]" style={{ "--transform-inner-width": "271.140625", "--transform-inner-height": "331.953125" } as React.CSSProperties}>
        <div className="flex-none rotate-[359.4deg] skew-x-[14.692deg]">
          <div className="h-[331.975px] relative w-[271.153px]" data-name="SGF lBranding logo2 3">
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
              <div className="absolute bg-[rgba(189,233,251,0.2)] inset-0" />
              <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgSgfLBrandingLogo23} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SkewedPreviewOfTheSgfCaseStudy() {
  return (
    <div className="h-[1080px] relative shrink-0 w-full" data-name="Skewed preview of THE SGF Case study">
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0)+(var(--transform-inner-height)*0.9819586873054504)))] items-center justify-center left-[549px] top-[391px] w-[calc(1px*((var(--transform-inner-height)*0.18909543752670288)+(var(--transform-inner-width)*1)))]" style={{ "--transform-inner-width": "1075.03125", "--transform-inner-height": "754.390625" } as React.CSSProperties}>
        <div className="flex-none skew-x-[10.708deg]">
          <div className="h-[754.408px] relative rounded-[4px] w-[1075.04px]" data-name="SGF Skewed Preview">
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[4px]">
              <div className="absolute bg-[rgba(189,233,251,0.2)] inset-0 rounded-[4px]" />
              <div className="absolute inset-0 overflow-hidden rounded-[4px]">
                <img alt="" className="absolute h-[115.01%] left-[-15.96%] max-w-none top-[-19.05%] w-[125.75%]" src={imgSgfSkewedPreview} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Group />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute box-border content-stretch flex gap-[10px] items-center justify-center left-[126px] p-[10px] top-[75px]">
      <div className="flex flex-col font-['Benzin_Bold:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#116dff] text-[72px] text-center text-nowrap">
        <p className="leading-[normal] whitespace-pre">The Savannah Grace Foundation</p>
      </div>
    </div>
  );
}

export default function SgfCaseStudyPreviewPage() {
  return (
    <button className="cursor-pointer relative rounded-[12px] size-full" data-name="SGF Case Study Preview Page">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[12px]">
        <div className="absolute bg-white inset-0 rounded-[12px]" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover opacity-20 rounded-[12px] size-full" src={imgSgfCaseStudyPreviewPage} />
      </div>
      <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip relative rounded-[inherit] size-full">
        <SkewedPreviewOfTheSgfCaseStudy />
        <Frame />
        <p className="absolute font-['Benzin_Bold:Bold',sans-serif] leading-[normal] left-[calc(50%-384px)] not-italic text-[#116dff] text-[72px] text-nowrap top-[189px] whitespace-pre">Case Study</p>
      </div>
      <div aria-hidden="true" className="absolute border-8 border-[#5e97ff] border-solid inset-[-8px] pointer-events-none rounded-[20px]" />
    </button>
  );
}