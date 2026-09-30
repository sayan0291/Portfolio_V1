import { Button,Icon,Card,Footer,Header,Reveal,SweepAnimation,ToggleButton } from "../../components"
import { Project,TechStack } from "../../pages"
import { useTheme } from "../../hooks/useTheme"
import { projects } from "../../data/projectData"


export const MainLayouts = () => {

    const { t,curtain,setSelected,selected } = useTheme()

    return(
        <>
            <div className={`min-h-screen ${t.bg} ${t.text} transition-colors duration-300 font-sans relative overflow-hidden`}>
                {/* curtain sweep overlay */}
                <SweepAnimation t={t} curtain={curtain} />

                <div className="max-w-2xl mx-auto px-6 py-16">
                    <Header/>

                    <Project t={t} setSelected={setSelected} />

                    <TechStack t={t} />
                    <Footer t={t} />
                    
                </div>

                <Card selected={selected} setSelected={setSelected} t={t} projects={projects} />
            </div>
        </>
    )
}